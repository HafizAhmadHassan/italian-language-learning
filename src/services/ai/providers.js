const PROVIDER_CONFIG = {
  openai: {
    id: 'openai',
    name: 'OpenAI',
    baseUrl: 'https://api.openai.com/v1',
    endpoint: '/chat/completions',
    models: [
      { id: 'gpt-4o-mini', name: 'GPT-4o mini' },
      { id: 'gpt-4o', name: 'GPT-4o' },
      { id: 'gpt-4.1-mini', name: 'GPT-4.1 mini' },
      { id: 'gpt-4.1', name: 'GPT-4.1' },
    ],
  },
  gemini: {
    id: 'gemini',
    name: 'Google Gemini',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    endpoint: '/models',
    models: [
      { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash' },
      { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' },
      { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
      { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash' },
    ],
  },
  groq: {
    id: 'groq',
    name: 'Groq',
    baseUrl: 'https://api.groq.com/openai/v1',
    endpoint: '/chat/completions',
    models: [
      { id: 'openai/gpt-oss-20b', name: 'GPT-OSS 20B' },
      { id: 'openai/gpt-oss-120b', name: 'GPT-OSS 120B' },
      { id: 'qwen/qwen3.8-27b', name: 'Qwen 3.8 27B' },
      { id: 'qwen/qwen3.6-27b', name: 'Qwen 3.6 27B' },
      { id: 'groq/compound-mini', name: 'Groq Compound Mini' },
      { id: 'groq/compound', name: 'Groq Compound' },
    ],
  },
  openrouter: {
    id: 'openrouter',
    name: 'OpenRouter',
    baseUrl: 'https://openrouter.ai/api/v1',
    endpoint: '/chat/completions',
    models: [
      { id: 'google/gemma-4-31b-it:free', name: 'Gemma 4 31B (free)' },
      { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B (free)' },
      { id: 'nvidia/nemotron-3-ultra-550b-a55b:free', name: 'Nemotron 3 Ultra (free)' },
      { id: 'nvidia/nemotron-3.5-lightning:free', name: 'Nemotron 3.5 Lightning (free)' },
      { id: 'liquid/lfm-2.5-2.6b:free', name: 'Liquid LFM 2.6B (free)' },
      { id: 'poolside/laguna-s-2.1:free', name: 'Poolside Laguna S (free)' },
      { id: 'openrouter/auto:free', name: 'Auto pick (free)' },
    ],
  },
  local: {
    id: 'local',
    name: 'Local (Free)',
    needsKey: false,
    baseUrl: '',
    endpoint: '',
    models: [
      { id: 'onnx-community/Qwen2.5-0.5B-Instruct', name: 'Qwen 2.5 0.5B (in browser)' },
      { id: 'onnx-community/Llama-3.2-1B-Instruct', name: 'Llama 3.2 1B (in browser)' },
    ],
  },
};

function buildMessages(messages, systemPrompt) {
  return [
    { role: 'system', content: systemPrompt },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];
}

async function handleResponse(response, providerId) {
  const text = await response.text();

  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    data = null;
  }

  if (!response.ok) {
    const message = extractError(data, providerId, response.status);
    throw new Error(message);
  }

  return parseContent(data, providerId);
}

function parseContent(data, providerId) {
  if (providerId === 'gemini') {
    const candidate = data?.candidates?.[0];
    const text = candidate?.content?.parts
      ?.map((p) => p.text || '')
      .join('')
      .trim();
    if (!text) throw new Error('The AI returned an empty response.');
    return text;
  }

  const content = data?.choices?.[0]?.message?.content;
  if (!content || !content.trim()) {
    throw new Error('The AI returned an empty response.');
  }
  return content.trim();
}

function extractError(data, providerId, status) {
  const raw =
    data?.error?.message ||
    data?.message ||
    data?.detail?.message ||
    '';

  if (providerId === 'gemini') {
    if (status === 400 && /API key not valid/i.test(raw)) {
      return 'Your API key could not be verified. Please check the key and try again.';
    }
    if (status === 403) {
      return 'Access was denied. Your API key may not have permission for this provider.';
    }
    if (status === 429) {
      return 'Rate limit or quota exceeded. Please try again later.';
    }
  }

  if (status === 401) {
    return 'Your API key could not be verified. Please check the key and try again.';
  }
  if (status === 403) {
    return 'Access was denied. Your API key may not have permission to use this model.';
  }
  if (status === 404 || /model/i.test(raw)) {
    return 'The selected model is not available for your account. Please pick another model.';
  }
  if (status === 429) {
    return 'Rate limit or quota exceeded. Please wait a moment and try again.';
  }
  if (status === 400) {
    return 'The request could not be processed. Please adjust your settings and try again.';
  }
  return 'Something went wrong with the connection. Please try again.';
}

function requestOptions(apiKey, body, providerId) {
  const headers = { 'Content-Type': 'application/json' };
  if (providerId === 'gemini') {
    headers['x-goog-api-key'] = apiKey;
  } else {
    headers.Authorization = `Bearer ${apiKey}`;
  }
  return { method: 'POST', headers, body: JSON.stringify(body) };
}

function completionTarget(cfg, model) {
  if (cfg.id === 'gemini') {
    return `${cfg.baseUrl}${cfg.endpoint}/${model}:generateContent`;
  }
  return `${cfg.baseUrl}${cfg.endpoint}`;
}

export async function sendChatMessage({ providerId, model, apiKey, systemPrompt, messages, temperature = 0.8, onProgress }) {
  const cfg = PROVIDER_CONFIG[providerId];
  if (!cfg) throw new Error('Unknown provider.');
  if (!model) throw new Error('No model selected.');

  if (providerId === 'local') {
    const { sendLocalMessage } = await import('./localModel');
    return sendLocalMessage({ systemPrompt, messages, model, temperature, onProgress });
  }

  if (!apiKey) throw new Error('API key missing.');

  const msgs = buildMessages(messages, systemPrompt);
  const body = {
    model,
    messages: msgs,
    temperature,
    max_tokens: 600,
  };

  if (providerId === 'gemini') {
    const systemText = msgs.find((m) => m.role === 'system')?.content;
    const contents = msgs
      .filter((m) => m.role !== 'system')
      .map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));
    const geminiBody = {
      systemInstruction: { parts: [{ text: systemText || '' }] },
      contents,
      generationConfig: {
        temperature,
        maxOutputTokens: 600,
      },
    };
    return process(apiKey, completionTarget(cfg, model), geminiBody, providerId);
  }

  return process(apiKey, completionTarget(cfg, model), body, providerId);
}

async function process(apiKey, url, body, providerId) {
  const response = await fetch(url, requestOptions(apiKey, body, providerId));
  return handleResponse(response, providerId);
}

export async function testConnection({ providerId, model, apiKey }) {
  const cfg = PROVIDER_CONFIG[providerId];
  if (!cfg) return false;

  if (providerId === 'local') {
    const { loadLocalModel } = await import('./localModel');
    try {
      await loadLocalModel(model);
      return true;
    } catch {
      return false;
    }
  }

  if (!apiKey) return false;

  if (providerId === 'gemini') {
    try {
      const res = await fetch(`${cfg.baseUrl}${cfg.endpoint}/${model}:generateContent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'Ciao' }] }],
          generationConfig: { maxOutputTokens: 10 },
        }),
      });
      if (!res.ok) return false;
      const data = await res.json();
      return !!(data?.candidates?.[0]?.content?.parts?.[0]?.text);
    } catch {
      return false;
    }
  }

  try {
    const config = PROVIDER_CONFIG[providerId];
    const url = `${config.baseUrl}${config.endpoint}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: 'Ciao' }],
        max_tokens: 10,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function getAvailableModels(providerId) {
  return PROVIDER_CONFIG[providerId]?.models || [];
}

export function getProviderIds() {
  return Object.keys(PROVIDER_CONFIG);
}

export function getProviderInfo(providerId) {
  return PROVIDER_CONFIG[providerId];
}