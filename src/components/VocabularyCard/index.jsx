import { motion } from 'framer-motion';
import { Volume2, Star, CheckCircle } from 'lucide-react';

export default function VocabularyCard({
  word,
  nativeLanguage = 'en',
  isSaved = false,
  isLearned = false,
  onToggleSave,
  onToggleLearn,
  onListen,
}) {
  const translation = word.translations[nativeLanguage] || word.translations.en;
  const exampleTranslation =
    word.example?.translations?.[nativeLanguage] ||
    word.example?.translations?.en ||
    '';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 shadow-sm hover:shadow-md hover:border-italian-green/30 transition-all duration-300"
    >
      {isLearned && (
        <div className="absolute top-3 right-3">
          <CheckCircle className="w-5 h-5 text-italian-green" />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-italian-green font-heading">
            {word.italian}
          </h3>
          <p className="text-sm text-gray-400 dark:text-gray-500 italic mt-0.5 font-mono">
            [{word.pronunciation}]
          </p>
        </div>

        <p className="text-base text-gray-700 dark:text-gray-300 font-medium">
          {translation}
        </p>

        {word.example && (
          <div className="rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border p-3">
            <p className="text-sm text-italian-charcoal dark:text-gray-200 italic leading-relaxed">
              "{word.example.italian}"
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {exampleTranslation}
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-italian-dark-border">
          <button
            onClick={() => onListen?.(word.italian)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-italian-dark-surface hover:bg-italian-green/10 text-gray-600 dark:text-gray-400 hover:text-italian-green text-xs font-medium transition-all duration-200"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Listen
          </button>

          <button
            onClick={() => onToggleSave?.(word.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              isSaved
                ? 'bg-italian-gold/15 text-italian-gold hover:bg-italian-gold/25'
                : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-italian-gold/15 hover:text-italian-gold'
            }`}
          >
            <Star
              className="w-3.5 h-3.5"
              fill={isSaved ? 'currentColor' : 'none'}
            />
            {isSaved ? 'Saved' : 'Save'}
          </button>

          <button
            onClick={() => onToggleLearn?.(word.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              isLearned
                ? 'bg-italian-green/15 text-italian-green hover:bg-italian-green/25'
                : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-italian-green/15 hover:text-italian-green'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            {isLearned ? 'Learned' : 'Learn'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
