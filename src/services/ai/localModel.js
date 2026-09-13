const pipelineCache = new Map();

function friendlyProgress(onProgress) {
  return (e) => {
    if (typeof onProgress !== 'function') return;
    if (e?.status === 'progress' && e?.file && typeof e?.progress === 'number') {
      const pct = Math.round(e.progress * 100);
      onProgress(`Downloading ${e.file}… ${pct}%`);
    } else if (e?.status === 'initiate' || e?.status === 'download') {
      onProgress('Downloading model… (first time only)');
    } else if (e?.status === 'ready' || e?.status === 'done') {
      onProgress('Model ready');
    }
  };
}

async function createGenerator(modelId, device, onProgress) {
  const { env, pipeline } = await import('@huggingface/transformers');
  env.allowLocalModels = false;
  const options = { device, progress_callback: friendlyProgress(onProgress) };
  if (device === 'wasm') options.dtype = 'q4';
  return pipeline('text-generation', modelId, options);
}

export function loadLocalModel(modelId, onProgress) {
  if (pipelineCache.has(modelId)) return pipelineCache.get(modelId);

  const preferredDevice =
    typeof navigator !== 'undefined' && navigator.gpu ? 'webgpu' : 'wasm';

  const promise = (async () => {
    try {
      return await createGenerator(modelId, preferredDevice, onProgress);
    } catch (err) {
      if (preferredDevice === 'webgpu') {
        pipelineCache.delete(modelId);
        return createGenerator(modelId, 'wasm', onProgress);
      }
      throw err;
    }
  })().catch((err) => {
    pipelineCache.delete(modelId);
    throw err;
  });

  pipelineCache.set(modelId, promise);
  return promise;
}

export async function sendLocalMessage({ systemPrompt, messages, model, temperature = 0.8, onProgress }) {
  const generator = await loadLocalModel(model, onProgress);

  const hasUserTurn = (messages || []).some((m) => m.role === 'user' && m.content);
  const chat = [
    { role: 'system', content: systemPrompt || 'You are a helpful assistant.' },
    ...(messages || [])
      .filter((m) => m.content)
      .slice(-16)
      .map((m) => ({ role: m.role, content: m.content })),
  ];
  if (!hasUserTurn) {
    chat.push({ role: 'user', content: 'Ciao' });
  }

  const output = await generator(chat, {
    max_new_tokens: 280,
    do_sample: true,
    temperature,
    repetition_penalty: 1.1,
  });

  const result = Array.isArray(output) ? output[0]?.generated_text : output?.generated_text;
  const reply = Array.isArray(result) ? result.at(-1)?.content : result;
  if (!reply || !reply.trim()) {
    throw new Error('The AI returned an empty response.');
  }
  return reply.trim();
}