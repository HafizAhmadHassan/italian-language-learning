let recognition = null;

export function isSupported() {
  return (
    typeof window !== 'undefined' &&
    ('speechSynthesis' in window || 'webkitSpeechSynthesis' in window)
  );
}

export function speak(text, lang = 'it-IT') {
  if (!isSupported()) {
    console.warn('Speech synthesis not supported in this browser');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const italianVoice = voices.find(
    (v) => v.lang.startsWith('it') || v.lang === 'it-IT'
  );

  if (italianVoice) {
    utterance.voice = italianVoice;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function recognizeSpeech(onResult, onError) {
  const SpeechRecognition =
    typeof window !== 'undefined'
      ? window.SpeechRecognition || window.webkitSpeechRecognition
      : null;

  if (!SpeechRecognition) {
    if (onError) {
      onError(new Error('Speech recognition is not supported in this browser'));
    }
    return null;
  }

  if (recognition) {
    recognition.abort();
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'it-IT';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  recognition.onresult = (event) => {
    const results = [];
    for (let i = 0; i < event.results[0].length; i++) {
      results.push({
        transcript: event.results[0][i].transcript,
        confidence: event.results[0][i].confidence,
      });
    }
    if (onResult) {
      onResult(results);
    }
  };

  recognition.onerror = (event) => {
    if (onError) {
      onError(new Error(`Speech recognition error: ${event.error}`));
    }
  };

  recognition.onend = () => {
    recognition = null;
  };

  recognition.start();

  return {
    stop: () => {
      if (recognition) {
        recognition.abort();
        recognition = null;
      }
    },
  };
}
