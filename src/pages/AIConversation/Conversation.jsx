import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Send,
  Mic,
  Trash2,
  Plus,
  Volume2,
  Bot,
  User,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  BookOpenCheck,
  Wand2,
} from 'lucide-react';
import storage from '../../services/storage';
import { sendChatMessage } from '../../services/ai/providers';
import { getKey } from '../../services/ai/keys';
import { buildSystemPrompt } from '../../services/ai/systemPrompt';
import { saveConversation } from '../../services/ai/history';
import { recognizeSpeech, speak } from '../../services/speech';
import progress from '../../services/progress';

const ERROR_MESSAGES = {
  missing: 'Your API key is missing or was removed. Please configure an AI provider to continue.',
  invalid: 'Your API key could not be verified. Please check the key and try again.',
  rate: 'Rate limit or quota exceeded. Please wait a moment and try again.',
  network: 'Could not reach the AI provider. Check your internet connection and try again.',
  unavailable: 'The provider is temporarily unavailable. Please try again in a moment.',
  model: 'The selected model is not available. Please go back and choose another model.',
  empty: 'The AI returned an empty response. Try asking again.',
};

function classifyError(message) {
  const m = (message || '').toLowerCase();
  if (/check the key|api key could not be verified|access was denied/i.test(m) && !/model/i.test(m)) return 'invalid';
  if (/rate limit|quota/i.test(m)) return 'rate';
  if (/fetch failed|network|failed to fetch|load failed/i.test(m)) return 'network';
  if (/not available|unknown.*model|model.*not/i.test(m) || /empty response/i.test(m)) return 'model';
  if (m === 'AI returned an empty response.' || m === 'The AI returned an empty response.') return 'empty';
  if (/temporarily unavailable|something went wrong/i.test(m)) return 'unavailable';
  return 'unavailable';
}

function feedbackFor(settings, messages) {
  const userMsgs = messages.filter((m) => m.role === 'user').length;
  const exchanges = Math.floor(userMsgs);

  const practiced = [
    settings.topic === 'custom' && settings.customTopic
      ? `Talking about ${settings.customTopic}`
      : null,
    exchanges >= 4 ? 'Keeping a conversation going' : 'Short exchanges',
    settings.mode === 'correction' || settings.mode === 'tutor' ? 'Receiving friendly corrections' : null,
  ].filter(Boolean);

  const phrases = {
    free: ['Come stai?', 'Dove vivi?', 'Che lavoro fai?'],
    daily: ['Che cosa fai oggi?', 'Come va la giornata?', 'Cosa hai fatto ieri?'],
    travel: ['Dove sei stato in vacanza?', 'Quanto costa il biglietto?', 'Dov\'è la stazione?'],
    food: ['Cosa mi consigli?', 'È molto buono!', 'Il conto, per favore.'],
    work: ['Che lavoro fa?', 'Dove lavora?', 'Che orari fai?'],
    hobbies: ['Cosa ti piace fare?', 'Ci vado spesso.', 'Ti piace il cinema?'],
    friends: ['Da quanto tempo vi conoscete?', 'Sei libero questo weekend?'],
    shopping: ['Quanto costa?', 'Posso provarlo?', 'Avete la mia taglia?'],
    movies: ['Che film preferisci?', 'L\'ho visto recentemente.', 'Chi è il tuo attore preferito?'],
    current: ['Cosa pensi delle notizie?', 'Non ne ho sentito parlare.', 'Pensi che sia una buona idea?'],
    custom: ['Come si dice…?', 'Potresti ripetere?', 'Cosa ne pensi?'],
  }[settings.topic] || ['Come si dice…?', 'Potresti ripetere?', 'Cosa ne pensi?'];

  const suggestions = [
    'Say a few more sentences at a time — the more you produce, the faster you improve.',
    'Ask a follow-up question after each answer to keep the conversation flowing.',
    'Try to reply without translating from English in your head.',
  ];

  return { practiced, phrases, suggestions, exchanges };
}

