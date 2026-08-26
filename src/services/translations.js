import translations, { supportedLanguages } from '../data/translations/index.js';

export function getTranslation(word, fromLang, toLang) {
  const normalizedWord = word.toLowerCase().trim();

  if (fromLang === 'it') {
    if (translations[toLang] && translations[toLang][normalizedWord]) {
      return translations[toLang][normalizedWord];
    }
    if (translations['en'] && translations['en'][normalizedWord]) {
      return translations['en'][normalizedWord];
    }
    return null;
  }

  if (toLang === 'it') {
    const langData = translations[fromLang];
    if (langData) {
      const entry = Object.entries(langData).find(
        ([, val]) => val.toLowerCase() === normalizedWord
      );
      if (entry) {
        return entry[0];
      }
    }
    return null;
  }

  const italianWord = getTranslation(word, fromLang, 'it');
  if (italianWord) {
    return getTranslation(italianWord, 'it', toLang);
  }

  return null;
}

export function getTranslationForUser(word, targetLang) {
  const normalizedWord = word.toLowerCase().trim();

  if (targetLang === 'it') {
    return word;
  }

  if (translations[targetLang] && translations[targetLang][normalizedWord]) {
    return translations[targetLang][normalizedWord];
  }

  if (translations['en'] && translations['en'][normalizedWord]) {
    return translations['en'][normalizedWord];
  }

  return word;
}

export function getAvailableLanguages() {
  return supportedLanguages;
}

export default { getTranslation, getTranslationForUser, getAvailableLanguages };
