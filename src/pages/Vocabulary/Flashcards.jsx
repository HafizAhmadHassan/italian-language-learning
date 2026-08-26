import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCcw, Volume2, Trophy, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import vocabulary from '../../data/vocabulary';
import progress from '../../services/progress';
import storage from '../../services/storage';
import { speak } from '../../services/speech';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' },
  }),
};

export default function Flashcards() {
  const [progressData, setProgressData] = useState(progress.getProgress());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(1);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, knows: 0, practice: 0 });
  const [sessionComplete, setSessionComplete] = useState(false);

  const onboarding = storage.get('onboarding');
  const nativeLanguage = onboarding?.nativeLanguage || 'en';

  const cards = useMemo(() => {
    const learnedIds = new Set(progressData.vocabularyLearned);
    const weakIds = new Set(progressData.weakVocabulary);

    let pool = vocabulary.filter((w) => !learnedIds.has(w.id) || weakIds.has(w.id));
    if (pool.length === 0) pool = [...vocabulary];

    return pool.sort(() => Math.random() - 0.5);
  }, [progressData]);

  const currentCard = cards[currentIndex];
  const totalCards = cards.length;

  const nextCard = useCallback(
    (toRight = true) => {
      setDirection(toRight ? 1 : -1);
      setIsFlipped(false);
      if (currentIndex + 1 >= totalCards) {
        setSessionComplete(true);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [currentIndex, totalCards]
  );

  const markStrong = () => {
    if (!currentCard) return;
    progress.markVocabularyStrong(currentCard.id);
    setProgressData(progress.getProgress());
    setSessionStats((s) => ({ ...s, reviewed: s.reviewed + 1, knows: s.knows + 1 }));
    nextCard(true);
  };

  const markWeak = () => {
    if (!currentCard) return;
    progress.markVocabularyWeak(currentCard.id);
    setProgressData(progress.getProgress());
    setSessionStats((s) => ({ ...s, reviewed: s.reviewed + 1, practice: s.practice + 1 }));
    nextCard(true);
  };

  const restartSession = () => {
    setProgressData(progress.getProgress());
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionStats({ reviewed: 0, knows: 0, practice: 0 });
    setSessionComplete(false);
  };

  const getTranslation = (word) =>
    word.translations[nativeLanguage] || word.translations.en;
  const getExampleTranslation = (word) =>
    word.example?.translations?.[nativeLanguage] || word.example?.translations?.en || '';

  if (sessionComplete) {
    return (
      <div className="min-h-full pb-24 md:pb-8 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white dark:bg-italian-dark-card border border-gray-100 dark:border-italian-dark-border rounded-3xl p-8 text-center shadow-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-italian-gold to-italian-gold/60 flex items-center justify-center mx-auto mb-6"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-2xl font-bold text-italian-charcoal dark:text-white mb-2 font-heading">Session Complete!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Great job practicing your vocabulary</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Reviewed', value: sessionStats.reviewed, color: 'text-gray-700 dark:text-gray-300' },
              { label: 'Knows', value: sessionStats.knows, color: 'text-italian-green' },
              { label: 'Practice', value: sessionStats.practice, color: 'text-italian-red' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 dark:bg-italian-dark-surface rounded-xl p-4">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={restartSession}
              className="w-full py-3 rounded-xl bg-italian-green text-white font-semibold hover:shadow-lg hover:shadow-italian-green/20 transition-all duration-200"
            >
              Practice Again
            </button>
            <Link
              to="/vocabulary"
              className="w-full py-3 rounded-xl bg-gray-100 dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-200 dark:hover:bg-italian-dark-border transition-all duration-200 text-center"
            >
              Back to Vocabulary
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentCard) return null;

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <Link
              to="/vocabulary"
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-italian-green hover:border-italian-green/30 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">Flashcards</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Review {totalCards} cards
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-400 dark:text-gray-500 font-mono">
            {currentIndex + 1} / {totalCards}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mb-6"
        >
          <div className="w-full h-1.5 bg-gray-100 dark:bg-italian-dark-surface rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-italian-green rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {/* Flashcard */}
        <div className="relative h-[380px] mb-8 perspective-1000">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={(d) => ({ x: d > 0 ? 300 : -300, opacity: 0 })}
              animate={{ x: 0, opacity: 1 }}
              exit={(d) => ({ x: d > 0 ? -300 : 300, opacity: 0 })}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="absolute inset-0 cursor-pointer"
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                className="w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 rounded-3xl border border-gray-200 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-8 flex flex-col items-center justify-center text-center shadow-lg backface-hidden ${
                    isFlipped ? 'pointer-events-none' : ''
                  }`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Italian</p>
                  <h2 className="text-4xl font-bold text-italian-green mb-3 font-heading">
                    {currentCard.italian}
                  </h2>
                  <p className="text-base text-gray-400 dark:text-gray-500 italic font-mono mb-6">
                    [{currentCard.pronunciation}]
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(currentCard.italian);
                    }}
                    className="w-12 h-12 rounded-full bg-italian-green/10 border border-italian-green/30 flex items-center justify-center text-italian-green hover:bg-italian-green/20 transition-all"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-gray-300 dark:text-gray-600 mt-6">Tap to flip</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-3xl border border-italian-green/20 bg-gradient-to-br from-gray-50 to-white dark:from-italian-dark-surface dark:to-italian-dark-card p-8 flex flex-col items-center justify-center text-center shadow-lg"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Translation</p>
                  <h2 className="text-3xl font-bold text-italian-charcoal dark:text-white mb-6 font-heading">
                    {getTranslation(currentCard)}
                  </h2>
                  {currentCard.example && (
                    <div className="w-full bg-gray-50 dark:bg-italian-dark-surface rounded-xl border border-gray-100 dark:border-italian-dark-border p-4">
                      <p className="text-base text-gray-700 dark:text-gray-300 italic">
                        "{currentCard.example.italian}"
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {getExampleTranslation(currentCard)}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={markWeak}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-red/10 border border-italian-red/30 text-italian-red font-semibold hover:bg-italian-red/20 transition-all"
          >
            <X className="w-5 h-5" />
            Need Practice
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-14 h-14 rounded-full bg-gray-100 dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-italian-green hover:border-italian-green/30 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={markStrong}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-green/10 border border-italian-green/30 text-italian-green font-semibold hover:bg-italian-green/20 transition-all"
          >
            <Check className="w-5 h-5" />
            I Know This
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