export default function AIChat() {
  const { conversationId } = useParams();
  const navigate = useNavigate();
  const [config, setConfig] = useState(() => storage.get('ai_active_conversation', null));

  const [messages, setMessages] = useState(() => config?.messages || []);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [recording, setRecording] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const recognitionRef = useRef(null);
  const listeningRef = useRef(false);
  const scrollRef = useRef(null);

  const systemPrompt = config ? buildSystemPrompt(config) : '';

  useEffect(() => {
    const conv = storage.get('ai_active_conversation', null);
    if (conv) {
      setConfig(conv);
      setMessages(conv.messages || []);
    }
  }, [conversationId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, sending]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      }
    };
  }, []);

  const persist = (conv) => {
    const stored = { ...conv };
    saveConversation(stored);
    storage.set('ai_active_conversation', stored);
  };

  const sendInitialGreeting = async () => {
    if (!config) return;
    if (config.messages?.length > 0) return;
    setSending(true);
    try {
      const reply = await sendChatMessage({
        providerId: config.provider,
        model: config.model,
        apiKey: getKey(config.provider),
        systemPrompt,
        messages: [],
        temperature: 0.8,
      });
      const updated = { ...config, messages: [{ role: 'assistant', content: reply, id: Date.now() }] };
      setConfig(updated);
      setMessages([{ role: 'assistant', content: reply, id: Date.now() }]);
      persist(updated);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || sending) return;
    if (!config) return;

    const userMsg = {
      role: 'user',
      content: input.trim(),
      id: Date.now(),
    };
    const newMessages = [...messages, userMsg];
    setInput('');
    setSending(true);
    setError(null);
    setMessages(newMessages);

    try {
      const reply = await sendChatMessage({
        providerId: config.provider,
        model: config.model,
        apiKey: getKey(config.provider),
        systemPrompt,
        messages: newMessages.filter((m) => m.content),
        temperature: 0.8,
      });

      const aiMsg = { role: 'assistant', content: reply, id: Date.now() + 1 };
      const final = [...newMessages, aiMsg];
      setMessages(final);
      const updated = { ...config, messages: final };
      setConfig(updated);
      persist(updated);
      progress.addXP(2);
      progress.recordActivity(1);
    } catch (err) {
      setError(err.message);
      setMessages(newMessages);
    } finally {
      setSending(false);
    }
  };

  const startListening = () => {
    if (listeningRef.current) return;
    setRecording(true);
    const handle = recognizeSpeech(
      (results) => {
        listeningRef.current = false;
        recognitionRef.current = null;
        setRecording(false);
        if (results[0]?.transcript) {
          const base = input ? input + ' ' : '';
          setInput(base + results[0].transcript);
        }
      },
      () => {
        listeningRef.current = false;
        recognitionRef.current = null;
        setRecording(false);
      }
    );
    if (!handle) {
      setRecording(false);
      return;
    }
    recognitionRef.current = handle;
    listeningRef.current = true;
    setTimeout(() => {
      if (listeningRef.current && recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
        listeningRef.current = false;
        setRecording(false);
      }
    }, 9000);
  };

  const stopListening = () => {
    listeningRef.current = false;
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setRecording(false);
  };

  const clearConversation = () => {
    if (!config) return;
    const updated = { ...config, messages: [] };
    setConfig(updated);
    setMessages([]);
    setError(null);
    persist(updated);
    setTimeout(() => sendInitialGreeting(), 400);
  };

  const newConversation = () => {
    storage.remove('ai_active_conversation');
    navigate('/ai');
  };

  const endConversation = () => setShowFeedback(true);

  const friendlyError = error ? ERROR_MESSAGES[classifyError(error)] || 'Something went wrong with the connection. Please try again later.' : null;

  if (!config) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-gray-500 dark:text-gray-400 mb-4">No active AI conversation found.</p>
          <Link to="/ai" className="text-italian-purple font-semibold hover:underline">
            Start a new conversation
          </Link>
        </div>
      </div>
    );
  }

  const fb = feedbackFor(config, messages);
  const topicLabel = config.topic === 'custom' && config.customTopic
    ? config.customTopic
    : 'Free conversation';

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link
            to="/ai"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-italian-purple transition-colors"
          >
            <ArrowLeft size={16} />
            <div className="w-8 h-8 hidden md:flex items-center justify-center rounded-lg bg-italian-purple/10 text-italian-purple">
              <Bot size={16} />
            </div>
            <span className="font-heading font-semibold text-italian-charcoal dark:text-white">
              AI Conversation
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-italian-purple/10 text-italian-purple text-xs font-medium">
              {config.provider} · {config.level}
            </span>
            <button
              onClick={endConversation}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-italian-sage/10 text-italian-sage text-xs font-semibold hover:bg-italian-sage/20 transition-colors"
            >
              <BookOpenCheck size={14} />
              Summary
            </button>
          </div>
        </div>

        {/* Chat area */}
        <div
          ref={scrollRef}
          className="h-[60vh] rounded-2xl border border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24] overflow-y-auto p-4 space-y-4"
        >
          {messages.length === 0 && !sending && (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-italian-purple/10 flex items-center justify-center mx-auto mb-3">
                <Bot size={26} className="text-italian-purple" />
              </div>
              <p className="text-italian-charcoal dark:text-white font-semibold font-heading">
                {config.mode === 'scenario' ? 'Scenario ready!' : `Let's talk about ${topicLabel}`}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {config.mode === 'scenario' && config.scenarioText
                  ? config.scenarioText
                  : 'Say something to start the conversation. The AI will respond in ' + config.language + '.'}
              </p>
              <button
                onClick={sendInitialGreeting}
                className="mt-4 px-5 py-2.5 rounded-xl bg-italian-purple text-white text-sm font-semibold hover:bg-italian-purple/90 transition-colors"
              >
                Begin conversation
              </button>
            </div>
          )}

          {messages.map((m, i) => (
            <motion.div
              key={m.id || i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-italian-purple/15 flex items-center justify-center text-italian-purple shrink-0">
                  <Bot size={15} />
                </div>
              )}
              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-italian-green/15 flex items-center justify-center text-italian-green shrink-0">
                  <User size={15} />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 border ${
                  m.role === 'user'
                    ? 'rounded-tr-md bg-italian-green/10 border-italian-green/20'
                    : 'rounded-tl-md bg-white dark:bg-[#22252E] border-gray-100 dark:border-[#2E323C]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-semibold ${m.role === 'user' ? 'text-italian-green' : 'text-italian-purple'}`}>
                    {m.role === 'user' ? 'You' : 'AI'}
                  </span>
                  {m.role === 'assistant' && (
                    <button
                      onClick={() => speak(m.content, 'it-IT')}
                      className="text-gray-400 hover:text-italian-purple transition-colors"
                      title="Listen"
                    >
                      <Volume2 size={13} />
                    </button>
                  )}
                </div>
                <p className={`whitespace-pre-wrap text-sm leading-relaxed ${m.role === 'user' ? 'text-italian-charcoal dark:text-gray-200' : 'text-italian-charcoal dark:text-gray-200'}`}>
                  {m.content}
                </p>
              </div>
            </motion.div>
          ))}

          {sending && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-italian-purple/15 flex items-center justify-center text-italian-purple shrink-0">
                <Bot size={15} />
              </div>
              <div className="rounded-2xl rounded-tl-md bg-white dark:bg-[#22252E] border border-gray-100 dark:border-[#2E323C] px-4 py-3">
                <Loader2 size={18} className="animate-spin text-italian-purple" />
              </div>
            </div>
          )}

          {friendlyError && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-italian-red/10 border border-italian-red/20 text-italian-red text-sm">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{friendlyError}</p>
                {error && /model/i.test(classifyError(error) ? '' : error) && (
                  <Link to="/ai" className="underline hover:text-italian-red/80 text-xs">Change provider settings</Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="mt-4">
          {error && friendlyError && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 dark:text-gray-500">Try again when connected.</span>
              <button onClick={() => setError(null)} className="text-xs font-semibold text-italian-red hover:underline">
                Dismiss
              </button>
            </div>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={recording ? stopListening : startListening}
              title="Speak your message"
              className={`w-11 h-11 shrink-0 rounded-xl border flex items-center justify-center transition-colors ${
                recording
                  ? 'bg-italian-red border-italian-red/40 text-white'
                  : 'bg-white dark:bg-[#22252E] border-gray-200 dark:border-[#2E323C] text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#2A2E38]'
              }`}
            >
              <Mic size={18} />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder={recording ? 'Listening…' : `Type your message in ${config.language}…`}
              className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-purple/40"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleSend}
              disabled={!input.trim() || sending}
              className="w-11 h-11 shrink-0 rounded-xl bg-italian-purple text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </motion.button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={clearConversation}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <Trash2 size={13} />
              Clear conversation
            </button>
            <button
              onClick={newConversation}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-italian-purple transition-colors"
            >
              <Plus size={13} />
              New conversation
            </button>
          </div>
        </div>
      </div>

      {/* Feedback modal */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowFeedback(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-3xl border border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24] shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-italian-purple/10 flex items-center justify-center">
                  <Sparkles size={22} className="text-italian-purple" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-italian-charcoal dark:text-white">
                    Conversation Summary
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {fb.exchanges} exchanges · {config.level}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-italian-green uppercase tracking-wide mb-1.5">
                    <CheckCircle2 size={13} /> You practiced
                  </p>
                  <ul className="space-y-1">
                    {fb.practiced.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-italian-green" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-italian-purple uppercase tracking-wide mb-1.5">
                    <Wand2 size={13} /> Useful expressions
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {fb.phrases.map((p) => (
                      <span key={p} className="px-2 py-1 rounded-lg bg-italian-purple/10 text-italian-purple text-xs font-medium italic">
                        “{p}”
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-italian-sage uppercase tracking-wide mb-1.5">
                    <Sparkles size={13} /> Suggestions
                  </p>
                  <ul className="space-y-1">
                    {fb.suggestions.map((s) => (
                      <li key={s} className="text-sm text-gray-500 dark:text-gray-400">
                        • {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <button
                  onClick={() => setShowFeedback(false)}
                  className="w-full px-5 py-3 rounded-xl bg-italian-purple text-white font-semibold hover:bg-italian-purple/90 transition-colors"
                >
                  Continue conversation
                </button>
                <button
                  onClick={newConversation}
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-[#22252E] border border-gray-100 dark:border-[#2E323C] text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#2A2E38] transition-colors"
                >
                  Start a new conversation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}