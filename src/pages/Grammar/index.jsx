import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Circle, BookOpen, Award } from 'lucide-react';
import grammar from '../../data/grammar';
import storage from '../../services/storage';

const TABS = ['All', 'A1', 'A2', 'B1', 'B2', 'C1'];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' },
  }),
};

function GrammarExercise({ exercise, topicId, sectionIdx, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = selected === exercise.answer;

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    if (isCorrect) {
      onComplete(topicId, sectionIdx);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl p-4 border ${
          isCorrect
            ? 'bg-italian-green/10 border-italian-green/30'
            : 'bg-italian-red/10 border-italian-red/30'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          {isCorrect ? (
            <CheckCircle className="w-5 h-5 text-italian-green" />
          ) : (
            <Circle className="w-5 h-5 text-italian-red" />
          )}
          <span className={`font-semibold text-sm ${isCorrect ? 'text-italian-green' : 'text-italian-red'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </span>
        </div>
        {!isCorrect && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The correct answer is:{' '}
            <span className="font-semibold text-italian-green">{exercise.answer}</span>
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border p-4">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{exercise.question}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {exercise.options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selected === opt
                ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                : 'bg-white dark:bg-italian-dark-card text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-italian-dark-border border border-gray-200 dark:border-italian-dark-border'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Check Answer
      </button>
    </div>
  );
}

export default function GrammarPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const [completedExercises, setCompletedExercises] = useState({});

  useEffect(() => {
    const saved = storage.get('grammarCompleted', {});
    setCompletedExercises(saved);
  }, []);

  const saveCompleted = (data) => {
    setCompletedExercises(data);
    storage.set('grammarCompleted', data);
  };

  const handleExerciseComplete = (topicId, sectionIdx) => {
    const key = `${topicId}-${sectionIdx}`;
    const updated = { ...completedExercises, [key]: true };
    saveCompleted(updated);
  };

  const filtered = useMemo(() => {
    if (activeTab === 'All') return grammar;
    return grammar.filter((t) => t.level === activeTab);
  }, [activeTab]);

  const isTopicCompleted = (topic) =>
    topic.sections.every((_, idx) => completedExercises[`${topic.id}-${idx}`]);

  const getTopicProgress = (topic) => {
    const done = topic.sections.filter((_, idx) => completedExercises[`${topic.id}-${idx}`]).length;
    return { done, total: topic.sections.length };
  };

  const getSectionExercises = (section) => {
    if (section.exercises && section.exercises.length > 0) return section.exercises;
    if (section.exercise) return [section.exercise];
    return [];
  };

  const levelColor = (level) => {
    switch (level) {
      case 'A1': return 'bg-italian-green/15 text-italian-green border-italian-green/30';
      case 'A2': return 'bg-italian-gold/15 text-italian-gold border-italian-gold/30';
      case 'B1': return 'bg-italian-red/15 text-italian-red border-italian-red/30';
      case 'B2': return 'bg-italian-sage/15 text-italian-sage border-italian-sage/30';
      case 'C1': return 'bg-italian-purple/15 text-italian-purple border-italian-purple/30';
      default: return 'bg-gray-100 dark:bg-italian-dark-surface text-gray-500 dark:text-gray-400 border-gray-200 dark:border-italian-dark-border';
    }
  };

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-italian-green/10 flex items-center justify-center">
              <BookOpen size={20} className="text-italian-green" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">
              Grammar
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Italian grammar rules and exercises
          </p>
        </motion.div>

        {/* Level Tabs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex gap-2 mb-8 overflow-x-auto pb-1"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shrink-0 ${
                activeTab === tab
                  ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-italian-dark-surface dark:text-gray-400 dark:hover:bg-italian-dark-border'
              }`}
            >
              {tab === 'All' ? 'All Levels' : tab}
            </button>
          ))}
        </motion.div>

        {/* Grammar Topics */}
        <div className="space-y-4">
          <AnimatePresence>
            {filtered.map((topic, i) => {
              const isOpen = expandedId === topic.id;
              const completed = isTopicCompleted(topic);
              const prog = getTopicProgress(topic);

              return (
                <motion.div
                  key={topic.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i + 2}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white dark:bg-italian-dark-card border-italian-green/30 shadow-lg shadow-italian-green/5'
                      : 'bg-white dark:bg-italian-dark-card border-gray-100 dark:border-italian-dark-border hover:border-gray-200 dark:hover:border-italian-dark-border'
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(isOpen ? null : topic.id)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-italian-dark-surface flex items-center justify-center shrink-0">
                      {completed ? (
                        <CheckCircle className="w-5 h-5 text-italian-green" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold text-italian-charcoal dark:text-gray-100">{topic.title}</h3>
                        <span className={`px-2 py-0.5 rounded-md text-xs font-bold border ${levelColor(topic.level)}`}>
                          {topic.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 truncate">{topic.description}</p>
                      {prog.total > 1 && (
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 h-1 bg-gray-100 dark:bg-italian-dark-surface rounded-full overflow-hidden">
                            <div
                              className="h-full bg-italian-green rounded-full transition-all duration-500"
                              style={{ width: `${(prog.done / prog.total) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            {prog.done}/{prog.total}
                          </span>
                        </div>
                      )}
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 space-y-6 border-t border-gray-100 dark:border-italian-dark-border pt-5">
                          {topic.sections.map((section, sIdx) => {
                            const exerciseKey = `${topic.id}-${sIdx}`;
                            const exerciseDone = completedExercises[exerciseKey];

                            return (
                              <div key={sIdx} className="space-y-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-md bg-italian-green/15 flex items-center justify-center text-xs font-bold text-italian-green">
                                    {sIdx + 1}
                                  </div>
                                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {section.title}
                                  </h4>
                                  {exerciseDone && (
                                    <CheckCircle className="w-4 h-4 text-italian-green ml-auto" />
                                  )}
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                                  {section.explanation}
                                </p>

                                {section.examples && section.examples.length > 0 && (
                                  <div className="pl-8 space-y-2">
                                    {section.examples.map((ex, eIdx) => (
                                      <div
                                        key={eIdx}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border"
                                      >
                                        <span className="text-sm font-semibold text-italian-green whitespace-nowrap">
                                          {ex.italian}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 pt-0.5">
                                          {ex.translation}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {getSectionExercises(section).length > 0 && (
                                  <div className="pl-8 space-y-3">
                                    <div className="flex items-center gap-2">
                                      <Award className="w-4 h-4 text-italian-gold" />
                                      <span className="text-xs font-semibold text-italian-gold uppercase tracking-wider">
                                        Mini Exercise{getSectionExercises(section).length > 1 ? 's' : ''}
                                      </span>
                                    </div>
                                    {getSectionExercises(section).map((ex, exIdx) => (
                                      <GrammarExercise
                                        key={exIdx}
                                        exercise={ex}
                                        topicId={topic.id}
                                        sectionIdx={sIdx}
                                        onComplete={handleExerciseComplete}
                                      />
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
