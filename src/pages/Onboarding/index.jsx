import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Languages,
  Target,
  Clock,
  Sparkles,
  Check,
  ArrowRight,
} from 'lucide-react';

const TOTAL_STEPS = 5;

const STORAGE_KEY = 'italiano_onboarding';

const LANGUAGES = [
  'English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese',
  'Japanese', 'Korean', 'Arabic', 'Hindi', 'Dutch', 'Polish',
  'Russian', 'Turkish', 'Romanian', 'Ukrainian',
];

const LEVELS = [
  { id: 'beginner', label: 'Complete Beginner', desc: "Never learned Italian before. We'll start from the very basics." },
  { id: 'a1', label: 'A1 — Beginner', desc: 'You know a few words or basic greetings.' },
  { id: 'a2', label: 'A2 — Elementary', desc: 'You can handle simple, everyday conversations.' },
  { id: 'b1', label: 'B1 — Intermediate', desc: 'You can discuss familiar topics with some fluency.' },
  { id: 'b2', label: 'B2 — Upper Intermediate', desc: 'You can interact with a good degree of fluency and spontaneity.' },
  { id: 'c1', label: 'C1 — Advanced', desc: 'You use Italian flexibly and effectively for social and professional purposes.' },
];

const GOALS = [
  { id: 'travel', label: 'Travel', icon: '✈️' },
  { id: 'conversation', label: 'Conversation', icon: '💬' },
  { id: 'work', label: 'Work', icon: '💼' },
  { id: 'school', label: 'School', icon: '🎓' },
  { id: 'living', label: 'Living in Italy', icon: '🏠' },
  { id: 'citizenship', label: 'Citizenship', icon: '📜' },
  { id: 'personal', label: 'Personal Interest', icon: '🌟' },
  { id: 'culture', label: 'Italian Culture', icon: '🎭' },
];

const DAILY_GOALS = [
  { id: 5, label: '5 min', sub: 'Casual' },
  { id: 10, label: '10 min', sub: 'Regular' },
  { id: 15, label: '15 min', sub: 'Committed' },
  { id: 20, label: '20 min', sub: 'Serious' },
  { id: 30, label: '30 min', sub: 'Intensive' },
];

function loadOnboarding() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveOnboarding(data) {
  const existing = loadOnboarding();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...existing, ...data }));
}

const slide = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

/* ────── Step 1: Welcome ────── */
function WelcomeStep() {
  return (
    <div className="text-center max-w-lg mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-20 h-20 rounded-3xl bg-gradient-to-br from-italian-green to-italian-sage flex items-center justify-center mx-auto mb-8 shadow-xl shadow-italian-green/20"
      >
        <Languages size={36} className="text-white" />
      </motion.div>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-italian-charcoal dark:text-white mb-4">
        Learn Italian.{' '}
        <span className="bg-gradient-to-r from-italian-green to-italian-sage bg-clip-text text-transparent">
          Speak with confidence.
        </span>
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
        Let's personalize your learning experience. This only takes a minute.
      </p>
      <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
        <span className="flex items-center gap-1.5"><Globe size={15} className="text-italian-green" /> Personalized</span>
        <span className="flex items-center gap-1.5"><Target size={15} className="text-italian-green" /> Goal-focused</span>
        <span className="flex items-center gap-1.5"><Clock size={15} className="text-italian-green" /> Flexible</span>
      </div>
    </div>
  );
}

