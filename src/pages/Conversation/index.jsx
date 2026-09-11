import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessagesSquare, CheckCircle2, Mic, Sparkles, TrendingUp, Star } from 'lucide-react';
import conversations from '../../data/conversations';
import storage from '../../services/storage';

const TABS = ['All', 'A1', 'A2', 'B1'];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' },
  }),
};

export default function Conversation() {
  const [activeTab, setActiveTab] = useState('All');
  const [results] = useState(() =>
    storage.get('conversationResults', {})
  );

  const filtered =
    activeTab === 'All'
      ? conversations
      : conversations.filter((c) => c.difficulty === activeTab);

  const completedCount = conversations.filter(
    (c) => results[c.id]?.completed
  ).length;

  const totalScore = conversations.reduce((sum, c) => {
    const r = results[c.id];
    return sum + (r?.averageScore || 0);
  }, 0);
  const averageScore =
    completedCount > 0 ? Math.round(totalScore / completedCount) : 0;

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
            <div className="w-10 h-10 rounded-xl bg-italian-green/10 flex items-center justify-center">
              <MessagesSquare size={20} className="text-italian-green" />
            </div>
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">
                Conversation
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Speak Italian in real-life dialogues and get instant feedback
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="grid grid-cols-3 gap-3 md:gap-4 mb-6"
        >
          {[
            { icon: MessagesSquare, label: 'Scenarios', value: String(conversations.length), color: 'text-italian-green' },
            { icon: CheckCircle2, label: 'Completed', value: `${completedCount} / ${conversations.length}`, color: 'text-italian-gold' },
            { icon: TrendingUp, label: 'Avg Score', value: `${averageScore}%`, color: 'text-italian-sage' },
          ].map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24] p-4 md:p-5 transition-colors"
            >
              <div className={`flex items-center gap-2 mb-2 ${color}`}>
                <Icon size={16} />
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {label}
                </span>
              </div>
              <p className="font-heading text-xl md:text-2xl font-bold text-italian-charcoal dark:text-white">
                {value}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="flex gap-2 mb-6"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                  : 'bg-white dark:bg-[#1A1D24] text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-[#2E323C] hover:bg-gray-50 dark:hover:bg-[#22252E]'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {filtered.map((c, i) => {
              const result = results[c.id];
              const complete = result?.completed;
              const score = result?.averageScore || 0;
              return (
                <motion.div
                  key={c.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i}
                >
                  <Link
                    to={`/conversation/${c.id}`}
                    className={`block h-full rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                      complete
                        ? 'border-italian-green/40 bg-white dark:bg-[#1A1D24] shadow-sm'
                        : 'border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24] shadow-sm shadow-gray-200/60 dark:shadow-none'
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-italian-warm dark:bg-[#22252E] flex items-center justify-center text-2xl">
                          {c.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-lg bg-italian-red/10 text-italian-red text-[11px] font-bold">
                            Role-play
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-lg text-[11px] font-bold ${
                              c.difficulty === 'A1'
                                ? 'bg-italian-green/10 text-italian-green'
                                : c.difficulty === 'B1'
                                ? 'bg-italian-purple/10 text-italian-purple'
                                : 'bg-italian-blue/10 text-italian-blue'
                            }`}
                          >
                            {c.difficulty}
                          </span>
                          {complete && (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-italian-gold/10 text-italian-gold text-[11px] font-bold">
                              <CheckCircle2 size={12} />
                              Done
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="font-heading font-semibold text-lg text-italian-charcoal dark:text-white mb-1">
                        {c.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                        {c.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                          {c.category} · {c.turns.length} exchanges
                        </span>
                        {complete ? (
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-italian-sage">
                            <Star size={14} className="fill-italian-gold text-italian-gold" />
                            {score}%
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-italian-green">
                            <Mic size={14} />
                            Speak
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mt-8 p-5 rounded-2xl bg-italian-green/5 border border-italian-green/20 dark:bg-italian-green/10 dark:border-italian-green/20 flex items-start gap-3"
        >
          <Sparkles size={18} className="text-italian-green shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Tip: use headphones and a quiet space for the best speech
            recognition results. You can retry a line as many times as you
            like — the best attempt counts.{' '}
            <span className="font-semibold text-italian-green">Speak naturally!</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}