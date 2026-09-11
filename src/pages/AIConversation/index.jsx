import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Bot,
  Plug,
  Trash2,
  CheckCircle2,
  XCircle,
  Loader2,
  ShieldCheck,
  History,
  PlayCircle,
  MessageSquarePlus,
  Sparkles,
  Globe,
  GraduationCap,
  MessageSquare,
  Wrench,
  Heart,
  Briefcase,
  Cpu,
} from 'lucide-react';
import storage from '../../services/storage';
import { getProviderIds, getProviderInfo, getAvailableModels } from '../../services/ai/providers';
import {
  hasKey,
  getKey,
  getModel,
  saveKey,
  removeKey,
  verifyKey,
  maskKey,
} from '../../services/ai/keys';
import { listConversations, deleteConversation, createConversationId } from '../../services/ai/history';

const LANGUAGES = ['Italian', 'Spanish', 'French', 'German', 'English'];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const MODES = [
  { id: 'free', label: 'Free Conversation', desc: 'Natural chat partner, no corrections' },
  { id: 'tutor', label: 'Tutor', desc: 'Supportive tutor with gentle guidance' },
  { id: 'correction', label: 'Correction', desc: 'Focus on fixing mistakes' },
  { id: 'scenario', label: 'Practice Scenario', desc: 'Role-play a specific situation' },
];
const CORRECTIONS = [
  { id: 'none', label: 'No corrections' },
  { id: 'gentle', label: 'Gentle corrections' },
  { id: 'correct', label: 'Correct my mistakes' },
  { id: 'detailed', label: 'Detailed corrections' },
];
const PERSONALITIES = [
  { id: 'friendly', label: 'Friendly', icon: Heart },
  { id: 'casual', label: 'Casual', icon: MessageSquare },
  { id: 'patient', label: 'Patient teacher', icon: GraduationCap },
  { id: 'professional', label: 'Professional', icon: Briefcase },
  { id: 'encouraging', label: 'Encouraging', icon: Sparkles },
];
const TOPICS = [
  { id: 'free', label: 'Free conversation' },
  { id: 'daily', label: 'Daily life' },
  { id: 'travel', label: 'Travel' },
  { id: 'food', label: 'Food' },
  { id: 'work', label: 'Work' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'friends', label: 'Friends' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'movies', label: 'Movies' },
  { id: 'current', label: 'Current interests' },
  { id: 'custom', label: 'Choose your own topic' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' },
  }),
};

