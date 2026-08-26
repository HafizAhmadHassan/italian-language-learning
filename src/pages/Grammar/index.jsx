import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Circle, BookOpen, Award } from 'lucide-react';
import grammar from '../../data/grammar';
import storage from '../../services/storage';

const LEVELS = [
  { key: 'all', label: 'All' },
  { key: 'A1', label: 'A1' },
  { key: 'A2', label: 'A2' },
  { key: 'B1', label: 'B1' },
];

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
            ? 'bg-[#009246]/10 border-[#009246]/30'
            : 'bg-[#CE2B37]/10 border-[#CE2B37]/30'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          {isCorrect ? (
            <CheckCircle className="w-5 h-5 text-[#009246]" />
          ) : (
            <Circle className="w-5 h-5 text-[#CE2B37]" />
          )}
          <span className={`font-semibold text-sm ${isCorrect ? 'text-[#009246]' : 'text-[#CE2B37]'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </span>
        </div>
        {!isCorrect && (
          <p className="text-sm text-white/60">
            The correct answer is:{' '}
            <span className="font-semibold text-[#009246]">{exercise.answer}</span>
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <div className="rounded-xl bg-white/5 border border-white/5 p-4">
      <p className="text-sm font-medium text-white/80 mb-3">{exercise.question}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {exercise.options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selected === opt
                ? 'bg-[#009246] text-white shadow-lg shadow-[#009246]/25'
                : 'bg-[#252540] text-white/50 hover:text-white/80 hover:bg-[#2D2D4A] border border-white/5'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="px-5 py-2 rounded-lg bg-[#009246] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#009246]/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Check Answer
      </button>
    </div>
  );
}

export default function GrammarPage() {
  const [activeLevel, setActiveLevel] = useState('all');
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
    if (activeLevel === 'all') return grammar;
    return grammar.filter((t) => t.level === activeLevel);
  }, [activeLevel]);

  const isTopicCompleted = (topic) =>
    topic.sections.every((_, idx) => completedExercises[`${topic.id}-${idx}`]);

  const getTopicProgress = (topic) => {
    const done = topic.sections.filter((_, idx) => completedExercises[`${topic.id}-${idx}`]).length;
    return { done, total: topic.sections.length };
  };

  const levelColor = (level) => {
    switch (level) {
      case 'A1': return 'bg-[#009246]/15 text-[#009246] border-[#009246]/30';
      case 'A2': return 'bg-[#D4A843]/15 text-[#D4A843] border-[#D4A843]/30';
      case 'B1': return 'bg-[#CE2B37]/15 text-[#CE2B37] border-[#CE2B37]/30';
      default: return 'bg-white/10 text-white/60 border-white/10';
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#FFF8F0]">Grammar</h1>
          <p className="text-white/50 mt-1">Italian grammar rules and exercises</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-8"
        >
          {LEVELS.map((lvl) => (
            <button
              key={lvl.key}
              onClick={() => setActiveLevel(lvl.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeLevel === lvl.key
                  ? 'bg-[#009246] text-white shadow-lg shadow-[#009246]/25'
                  : 'bg-[#252540] text-white/50 hover:text-white/80 hover:bg-[#2D2D4A] border border-white/5'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence>
            {filtered.map((topic, i) => {
              const isOpen = expandedId === topic.id;
              const completed = isTopicCompleted(topic);
              const prog = getTopicProgress(topic);

              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#252540]/80 border-[#009246]/30 shadow-lg shadow-[#009246]/5'
                      : 'bg-[#252540]/50 border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(isOpen ? null : topic.id)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A2E] flex items-center justify-center shrink-0">
                      {completed ? (
                        <CheckCircle className="w-5 h-5 text-[#009246]" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-white/40" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold text-[#FFF8F0]">{topic.title}</h3>
                        <span className={`px-2 py-0.5 rounded-md text-xs font-bold border ${levelColor(topic.level)}`}>
                          {topic.level}
                        </span>
                      </div>
                      <p className="text-sm text-white/40 mt-0.5 truncate">{topic.description}</p>
                      {prog.total > 1 && (
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#009246] rounded-full transition-all duration-500"
                              style={{ width: `${(prog.done / prog.total) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-white/30">
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
                      <ChevronDown className="w-5 h-5 text-white/30" />
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
                        <div className="px-5 pb-5 space-y-6 border-t border-white/5 pt-5">
                          {topic.sections.map((section, sIdx) => {
                            const exerciseKey = `${topic.id}-${sIdx}`;
                            const exerciseDone = completedExercises[exerciseKey];

                            return (
                              <div key={sIdx} className="space-y-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-md bg-[#009246]/15 flex items-center justify-center text-xs font-bold text-[#009246]">
                                    {sIdx + 1}
                                  </div>
                                  <h4 className="text-sm font-semibold text-white/80">
                                    {section.title}
                                  </h4>
                                  {exerciseDone && (
                                    <CheckCircle className="w-4 h-4 text-[#009246] ml-auto" />
                                  )}
                                </div>

                                <p className="text-sm text-white/50 leading-relaxed pl-8">
                                  {section.explanation}
                                </p>

                                {section.examples && section.examples.length > 0 && (
                                  <div className="pl-8 space-y-2">
                                    {section.examples.map((ex, eIdx) => (
                                      <div
                                        key={eIdx}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-[#1A1A2E]/60 border border-white/5"
                                      >
                                        <span className="text-sm font-semibold text-[#009246] whitespace-nowrap">
                                          {ex.italian}
                                        </span>
                                        <span className="text-xs text-white/40 pt-0.5">
                                          {ex.translation}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {section.exercise && (
                                  <div className="pl-8">
                                    <div className="flex items-center gap-2 mb-3">
                                      <Award className="w-4 h-4 text-[#D4A843]" />
                                      <span className="text-xs font-semibold text-[#D4A843] uppercase tracking-wider">
                                        Mini Exercise
                                      </span>
                                    </div>
                                    <GrammarExercise
                                      exercise={section.exercise}
                                      topicId={topic.id}
                                      sectionIdx={sIdx}
                                      onComplete={handleExerciseComplete}
                                    />
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
