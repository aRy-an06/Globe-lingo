// --- Constants & Global Variables ---
const LANGUAGES = [
    { code: 'af', name: 'Afrikaans' },
    { code: 'sq', name: 'Albanian' },
    { code: 'am', name: 'Amharic' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hy', name: 'Armenian' },
    { code: 'as', name: 'Assamese' },
    { code: 'ay', name: 'Aymara' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'bm', name: 'Bambara' },
    { code: 'eu', name: 'Basque' },
    { code: 'be', name: 'Belarusian' },
    { code: 'bn', name: 'Bengali' },
    { code: 'bho', name: 'Bhojpuri' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'ca', name: 'Catalan' },
    { code: 'ceb', name: 'Cebuano' },
    { code: 'ny', name: 'Chichewa' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'zh-TW', name: 'Chinese (Traditional)' },
    { code: 'co', name: 'Corsican' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'dv', name: 'Dhivehi' },
    { code: 'doi', name: 'Dogri' },
    { code: 'nl', name: 'Dutch' },
    { code: 'en', name: 'English' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estonian' },
    { code: 'ee', name: 'Ewe' },
    { code: 'tl', name: 'Filipino' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'fy', name: 'Frisian' },
    { code: 'gl', name: 'Galician' },
    { code: 'ka', name: 'Georgian' },
    { code: 'de', name: 'German' },
    { code: 'el', name: 'Greek' },
    { code: 'gn', name: 'Guarani' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ht', name: 'Haitian Creole' },
    { code: 'ha', name: 'Hausa' },
    { code: 'haw', name: 'Hawaiian' },
    { code: 'iw', name: 'Hebrew' },
    { code: 'hi', name: 'Hindi' },
    { code: 'hmn', name: 'Hmong' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'is', name: 'Icelandic' },
    { code: 'ig', name: 'Igbo' },
    { code: 'ilo', name: 'Ilocano' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ga', name: 'Irish' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'jw', name: 'Javanese' },
    { code: 'kn', name: 'Kannada' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'km', name: 'Khmer' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'gom', name: 'Konkani' },
    { code: 'ko', name: 'Korean' },
    { code: 'kri', name: 'Krio' },
    { code: 'ku', name: 'Kurdish (Kurmanji)' },
    { code: 'ckb', name: 'Kurdish (Sorani)' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'lo', name: 'Lao' },
    { code: 'la', name: 'Latin' },
    { code: 'lv', name: 'Latvian' },
    { code: 'ln', name: 'Lingala' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lg', name: 'Luganda' },
    { code: 'lb', name: 'Luxembourgish' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'mai', name: 'Maithili' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'ms', name: 'Malay' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'mt', name: 'Maltese' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'mni-Mtei', name: 'Meitei (Manipuri)' },
    { code: 'lus', name: 'Mizo' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'my', name: 'Myanmar (Burmese)' },
    { code: 'ne', name: 'Nepali' },
    { code: 'no', name: 'Norwegian' },
    { code: 'or', name: 'Odia (Oriya)' },
    { code: 'om', name: 'Oromo' },
    { code: 'ps', name: 'Pashto' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'qu', name: 'Quechua' },
    { code: 'ro', name: 'Romanian' },
    { code: 'ru', name: 'Russian' },
    { code: 'sm', name: 'Samoan' },
    { code: 'sa', name: 'Sanskrit' },
    { code: 'gd', name: 'Scots Gaelic' },
    { code: 'nso', name: 'Sepedi' },
    { code: 'sr', name: 'Serbian' },
    { code: 'st', name: 'Sesotho' },
    { code: 'sn', name: 'Shona' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'si', name: 'Sinhala' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'so', name: 'Somali' },
    { code: 'es', name: 'Spanish' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'sv', name: 'Swedish' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ta', name: 'Tamil' },
    { code: 'tt', name: 'Tatar' },
    { code: 'te', name: 'Telugu' },
    { code: 'th', name: 'Thai' },
    { code: 'ti', name: 'Tigrinya' },
    { code: 'ts', name: 'Tsonga' },
    { code: 'tr', name: 'Turkish' },
    { code: 'tk', name: 'Turkmen' },
    { code: 'ak', name: 'Twi' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'ur', name: 'Urdu' },
    { code: 'ug', name: 'Uyghur' },
    { code: 'uz', name: 'Uzbek' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'cy', name: 'Welsh' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: 'Yiddish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'zu', name: 'Zulu' }
];

// Browsers require strict dialect codes for Voice Recognition to work
const VOICE_LANG_MAP = {
    'af': 'af-ZA', 'sq': 'sq-AL', 'am': 'am-ET', 'ar': 'ar-SA',
    'hy': 'hy-AM', 'az': 'az-AZ', 'eu': 'eu-ES', 'be': 'be-BY',
    'bn': 'bn-BD', 'bs': 'bs-BA', 'bg': 'bg-BG', 'ca': 'ca-ES',
    'zh-CN': 'zh-CN', 'zh-TW': 'zh-TW', 'hr': 'hr-HR', 'cs': 'cs-CZ',
    'da': 'da-DK', 'nl': 'nl-NL', 'en': 'en-US', 'et': 'et-EE',
    'tl': 'fil-PH', 'fi': 'fi-FI', 'fr': 'fr-FR', 'gl': 'gl-ES',
    'ka': 'ka-GE', 'de': 'de-DE', 'el': 'el-GR', 'gu': 'gu-IN',
    'ht': 'fr-HT', 'ha': 'ha-NG', 'iw': 'he-IL', 'hi': 'hi-IN',
    'hu': 'hu-HU', 'is': 'is-IS', 'id': 'id-ID', 'ga': 'ga-IE',
    'it': 'it-IT', 'ja': 'ja-JP', 'jw': 'jv-ID', 'kn': 'kn-IN',
    'kk': 'kk-KZ', 'km': 'km-KH', 'ko': 'ko-KR', 'ky': 'ky-KG',
    'lo': 'lo-LA', 'lv': 'lv-LV', 'lt': 'lt-LT', 'lb': 'lb-LU',
    'mk': 'mk-MK', 'mg': 'mg-MG', 'ms': 'ms-MY', 'ml': 'ml-IN',
    'mt': 'mt-MT', 'mi': 'mi-NZ', 'mr': 'mr-IN', 'mn': 'mn-MN',
    'my': 'my-MM', 'ne': 'ne-NP', 'no': 'nb-NO', 'ps': 'ps-AF',
    'fa': 'fa-IR', 'pl': 'pl-PL', 'pt': 'pt-PT', 'pa': 'pa-IN',
    'ro': 'ro-RO', 'ru': 'ru-RU', 'sm': 'sm-WS', 'sr': 'sr-RS',
    'sk': 'sk-SK', 'sl': 'sl-SI', 'so': 'so-SO', 'es': 'es-ES',
    'sw': 'sw-KE', 'sv': 'sv-SE', 'tg': 'tg-TJ', 'ta': 'ta-IN',
    'te': 'te-IN', 'th': 'th-TH', 'tr': 'tr-TR', 'tk': 'tk-TM',
    'uk': 'uk-UA', 'ur': 'ur-PK', 'uz': 'uz-UZ', 'vi': 'vi-VN',
    'cy': 'cy-GB', 'xh': 'xh-ZA', 'yi': 'yi', 'yo': 'yo-NG',
    'zu': 'zu-ZA', 'auto': 'en-US'
};

let typingTimer;
const DONE_TYPING_INTERVAL = 800;
let recognition = null;
let isRecording = false;
let isServerSTT = false;   // true when using the server-side fallback
let pcmChunks = [];        // raw PCM chunks collected via AudioContext
let audioCtx = null;
let mediaStream = null;
let lastDetectedLangCode = ''; // tracks the last language code detected from typing or speaking

// --- DOM Elements ---
const sourceLangSelect = document.getElementById('sourceLang');
const targetLangSelect = document.getElementById('targetLang');
const sourceText = document.getElementById('sourceText');
const targetText = document.getElementById('targetText');
const detectedLangLabel = document.getElementById('detectedLangLabel');

const translateBtn = document.getElementById('translateBtn');
const swapBtn = document.getElementById('swapBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const themeToggle = document.getElementById('themeToggle');
const toast = document.getElementById('toast');

// Voice
const micBtn = document.getElementById('micBtn');
const micStatus = document.getElementById('micStatus');
const waveAnimation = document.getElementById('waveAnimation');
const speakSourceBtn = document.getElementById('speakSourceBtn');
const speakTargetBtn = document.getElementById('speakTargetBtn');
const stopSpeakBtn = document.getElementById('stopSpeakBtn');
const speechSpeed = document.getElementById('speechSpeed');

// OCR
const dropZone = document.getElementById('dropZone');
const imageInput = document.getElementById('imageInput');
const ocrLoader = document.getElementById('ocrLoader');

// History
const historyList = document.getElementById('historyList');
const historySearch = document.getElementById('historySearch');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    populateLanguages();
    initSpeechRecognition();
    renderHistory();
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

function populateLanguages() {
    LANGUAGES.forEach(lang => {
        const optSource = document.createElement('option');
        optSource.value = lang.code;
        optSource.textContent = lang.name;
        sourceLangSelect.appendChild(optSource);

        const optTarget = document.createElement('option');
        optTarget.value = lang.code;
        optTarget.textContent = lang.name;
        if (lang.code === 'es') optTarget.selected = true;
        targetLangSelect.appendChild(optTarget);
    });
}

swapBtn.addEventListener('click', () => {
    if (sourceLangSelect.value === 'auto') {
        showToast("Cannot swap when 'Auto Detect' is selected.");
        return;
    }
    const tempLang = sourceLangSelect.value;
    sourceLangSelect.value = targetLangSelect.value;
    targetLangSelect.value = tempLang;

    const tempText = sourceText.value;
    sourceText.value = targetText.value;
    targetText.value = tempText;
    detectedLangLabel.textContent = '';
});

clearBtn.addEventListener('click', () => {
    sourceText.value = '';
    targetText.value = '';
    detectedLangLabel.textContent = '';
});

copyBtn.addEventListener('click', () => {
    if (!targetText.value) return;
    navigator.clipboard.writeText(targetText.value);
    const icon = copyBtn.querySelector('i');
    icon.className = 'fa-solid fa-check';
    setTimeout(() => { icon.className = 'fa-solid fa-copy'; }, 2000);
});

sourceText.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (sourceLangSelect.value === 'auto' && sourceText.value.trim().length > 2) {
        typingTimer = setTimeout(detectLanguage, DONE_TYPING_INTERVAL);
    } else {
        detectedLangLabel.textContent = '';
    }
});

async function detectLanguage() {
    const text = sourceText.value.trim();
    if (!text) return;

    try {
        const response = await fetch('/detect', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ q: text })
        });
        const data = await response.json();
        
        if (data && data.length > 0) {
            const code = data[0].language;
            lastDetectedLangCode = code; // Save the detected code for TTS fallback
            const langObj = LANGUAGES.find(l => l.code === code);
            // Show the language name if we know it, otherwise just show the code
            if (langObj) detectedLangLabel.textContent = `Detected: ${langObj.name}`;
            else if (code && code !== 'unknown') detectedLangLabel.textContent = `Detected: ${code.toUpperCase()}`;
        }
    } catch (err) {
        console.error("Detection error:", err);
    }
}

translateBtn.addEventListener('click', performTranslation);

async function performTranslation() {
    const text = sourceText.value.trim();
    if (!text) {
        showToast("Please enter text to translate.");
        return;
    }

    const source = sourceLangSelect.value;
    const target = targetLangSelect.value;

    // Trigger detectLanguage asynchronously if source is auto, so UI and lastDetectedLangCode are updated
    if (source === 'auto') {
        detectLanguage();
    }

    const btnIcon = translateBtn.querySelector('i');
    btnIcon.className = 'fa-solid fa-spinner fa-spin';
    translateBtn.disabled = true;

    try {
        const response = await fetch('/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ q: text, source: source, target: target })
        });

        const data = await response.json();

        if (response.ok) {
            targetText.value = data.translatedText;
            saveToHistory(text, data.translatedText, source, target);
        } else {
            showToast(data.error || "Translation failed.");
        }
    } catch (err) {
        showToast("Network error. Ensure the backend is running.");
    } finally {
        btnIcon.className = 'fa-solid fa-language';
        translateBtn.disabled = false;
    }
}

const synth = window.speechSynthesis;
let currentAudio = null;

function speak(text, langCode) {
    if (!text) return;
    
    // Stop any ongoing speech
    if (synth) synth.cancel(); 
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // If the language is 'auto', try to use the last detected language code
    let finalLang = langCode;
    if (langCode === 'auto') {
        finalLang = lastDetectedLangCode || 'en';
    }
    
    // Google TTS URL provides much better and consistent voices across all browsers,
    // but limits to ~200 chars. We use it as primary for short sentences.
    if (text.length <= 200) {
        // client=tw-ob bypasses captcha for translate_tts
        // We pass the full finalLang (e.g. zh-CN, pt-BR) because Google supports these dialects natively!
        const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${finalLang}&client=tw-ob`;
        currentAudio = new Audio(url);
        currentAudio.playbackRate = parseFloat(speechSpeed.value) || 1;
        
        currentAudio.play().catch(err => {
            console.warn("Google TTS API URL failed, falling back to browser TTS:", err);
            speakBrowser(text, finalLang);
        });
    } else {
        // Fall back to browser TTS for long texts
        speakBrowser(text, finalLang);
    }
}

function speakBrowser(text, finalLang) {
    if (!synth) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Determine the BCP-47 tag to request
    const requestedLangTag = VOICE_LANG_MAP[finalLang] || finalLang || 'en-US';
    utterance.lang = requestedLangTag;
    utterance.rate = parseFloat(speechSpeed.value);

    // Get list of voices
    const voices = synth.getVoices();
    
    // Find best matching voice
    let matchedVoice = null;
    if (voices && voices.length > 0) {
        // Try exact match (e.g., 'ru-RU')
        matchedVoice = voices.find(v => v.lang.toLowerCase() === requestedLangTag.toLowerCase());
        
        // Try base language match (e.g., 'ru')
        if (!matchedVoice) {
            const baseLang = finalLang.split('-')[0].toLowerCase();
            matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith(baseLang));
        }
        
        // Try any language match that contains the base language code
        if (!matchedVoice) {
            const baseLang = finalLang.split('-')[0].toLowerCase();
            matchedVoice = voices.find(v => v.lang.toLowerCase().includes(baseLang));
        }
    }
    
    if (matchedVoice) {
        utterance.voice = matchedVoice;
        console.log(`TTS: Using browser voice "${matchedVoice.name}" for "${finalLang}"`);
    } else {
        const langObj = LANGUAGES.find(l => l.code === finalLang);
        const langName = langObj ? langObj.name : finalLang.toUpperCase();
        console.warn(`TTS: No native browser voice found for ${langName}`);
        showToast(`Native browser voice for ${langName} not found. Playing fallback.`);
    }

    utterance.onerror = (e) => {
        console.error("SpeechSynthesisUtterance error:", e);
    };

    // Keep a global reference to avoid garbage collection bug in Chrome
    window._activeUtterance = utterance;
    
    // Speak
    synth.speak(utterance);
}

speakSourceBtn.addEventListener('click', () => speak(sourceText.value, sourceLangSelect.value));
speakTargetBtn.addEventListener('click', () => speak(targetText.value, targetLangSelect.value));
stopSpeakBtn.addEventListener('click', () => { 
    if (synth) synth.cancel(); 
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        micBtn.style.display = 'none';
        micStatus.textContent = "Voice not supported in this browser.";
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;

    let hasSpoken = false; // tracks whether this session produced any final speech

    recognition.onstart = () => {
        isRecording = true;
        hasSpoken = false;
        micBtn.classList.add('recording');
        waveAnimation.classList.remove('hidden');
        micStatus.textContent = "Listening...";
    };

    // FIX: scan from index 0 and separate interim vs final transcripts
    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = 0; i < event.results.length; ++i) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
                hasSpoken = true;
            } else {
                interimTranscript += transcript;
            }
        }

        // Show final text + italic interim text as a live preview
        sourceText.value = finalTranscript + interimTranscript;
    };

    // FIX: show a toast for ALL error types, not just 'not-allowed'
    recognition.onerror = (event) => {
        isRecording = false;
        hasSpoken = false;
        resetMicUI();
        if (event.error === 'network') {
            // Browser can't reach Google's speech servers — switch to server-side STT
            showToast('Browser voice blocked. Switching to server mode...');
            startServerSTT();
            return;
        }
        const errorMessages = {
            'not-allowed':    'Microphone access denied. Check browser permissions.',
            'no-speech':      'No speech detected. Please try again.',
            'audio-capture':  'No microphone found. Check your audio settings.',
            'aborted':        'Voice recognition was cancelled.',
        };
        const msg = errorMessages[event.error] || `Voice error: ${event.error}`;
        showToast(msg);
    };

    // FIX: only auto-translate if this session actually captured final speech
    recognition.onend = () => {
        isRecording = false;
        resetMicUI();
        if (hasSpoken && sourceText.value.trim().length > 0) {
            performTranslation();
        }
        hasSpoken = false;
    };
}

function resetMicUI() {
    micBtn.classList.remove('recording');
    waveAnimation.classList.add('hidden');
    micStatus.textContent = "Click to speak";
}

micBtn.addEventListener('click', () => {
    // If currently using server STT fallback, stop the recording
    if (isServerSTT) {
        stopServerSTT();
        return;
    }
    if (!recognition) {
        // No Web Speech API — go straight to server STT
        startServerSTT();
        return;
    }
    if (isRecording) {
        recognition.stop();
    } else {
        // Map UI language code to strict BCP-47 dialect code
        recognition.lang = VOICE_LANG_MAP[sourceLangSelect.value] || sourceLangSelect.value || 'en-US';
        recognition.start();
    }
});

// --- Server-Side STT (Fallback when browser network is blocked) ---

async function startServerSTT() {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioCtx   = new AudioContext({ sampleRate: 16000 });
        pcmChunks  = [];

        const source    = audioCtx.createMediaStreamSource(mediaStream);
        const processor = audioCtx.createScriptProcessor(4096, 1, 1);

        processor.onaudioprocess = (e) => {
            // Copy Float32 PCM samples from the current buffer
            pcmChunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
        };

        source.connect(processor);
        processor.connect(audioCtx.destination);

        // Store refs so stopServerSTT can disconnect them
        audioCtx._processor = processor;
        audioCtx._source    = source;

        isRecording = true;
        isServerSTT = true;
        micBtn.classList.add('recording');
        waveAnimation.classList.remove('hidden');
        micStatus.textContent = 'Listening (server mode)...';

    } catch (err) {
        showToast('Microphone access denied.');
        resetMicUI();
    }
}

async function stopServerSTT() {
    // Disconnect AudioContext nodes
    if (audioCtx) {
        if (audioCtx._source)    audioCtx._source.disconnect();
        if (audioCtx._processor) audioCtx._processor.disconnect();
        audioCtx.close();
        audioCtx = null;
    }
    if (mediaStream) {
        mediaStream.getTracks().forEach(t => t.stop());
        mediaStream = null;
    }

    isRecording = false;
    isServerSTT = false;
    micStatus.textContent = 'Transcribing...';
    micBtn.classList.remove('recording');
    waveAnimation.classList.add('hidden');

    if (pcmChunks.length === 0) {
        resetMicUI();
        return;
    }

    // Merge all Float32 chunks into a single array
    const totalLen = pcmChunks.reduce((s, c) => s + c.length, 0);
    const merged   = new Float32Array(totalLen);
    let offset = 0;
    for (const chunk of pcmChunks) { merged.set(chunk, offset); offset += chunk.length; }

    // Convert Float32 [-1,1] → Int16 PCM
    const int16 = new Int16Array(merged.length);
    for (let i = 0; i < merged.length; i++) {
        int16[i] = Math.max(-32768, Math.min(32767, merged[i] * 32768));
    }

    // Base64-encode the raw PCM bytes
    const bytes  = new Uint8Array(int16.buffer);
    let   binary = '';
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    const b64 = btoa(binary);

    const langCode = VOICE_LANG_MAP[sourceLangSelect.value] || sourceLangSelect.value || 'en-US';

    try {
        const response = await fetch('/transcribe', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ audio_data: b64, lang: langCode, sample_rate: 16000 })
        });
        const data = await response.json();

        if (response.ok && data.transcript) {
            sourceText.value = data.transcript;
            performTranslation();
        } else {
            showToast(data.error || 'Transcription failed.');
        }
    } catch (err) {
        showToast('Server transcription error. Check your connection.');
    } finally {
        resetMicUI();
    }
}

dropZone.addEventListener('click', () => imageInput.click());
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleImageUpload(e.dataTransfer.files[0]);
    }
});

imageInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) handleImageUpload(e.target.files[0]);
});

async function handleImageUpload(file) {
    if (!file.type.startsWith('image/')) {
        showToast("Please upload a valid image file.");
        return;
    }

    if (sourceLangSelect.value === 'auto') {
        showToast("Please select the specific Source Language for the image. OCR needs to know the language!");
        return;
    }

    const formData = new FormData();
    formData.append('image', file);
    
    // Pass the currently selected source language to the Python backend to fix OCR
    formData.append('lang', sourceLangSelect.value);

    dropZone.classList.add('hidden');
    ocrLoader.classList.remove('hidden');

    try {
        const response = await fetch('/ocr', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (response.ok) {
            sourceText.value = data.extracted_text;
            showToast("Text extracted! Auto-translating...");
            performTranslation();
        } else {
            showToast(data.error || "Failed to extract text from image.");
        }
    } catch (err) {
        showToast("Network error during image processing.");
    } finally {
        dropZone.classList.remove('hidden');
        ocrLoader.classList.add('hidden');
        imageInput.value = ""; 
    }
}

function getHistory() { return JSON.parse(localStorage.getItem('globeLingoHistory') || '[]'); }

function saveToHistory(orig, trans, src, tgt) {
    const history = getHistory();
    const newItem = {
        id: Date.now(),
        orig, trans,
        src: src === 'auto' ? 'Auto' : LANGUAGES.find(l=>l.code===src)?.name || src,
        tgt: LANGUAGES.find(l=>l.code===tgt)?.name || tgt,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    history.unshift(newItem);
    if (history.length > 20) history.pop();
    
    localStorage.setItem('globeLingoHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory(filterText = '') {
    const history = getHistory();
    historyList.innerHTML = '';
    const filtered = history.filter(item => 
        item.orig.toLowerCase().includes(filterText.toLowerCase()) || 
        item.trans.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        historyList.innerHTML = '<p class="empty-state">No recent translations.</p>';
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <p class="orig">${item.orig}</p>
            <p class="trans">${item.trans}</p>
            <div class="history-meta">
                <span>${item.src} &rarr; ${item.tgt}</span>
                <span>${item.time}</span>
            </div>
            <button class="delete-item-btn" onclick="deleteHistoryItem(${item.id}, event)"><i class="fa-solid fa-xmark"></i></button>
        `;
        div.addEventListener('click', () => {
            sourceText.value = item.orig;
            targetText.value = item.trans;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        historyList.appendChild(div);
    });
}

window.deleteHistoryItem = function(id, event) {
    event.stopPropagation();
    let history = getHistory();
    history = history.filter(item => item.id !== id);
    localStorage.setItem('globeLingoHistory', JSON.stringify(history));
    renderHistory(historySearch.value);
};

clearHistoryBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all history?")) {
        localStorage.removeItem('globeLingoHistory');
        renderHistory();
    }
});

historySearch.addEventListener('input', (e) => renderHistory(e.target.value));

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => { toast.classList.add('hidden'); }, 4000);
}