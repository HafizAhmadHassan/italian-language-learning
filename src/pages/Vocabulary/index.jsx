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
  { key: 'essential_phrases', label: 'Essential Phrases' },
  { key: 'food', label: 'Food' },
  { key: 'home', label: 'Home' },
  { key: 'work', label: 'Work' },
  { key: 'family', label: 'Family' },
  { key: 'common_verbs', label: 'Common Verbs' },
  { key: 'numbers', label: 'Numbers' },
  { key: 'colors', label: 'Colors' },
  { key: 'seasons', label: 'Seasons' },
  { key: 'weather', label: 'Weather' },
  { key: 'emotions', label: 'Emotions' },
  { key: 'travel', label: 'Travel' },
  { key: 'transport', label: 'Transport' },
  { key: 'shopping', label: 'Shopping' },
  { key: 'body', label: 'Body' },
  { key: 'clothing', label: 'Clothing' },
  { key: 'animals', label: 'Animals' },
  { key: 'days_months', label: 'Days & Months' },
  { key: 'time_words', label: 'Time Words' },
  { key: 'question_words', label: 'Question Words' },
  { key: 'health', label: 'Health' },
  { key: 'professions', label: 'Professions' },
  { key: 'directions', label: 'Directions' },
  { key: 'adverbs', label: 'Adverbs' },
  { key: 'adjectives', label: 'Adjectives' },
  { key: 'technology_digital', label: 'Technology & Digital' },
  { key: 'people', label: 'People' },
  { key: 'education', label: 'Education' },
  { key: 'hobbies', label: 'Hobbies' },
  { key: 'environment', label: 'Environment' },
  { key: 'communication', label: 'Communication' },
];

const TABS = ['All', 'A1', 'A2', 'B1', 'B2', 'C1'];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' },
  }),
};

export default function VocabularyPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('All');
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
    if (activeTab !== 'All') {
      words = words.filter((w) => w.level === activeTab);
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
  }, [activeCategory, activeTab, search, nativeLanguage]);

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
              Vocabulary
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {learnedCount} of {vocabulary.length} words learned
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex gap-4 mb-6"
        >
          {[
            { icon: BookOpen, label: 'Total', value: vocabulary.length, color: 'text-gray-600 dark:text-gray-400' },
            { icon: CheckCircle, label: 'Learned', value: learnedCount, color: 'text-italian-green' },
            { icon: Star, label: 'Saved', value: savedCount, color: 'text-italian-gold' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border"
            >
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <span className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</span>
              <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="relative mb-6"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Italian words or translations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border text-italian-charcoal dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-italian-green/50 focus:ring-1 focus:ring-italian-green/30 transition-all duration-200"
          />
        </motion.div>

        {/* Level Tabs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="flex gap-2 mb-4 overflow-x-auto pb-1"
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

        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
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
                    ? 'bg-italian-gold text-white shadow-md shadow-italian-gold/20'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-italian-dark-surface dark:text-gray-400 dark:hover:bg-italian-dark-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Vocabulary Cards */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-italian-dark-surface flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-gray-300 dark:text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-2">No words found</h3>
              <p className="text-sm text-gray-400 dark:text-gray-500 max-w-sm">
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
