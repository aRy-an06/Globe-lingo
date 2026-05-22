from flask import Flask, render_template, request, jsonify
from PIL import Image
import io
import base64
import easyocr
import speech_recognition as sr
from deep_translator import GoogleTranslator
from langdetect import detect, LangDetectException

app = Flask(__name__)

# Map standard 2-letter codes to EasyOCR's specific dialect models
# EasyOCR only supports a limited set — unsupported languages fall back to 'en'
EASY_OCR_MAP = {
    'en': 'en', 'es': 'es', 'fr': 'fr', 'de': 'de',
    'it': 'it', 'pt': 'pt', 'ru': 'ru',
    'zh-CN': 'ch_sim', 'zh-TW': 'ch_tra',
    'ja': 'ja', 'ar': 'ar', 'hi': 'hi',
    'ko': 'ko', 'th': 'th', 'vi': 'vi',
    'bn': 'bn', 'ta': 'ta', 'te': 'te',
    'kn': 'kn', 'mr': 'mr', 'ne': 'ne',
    'auto': 'en'
}

# Remap language codes that differ between our UI and what deep_translator expects
# NOTE: deep_translator uses 'iw' for Hebrew and 'jw' for Javanese (same as Google Translate API)
# so NO remapping is needed for those. zh-CN and zh-TW pass through as-is.
DEEP_TRANS_MAP = {
    'zh-CN': 'zh-CN', # Chinese Simplified — pass through explicitly
    'zh-TW': 'zh-TW', # Chinese Traditional — pass through explicitly
    'auto': 'auto'
}

# CACHE: Store EasyOCR models in memory so they only load once per language
READERS = {}

def get_easyocr_reader(lang_code):
    """Loads and caches the EasyOCR model for the requested language."""
    if lang_code not in READERS:
        # We always include English ('en') alongside the target language 
        # so it can read mixed text (like a Spanish sign with an English brand name).
        langs = [lang_code, 'en'] if lang_code != 'en' else ['en']
        print(f"Loading EasyOCR model for: {langs} (This takes a moment on first run...)")
        
        # gpu=False ensures it works on all standard machines without requiring NVIDIA drivers
        READERS[lang_code] = easyocr.Reader(langs, gpu=False)
        
    return READERS[lang_code]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    q = data.get('q', '')
    source = data.get('source', 'auto')
    target = data.get('target', 'en')

    if not q.strip():
        return jsonify({"error": "Empty text provided"}), 400

    try:
        mapped_source = DEEP_TRANS_MAP.get(source, source)
        mapped_target = DEEP_TRANS_MAP.get(target, target)

        translated_text = GoogleTranslator(source=mapped_source, target=mapped_target).translate(q)
        return jsonify({"translatedText": translated_text})
            
    except Exception as e:
        return jsonify({"error": f"Translation Error: {str(e)}"}), 500

@app.route('/detect', methods=['POST'])
def detect_language():
    data = request.get_json()
    q = data.get('q', '')

    if not q.strip() or len(q.strip()) < 3:
        return jsonify([{"language": "unknown"}]), 200

    try:
        detected_code = detect(q)
        return jsonify([{"language": detected_code}])
    except Exception:
        return jsonify([{"language": "unknown"}]), 200

@app.route('/ocr', methods=['POST'])
def ocr():
    if 'image' not in request.files:
        return jsonify({"error": "No image file uploaded"}), 400
        
    file = request.files['image']
    source_lang = request.form.get('lang', 'auto')
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
        
    try:
        # Read the raw image bytes straight from the upload
        image_bytes = file.read()
        
        # Map user's dropdown selection to EasyOCR's language format
        easy_lang_code = EASY_OCR_MAP.get(source_lang, 'en')
        
        # Fetch the cached AI model for this language
        reader = get_easyocr_reader(easy_lang_code)
        
        # Run EasyOCR extraction directly on the bytes.
        # detail=0 returns just the text, paragraph=True groups sentences naturally
        result = reader.readtext(image_bytes, detail=0, paragraph=True)
        
        # Combine the detected paragraphs into a single string
        extracted_text = "\n".join(result)
        
        if not extracted_text.strip():
            return jsonify({"error": "No text could be found in the image."}), 404
            
        return jsonify({"extracted_text": extracted_text.strip()})
        
    except Exception as e:
        return jsonify({"error": f"OCR Error: {str(e)}"}), 500

@app.route('/transcribe', methods=['POST'])
def transcribe():
    """
    Server-side speech-to-text fallback.
    Receives raw 16-bit PCM audio (base64-encoded) from the browser's AudioContext,
    then calls Google's STT API from the server side — bypassing browser network blocks.
    """
    data = request.get_json()
    audio_b64 = data.get('audio_data', '')
    lang = data.get('lang', 'en-US')
    sample_rate = int(data.get('sample_rate', 16000))

    if not audio_b64:
        return jsonify({"error": "No audio data received"}), 400

    try:
        raw_pcm = base64.b64decode(audio_b64)
        recognizer = sr.Recognizer()
        # sr.AudioData expects raw PCM bytes, sample rate, and bytes-per-sample
        audio_data = sr.AudioData(raw_pcm, sample_rate, 2)  # 2 = 16-bit (2 bytes/sample)
        text = recognizer.recognize_google(audio_data, language=lang)
        return jsonify({"transcript": text})

    except sr.UnknownValueError:
        return jsonify({"error": "Could not understand audio. Please speak more clearly."}), 400
    except sr.RequestError as e:
        return jsonify({"error": f"Speech service unavailable from server: {str(e)}"}), 503
    except Exception as e:
        return jsonify({"error": f"Transcription error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)