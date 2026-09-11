import storage from '../storage';
import { testConnection } from './providers';

const KEYS_STORAGE = 'ai_provider_keys';

function encode(value) {
  try {
    return btoa(unescape(encodeURIComponent(value)));
  } catch {
    return value;
  }
}

function decode(value) {
  try {
    return decodeURIComponent(escape(atob(value)));
  } catch {
    return value;
  }
}

export function isKeySupported() {
  return typeof localStorage !== 'undefined';
}

export function getStoredKeys() {
  const raw = storage.get(KEYS_STORAGE, {});
  const result = {};
  for (const [providerId, entry] of Object.entries(raw)) {
    if (entry?.key) {
      result[providerId] = { ...entry, key: decode(entry.key) };
    }
  }
  return result;
}

export function hasKey(providerId) {
  return Boolean(getStoredKeys()[providerId]?.key);
}

export function getKey(providerId) {
  return getStoredKeys()[providerId]?.key || '';
}

export function getModel(providerId) {
  return getStoredKeys()[providerId]?.model || '';
}

export function saveKey(providerId, { key, model }) {
  const current = getStoredKeys();
  current[providerId] = {
    key: encode(key.trim()),
    model,
    savedAt: new Date().toISOString(),
  };
  return storage.set(KEYS_STORAGE, current);
}

export function removeKey(providerId) {
  const current = getStoredKeys();
  delete current[providerId];
  return storage.set(KEYS_STORAGE, current);
}

export async function verifyKey(providerId, model, apiKey) {
  return testConnection({ providerId, model, apiKey });
}

export function maskKey(key) {
  if (!key) return '';
  if (key.length <= 8) return '•••••••';
  return `${key.slice(0, 4)}••••••••${key.slice(-4)}`;
}