export default function AIConversation() {
  const navigate = useNavigate();

  const [activeProvider, setActiveProvider] = useState(getProviderIds()[0]);
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState(() => {
    const first = getProviderIds()[0];
    const models = getAvailableModels(first);
    const saved = getModel(first);
    return models.some((m) => m.id === saved) ? saved : models[0]?.id || '';
  });
  const [testing, setTesting] = useState(false);
  const [status, setStatus] = useState(null);

  const [language, setLanguage] = useState('Italian');
  const [level, setLevel] = useState('A2');
  const [mode, setMode] = useState('free');
  const [correction, setCorrection] = useState('gentle');
  const [personality, setPersonality] = useState('friendly');
  const [topic, setTopic] = useState('daily');
  const [customTopic, setCustomTopic] = useState('');
  const [scenarioText, setScenarioText] = useState('');

  const [history] = useState(() => listConversations());

  const providerIds = getProviderIds();

  const handleProviderChange = (id) => {
    setActiveProvider(id);
    const models = getAvailableModels(id);
    const savedModel = getModel(id);
    setModel(models.some((m) => m.id === savedModel) ? savedModel : models[0]?.id || '');
    setApiKey('');
    setStatus(null);
  };

  const handleTest = async () => {
    setTesting(true);
    setStatus(null);
    const keyToTest = apiKey.trim() || getKey(activeProvider);
    const ok = await verifyKey(activeProvider, model, keyToTest);
    setStatus(ok ? 'connected' : 'failed');
    if (ok && apiKey.trim()) {
      saveKey(activeProvider, { key: apiKey.trim(), model });
    }
    setTesting(false);
  };

  const handleRemoveKey = () => {
    removeKey(activeProvider);
    setApiKey('');
    setStatus(null);
  };

  const startConversation = () => {
    const key = getKey(activeProvider);
    if (!key) return;
    saveKey(activeProvider, { key, model });
    const conversationId = createConversationId();
    const config = {
      id: conversationId,
      provider: activeProvider,
      model,
      language,
      level,
      mode,
      correction,
      personality,
      topic,
      customTopic,
      scenarioText,
      createdAt: new Date().toISOString(),
      messages: [],
    };
    storage.set('ai_active_conversation', config);
    navigate(`/ai/conversation/${conversationId}`);
  };

  const continueConversation = (id) => {
    const all = listConversations();
    const conv = all.find((c) => c.id === id);
    if (conv) {
      storage.set('ai_active_conversation', conv);
    }
    navigate(`/ai/conversation/${id}`);
  };

  const provider = getProviderInfo(activeProvider);
  const hasConfigured = hasKey(activeProvider);

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-italian-purple/10 flex items-center justify-center">
              <Bot size={20} className="text-italian-purple" />
            </div>
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">
                Conversation with AI
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Practice speaking naturally with an AI conversation partner
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mb-6 p-4 rounded-2xl bg-italian-blue/5 border border-italian-blue/20 dark:bg-italian-blue/10 flex items-start gap-3">
          <ShieldCheck size={18} className="text-italian-blue shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your API key is stored only on this device and is used solely to
            communicate with the provider you choose. It is never sent to
            analytics or saved in conversation history. API usage is billed by
            your selected provider according to your account and provider pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Provider setup */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="rounded-2xl border border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24] p-6"
          >
            <div className="flex items-center gap-2 mb-1">
              <Plug size={18} className="text-italian-green" />
              <h2 className="font-heading font-semibold text-lg text-italian-charcoal dark:text-white">
                AI Provider
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Connect your own API key to talk with an AI partner.
            </p>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {providerIds.map((id) => (
                <button
                  key={id}
                  onClick={() => handleProviderChange(id)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                    activeProvider === id
                      ? 'bg-italian-green text-white border-italian-green shadow-md shadow-italian-green/20'
                      : 'bg-white dark:bg-[#22252E] text-gray-600 dark:text-gray-300 border-gray-100 dark:border-[#2E323C] hover:bg-gray-50 dark:hover:bg-[#22252E]'
                  }`}
                >
                  {getProviderInfo(id).name.split(' ')[0]}
                </button>
              ))}
            </div>

            {hasConfigured && (
              <div className="mb-4 p-3 rounded-xl bg-italian-green/10 border border-italian-green/20 flex items-center gap-2 text-sm">
                <CheckCircle2 size={16} className="text-italian-green shrink-0" />
                <span className="text-italian-green font-medium">Connected</span>
                <span className="text-gray-500 dark:text-gray-400 ml-auto font-mono text-xs">
                  {maskKey(getKey(activeProvider))}
                </span>
              </div>
            )}

            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
              API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={hasConfigured ? 'Key saved — enter a new one to replace' : `Enter your ${provider.name} API key`}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40 mb-4"
            />

            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
              Model
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-green/40 mb-4"
            >
              {getAvailableModels(activeProvider).map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleTest}
                disabled={testing || (!apiKey.trim() && !hasConfigured)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-italian-green text-white text-sm font-semibold shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {testing ? <Loader2 size={16} className="animate-spin" /> : <Plug size={16} />}
                Test Connection
              </button>
              {hasConfigured && (
                <button
                  onClick={handleRemoveKey}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-italian-red/10 text-italian-red text-sm font-semibold hover:bg-italian-red/20 transition-colors"
                >
                  <Trash2 size={16} />
                  Remove API key
                </button>
              )}
            </div>

            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className={`mt-4 flex items-center gap-2 text-sm font-medium ${
                    status === 'connected' ? 'text-italian-green' : 'text-italian-red'
                  }`}
                >
                  {status === 'connected' ? (
                    <><CheckCircle2 size={16} /> Connected</>
                  ) : (
                    <><XCircle size={16} /> Connection failed. Check your key and try again.</>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Conversation setup */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="rounded-2xl border border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24] p-6"
          >
            <div className="flex items-center gap-2 mb-1">
              <MessageSquarePlus size={18} className="text-italian-purple" />
              <h2 className="font-heading font-semibold text-lg text-italian-charcoal dark:text-white">
                Conversation Setup
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Configure how your AI partner should behave.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                  <Globe size={12} /> Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-green/40"
                >
                  {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                  <GraduationCap size={12} /> Level
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-green/40"
                >
                  {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                <MessageSquare size={12} /> Conversation mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                {MODES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={`px-3 py-2.5 rounded-xl text-left border transition-all ${
                      mode === m.id
                        ? 'bg-italian-purple/10 border-italian-purple/40 text-italian-purple'
                        : 'bg-white dark:bg-[#22252E] border-gray-100 dark:border-[#2E323C] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#22252E]'
                    }`}
                  >
                    <span className="block text-xs font-semibold">{m.label}</span>
                    <span className="block text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {mode === 'correction' && (
              <div className="mb-4">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                  <Wrench size={12} /> Correction level
                </label>
                <div className="flex flex-wrap gap-2">
                  {CORRECTIONS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCorrection(c.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                        correction === c.id
                          ? 'bg-italian-purple/10 border-italian-purple/40 text-italian-purple'
                          : 'bg-white dark:bg-[#22252E] border-gray-100 dark:border-[#2E323C] text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {mode === 'scenario' && (
              <div className="mb-4">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                  <MessageSquare size={12} /> Scenario
                </label>
                <input
                  value={scenarioText}
                  onChange={(e) => setScenarioText(e.target.value)}
                  placeholder="e.g. You are a waiter, I am a customer ordering dinner"
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                <Heart size={12} /> AI personality
              </label>
              <div className="flex flex-wrap gap-2">
                {PERSONALITIES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPersonality(p.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                      personality === p.id
                        ? 'bg-italian-purple/10 border-italian-purple/40 text-italian-purple'
                        : 'bg-white dark:bg-[#22252E] border-gray-100 dark:border-[#2E323C] text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <p.icon size={12} />
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                <Cpu size={12} /> Topic
              </label>
              <div className="grid grid-cols-2 gap-2">
                {TOPICS.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => { setTopic(t.id); setCustomTopic(''); }}
                    className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all ${
                      topic === t.id
                        ? 'bg-italian-purple/10 border-italian-purple/40 text-italian-purple'
                        : 'bg-white dark:bg-[#22252E] border-gray-100 dark:border-[#2E323C] text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {topic === 'custom' && (
              <div className="mb-5">
                <input
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="Type your own topic…"
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40"
                />
              </div>
            )}

            <button
              onClick={startConversation}
              disabled={!hasConfigured}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-italian-purple text-white font-semibold shadow-md shadow-italian-purple/20 hover:bg-italian-purple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PlayCircle size={18} />
              Start Conversation
            </button>
            {!hasConfigured && (
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
                Connect an AI provider to start.
              </p>
            )}
          </motion.div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <History size={18} className="text-italian-green" />
              <h2 className="font-heading font-semibold text-lg text-italian-charcoal dark:text-white">
                Recent conversations
              </h2>
            </div>
            <div className="space-y-2">
              {history.slice(0, 6).map((c) => (
                <div
                  key={c.id}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24]"
                >
                  <div className="w-9 h-9 rounded-xl bg-italian-purple/10 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-italian-purple" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-italian-charcoal dark:text-white truncate">
                      {c.topic === 'custom' && c.customTopic
                        ? c.customTopic
                        : TOPICS.find((t) => t.id === c.topic)?.label || 'Conversation'}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {c.language} · {c.level} · {c.mode} · {new Date(c.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => continueConversation(c.id)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-italian-purple/10 text-italian-purple text-xs font-semibold hover:bg-italian-purple/20 transition-colors shrink-0"
                  >
                    <PlayCircle size={14} />
                    Continue
                  </button>
                  <button
                    onClick={() => deleteConversation(c.id)}
                    className="p-2 rounded-xl text-gray-400 hover:text-italian-red hover:bg-italian-red/10 transition-colors shrink-0"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}