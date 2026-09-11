import storage from '../storage';

const HISTORY_STORAGE = 'ai_conversation_history';

function getAll() {
  return storage.get(HISTORY_STORAGE, []);
}

export function saveConversation(conv) {
  const all = getAll();
  const idx = all.findIndex((c) => c.id === conv.id);
  if (idx >= 0) {
    all[idx] = conv;
  } else {
    all.unshift(conv);
  }
  const trimmed = all.slice(0, 30);
  storage.set(HISTORY_STORAGE, trimmed);
  return conv.id;
}

export function getConversation(id) {
  return getAll().find((c) => c.id === id) || null;
}

export function listConversations() {
  return getAll();
}

export function deleteConversation(id) {
  const all = getAll().filter((c) => c.id !== id);
  storage.set(HISTORY_STORAGE, all);
}

export function clearConversations() {
  storage.set(HISTORY_STORAGE, []);
}

export function createConversationId() {
  return `conv_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}