/* ────── Step 2: Native Language ────── */
function NativeLanguageStep({ value, onChange }) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () => LANGUAGES.filter((l) => l.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <Globe size={32} className="text-italian-green mx-auto mb-4" />
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-italian-charcoal dark:text-white mb-2">
          What is your native language?
        </h2>
        <p className="text-gray-500 dark:text-gray-400">This helps us tailor lessons for you.</p>
      </div>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 rounded-2xl border border-gray-200 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card text-italian-charcoal dark:text-white text-left transition-all hover:border-italian-green/40 focus:outline-none focus:ring-2 focus:ring-italian-green/30"
        >
          <span className={value ? '' : 'text-gray-400'}>{value || 'Select a language'}</span>
          <ChevronRight size={18} className={`text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-italian-dark-card border border-gray-200 dark:border-italian-dark-border rounded-2xl shadow-xl z-20 overflow-hidden"
            >
              <div className="p-3 border-b border-gray-100 dark:border-italian-dark-border">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search languages..."
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-italian-dark text-sm text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="max-h-64 overflow-y-auto p-1.5">
                {filtered.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { onChange(lang); setOpen(false); setSearch(''); }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                      value === lang
                        ? 'bg-italian-green/10 text-italian-green font-medium'
                        : 'text-italian-charcoal dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-italian-dark-surface'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="text-center text-sm text-gray-400 py-4">No languages found</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ────── Step 3: Italian Level ────── */
function LevelStep({ value, onChange }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Languages size={32} className="text-italian-red mx-auto mb-4" />
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-italian-charcoal dark:text-white mb-2">
          What's your Italian level?
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Be honest — we'll adapt to your level.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {LEVELS.map((level) => (
          <motion.button
            key={level.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(level.id)}
            className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
              value === level.id
                ? 'border-italian-green bg-italian-green/5 shadow-md shadow-italian-green/10'
                : 'border-gray-200 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card hover:border-italian-green/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                value === level.id
                  ? 'border-italian-green bg-italian-green'
                  : 'border-gray-300 dark:border-gray-600'
              }`}>
                {value === level.id && <Check size={12} className="text-white" />}
              </div>
              <span className={`font-heading font-semibold text-sm ${
                value === level.id ? 'text-italian-green' : 'text-italian-charcoal dark:text-white'
              }`}>
                {level.label}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-2 ml-8 leading-relaxed">{level.desc}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ────── Step 4: Learning Goals ────── */
function GoalsStep({ value, onChange }) {
  const toggle = (id) => {
    onChange(value.includes(id) ? value.filter((g) => g !== id) : [...value, id]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Target size={32} className="text-italian-gold mx-auto mb-4" />
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-italian-charcoal dark:text-white mb-2">
          What do you want to learn Italian for?
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Select one or more goals.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {GOALS.map((goal) => {
          const selected = value.includes(goal.id);
          return (
            <motion.button
              key={goal.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggle(goal.id)}
              className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all duration-200 ${
                selected
                  ? 'border-italian-gold bg-italian-gold/5 shadow-md shadow-italian-gold/10'
                  : 'border-gray-200 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card hover:border-italian-gold/30'
              }`}
            >
              <span className="text-3xl">{goal.icon}</span>
              <span className={`text-xs font-medium ${
                selected ? 'text-italian-gold' : 'text-italian-charcoal dark:text-gray-300'
              }`}>
                {goal.label}
              </span>
              {selected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-italian-gold flex items-center justify-center"
                >
                  <Check size={12} className="text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ────── Step 5: Daily Goal ────── */
function DailyGoalStep({ value, onChange }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Clock size={32} className="text-italian-sage mx-auto mb-4" />
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-italian-charcoal dark:text-white mb-2">
          How much time per day?
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Even a few minutes a day makes a difference.</p>
      </div>

      <div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
        {DAILY_GOALS.map((g) => (
          <motion.button
            key={g.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(g.id)}
            className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-200 ${
              value === g.id
                ? 'border-italian-sage bg-italian-sage/10 shadow-md shadow-italian-sage/10'
                : 'border-gray-200 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card hover:border-italian-sage/30'
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
              value === g.id
                ? 'border-italian-sage bg-italian-sage'
                : 'border-gray-300 dark:border-gray-600'
            }`}>
              {value === g.id && <Check size={12} className="text-white" />}
            </div>
            <div className="text-left">
              <span className={`font-heading font-semibold ${
                value === g.id ? 'text-italian-sage' : 'text-italian-charcoal dark:text-white'
              }`}>
                {g.label} / day
              </span>
            </div>
            <span className={`ml-auto text-xs font-medium px-3 py-1 rounded-full ${
              value === g.id
                ? 'bg-italian-sage/10 text-italian-sage'
                : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-400'
            }`}>
              {g.sub}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ────── Step Indicators ────── */
function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              i < current
                ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                : i === current
                ? 'bg-italian-green text-white ring-4 ring-italian-green/20 shadow-md shadow-italian-green/20'
                : 'bg-gray-200 dark:bg-italian-dark-card text-gray-400 dark:text-gray-600'
            }`}
          >
            {i < current ? <Check size={14} /> : i + 1}
          </div>
          {i < total - 1 && (
            <div className={`w-8 h-0.5 rounded-full transition-colors duration-300 ${
              i < current ? 'bg-italian-green' : 'bg-gray-200 dark:bg-italian-dark-border'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ────── Onboarding ────── */
export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState(() => {
    const saved = loadOnboarding();
    return {
      nativeLanguage: saved.nativeLanguage || '',
      level: saved.level || '',
      goals: saved.goals || [],
      dailyGoal: saved.dailyGoal || 10,
    };
  });

  const goNext = () => {
    if (step === 0) {
      setDirection(1);
      setStep(1);
      return;
    }
    saveOnboarding(data);
    if (step < TOTAL_STEPS - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      saveOnboarding(data);
      navigate('/dashboard');
    }
  };

  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const skip = () => {
    saveOnboarding(data);
    if (step < TOTAL_STEPS - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    saveOnboarding(data);
  }, [data]);

  const canProceed = step === 0 || step === 1 ? true :
    step === 2 ? !!data.level :
    step === 3 ? data.goals.length > 0 :
    step === 4 ? !!data.dailyGoal : true;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-italian-cream via-white to-italian-cream dark:from-[#111318] dark:via-[#111318] dark:to-[#111318]">
      {/* Header */}
      <div className="pt-8 pb-4 px-6">
        <StepIndicator current={step} total={TOTAL_STEPS} />
      </div>

      {/* Steps */}
      <div className="flex-1 flex items-center justify-center px-6 py-8 overflow-hidden">
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && <WelcomeStep />}
              {step === 1 && (
                <NativeLanguageStep
                  value={data.nativeLanguage}
                  onChange={(v) => setData((p) => ({ ...p, nativeLanguage: v }))}
                />
              )}
              {step === 2 && (
                <LevelStep
                  value={data.level}
                  onChange={(v) => setData((p) => ({ ...p, level: v }))}
                />
              )}
              {step === 3 && (
                <GoalsStep
                  value={data.goals}
                  onChange={(v) => setData((p) => ({ ...p, goals: v }))}
                />
              )}
              {step === 4 && (
                <DailyGoalStep
                  value={data.dailyGoal}
                  onChange={(v) => setData((p) => ({ ...p, dailyGoal: v }))}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="w-32">
            {step > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={goBack}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-italian-charcoal dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-italian-dark-card transition-all"
              >
                <ChevronLeft size={16} />
                Back
              </motion.button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {step > 0 && step < TOTAL_STEPS && (
              <button
                onClick={skip}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-italian-charcoal dark:hover:text-white transition-colors"
              >
                Skip
              </button>
            )}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-green text-white font-semibold shadow-lg shadow-italian-green/20 hover:shadow-xl hover:bg-italian-green/90 transition-all duration-300"
            >
              {step === TOTAL_STEPS - 1 ? (
                <>
                  Start Learning
                  <Sparkles size={16} />
                </>
              ) : (
                <>
                  {step === 0 ? 'Get Started' : 'Next'}
                  <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
