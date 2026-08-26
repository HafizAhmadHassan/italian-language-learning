import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCcw, Volume2, Trophy, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import vocabulary from '../../data/vocabulary';
import progress from '../../services/progress';
import storage from '../../services/storage';
import { speak } from '../../services/speech';

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
      <div className="min-h-screen bg-[#1A1A2E] text-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-[#252540]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4A843] to-[#D4A843]/50 flex items-center justify-center mx-auto mb-6"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-2xl font-bold text-[#FFF8F0] mb-2">Session Complete!</h2>
          <p className="text-white/50 mb-8">Great job practicing your vocabulary</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Reviewed', value: sessionStats.reviewed, color: 'text-white' },
              { label: 'Knows', value: sessionStats.knows, color: 'text-[#009246]' },
              { label: 'Practice', value: sessionStats.practice, color: 'text-[#CE2B37]' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={restartSession}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#009246] to-[#7CB69D] text-white font-semibold hover:shadow-lg hover:shadow-[#009246]/25 transition-all duration-300"
            >
              Practice Again
            </button>
            <Link
              to="/vocabulary"
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-medium hover:bg-white/10 transition-all duration-200"
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
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <Link
              to="/vocabulary"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-[#FFF8F0]">Flashcards</h1>
              <p className="text-sm text-white/40">
                Review {totalCards} cards
              </p>
            </div>
          </div>
          <div className="text-sm text-white/40 font-mono">
            {currentIndex + 1} / {totalCards}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="w-full h-1.5 bg-[#252540] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#009246] to-[#7CB69D] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

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
                <div
                  className={`absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-[#252540] to-[#2D2D4A] p-8 flex flex-col items-center justify-center text-center backface-hidden ${
                    isFlipped ? 'pointer-events-none' : ''
                  }`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-6">Italian</p>
                  <h2 className="text-4xl font-bold text-[#009246] mb-3">
                    {currentCard.italian}
                  </h2>
                  <p className="text-base text-white/40 italic font-mono mb-6">
                    [{currentCard.pronunciation}]
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(currentCard.italian);
                    }}
                    className="w-12 h-12 rounded-full bg-[#009246]/10 border border-[#009246]/30 flex items-center justify-center text-[#009246] hover:bg-[#009246]/20 transition-all"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-white/20 mt-6">Tap to flip</p>
                </div>

                <div
                  className="absolute inset-0 rounded-3xl border border-[#009246]/20 bg-gradient-to-br from-[#1A1A2E] to-[#252540] p-8 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-6">Translation</p>
                  <h2 className="text-3xl font-bold text-[#FFF8F0] mb-6">
                    {getTranslation(currentCard)}
                  </h2>
                  {currentCard.example && (
                    <div className="w-full bg-white/5 rounded-xl border border-white/5 p-4">
                      <p className="text-base text-white/70 italic">
                        "{currentCard.example.italian}"
                      </p>
                      <p className="text-sm text-white/35 mt-2">
                        {getExampleTranslation(currentCard)}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={markWeak}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#CE2B37]/15 border border-[#CE2B37]/30 text-[#CE2B37] font-semibold hover:bg-[#CE2B37]/25 transition-all"
          >
            <X className="w-5 h-5" />
            Need Practice
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={markStrong}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#009246]/15 border border-[#009246]/30 text-[#009246] font-semibold hover:bg-[#009246]/25 transition-all"
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
