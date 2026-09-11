let recognition = null;

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:'"—"«»]/g, '')
    .replace(/\s+/g, ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[a.length][b.length];
}

function sequenceSimilarity(a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  const distance = levenshteinDistance(a, b);
  return 1 - distance / maxLen;
}

function wordOverlap(a, b) {
  const aWords = new Set(a.split(' ').filter(Boolean));
  const bWords = new Set(b.split(' ').filter(Boolean));
  if (aWords.size === 0 && bWords.size === 0) return 1;
  const union = new Set([...aWords, ...bWords]);
  const intersection = new Set(
    [...aWords].filter((word) => bWords.has(word))
  );
  return intersection.size / union.size;
}

function calculateSimilarity(spoken, expected) {
  const seqScore = sequenceSimilarity(spoken, expected);
  const overlapScore = wordOverlap(spoken, expected);
  return seqScore * 0.7 + overlapScore * 0.3;
}

export function matchSpeech(transcript, acceptedResponses) {
  const spoken = normalize(transcript);

  let bestMatch = { score: 0, response: null };

  for (const response of acceptedResponses) {
    const expected = normalize(response.text);
    const rawScore = calculateSimilarity(spoken, expected);
    const weightedScore = rawScore * (response.weight || 1);

    if (weightedScore > bestMatch.score) {
      bestMatch = { score: weightedScore, response };
    }
  }

  return bestMatch;
}

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
