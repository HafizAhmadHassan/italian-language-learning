import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Star, CheckCircle, Headphones, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import vocabulary from '../../data/vocabulary';
import progress from '../../services/progress';
import storage from '../../services/storage';
import { speak } from '../../services/speech';
import VocabularyCard from '../../components/VocabularyCard';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'greetings', label: 'Greetings' },
  { key: 'food', label: 'Food' },
  { key: 'travel', label: 'Travel' },
  { key: 'family', label: 'Family' },
  { key: 'numbers', label: 'Numbers' },
  { key: 'colors', label: 'Colors' },
  { key: 'shopping', label: 'Shopping' },
  { key: 'work', label: 'Work' },
  { key: 'home', label: 'Home' },
  { key: 'weather', label: 'Weather' },
  { key: 'body', label: 'Body' },
  { key: 'emotions', label: 'Emotions' },
  { key: 'common_verbs', label: 'Common Verbs' },
  { key: 'essential_phrases', label: 'Essential Phrases' },
];

export default function VocabularyPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [progressData, setProgressData] = useState(progress.getProgress());
  const scrollRef = useRef(null);

  const onboarding = storage.get('onboarding');
  const nativeLanguage = onboarding?.nativeLanguage || 'en';

  useEffect(() => {
    setProgressData(progress.getProgress());
  }, []);

  const learnedCount = useMemo(
    () => vocabulary.filter((w) => progressData.vocabularyLearned.includes(w.id)).length,
    [progressData.vocabularyLearned]
  );
  const savedCount = useMemo(
    () => vocabulary.filter((w) => progressData.savedWords.includes(w.id)).length,
    [progressData.savedWords]
  );

  const filtered = useMemo(() => {
    let words = vocabulary;
    if (activeCategory !== 'all') {
      words = words.filter((w) => w.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      words = words.filter(
        (w) =>
          w.italian.toLowerCase().includes(q) ||
          (w.translations[nativeLanguage] || w.translations.en || '')
            .toLowerCase()
            .includes(q)
      );
    }
    return words;
  }, [activeCategory, search, nativeLanguage]);

  const toggleSave = (id) => {
    const p = progress.getProgress();
    if (p.savedWords.includes(id)) {
      progress.unsaveWord(id);
    } else {
      progress.saveWord(id);
    }
    setProgressData(progress.getProgress());
  };

  const toggleLearn = (id) => {
    progress.learnVocabulary(id);
    setProgressData(progress.getProgress());
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-[#FFF8F0]">Vocabulary</h1>
            <p className="text-white/50 mt-1">Master Italian words and phrases</p>
          </div>
          <Link
            to="/vocabulary/flashcards"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#009246] to-[#7CB69D] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#009246]/25 transition-all duration-300 text-sm self-start"
          >
            <Sparkles className="w-4 h-4" />
            Flashcard Practice
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 mb-6"
        >
          {[
            { icon: BookOpen, label: 'Total', value: vocabulary.length, color: 'text-white/70' },
            { icon: CheckCircle, label: 'Learned', value: learnedCount, color: 'text-[#009246]' },
            { icon: Star, label: 'Saved', value: savedCount, color: 'text-[#D4A843]' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#252540]/60 border border-white/5"
            >
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <span className="text-xs text-white/50">{stat.label}</span>
              <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative mb-6"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input
            type="text"
            placeholder="Search Italian words or translations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#252540]/80 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#009246]/50 focus:ring-1 focus:ring-[#009246]/30 transition-all duration-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#009246] text-white shadow-lg shadow-[#009246]/25'
                    : 'bg-[#252540] text-white/50 hover:text-white/80 hover:bg-[#2D2D4A] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((word) => (
                  <VocabularyCard
                    key={word.id}
                    word={word}
                    nativeLanguage={nativeLanguage}
                    isSaved={progressData.savedWords.includes(word.id)}
                    isLearned={progressData.vocabularyLearned.includes(word.id)}
                    onToggleSave={toggleSave}
                    onToggleLearn={toggleLearn}
                    onListen={(text) => speak(text)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#252540] flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-white/20" />
              </div>
              <h3 className="text-lg font-semibold text-white/60 mb-2">No words found</h3>
              <p className="text-sm text-white/30 max-w-sm">
                {search
                  ? `No matches for "${search}". Try a different search term.`
                  : 'No vocabulary in this category yet.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
