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
      className="group relative rounded-2xl border border-white/10 bg-[#252540]/80 backdrop-blur-sm p-5 shadow-lg shadow-black/20 hover:border-[#009246]/40 hover:shadow-[#009246]/10 hover:shadow-xl transition-all duration-300"
    >
      {isLearned && (
        <div className="absolute top-3 right-3">
          <CheckCircle className="w-5 h-5 text-[#009246]" />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-[#009246] tracking-wide">
            {word.italian}
          </h3>
          <p className="text-sm text-white/40 italic mt-0.5 font-mono">
            [{word.pronunciation}]
          </p>
        </div>

        <p className="text-base text-white/80 font-medium">
          {translation}
        </p>

        {word.example && (
          <div className="rounded-xl bg-white/5 border border-white/5 p-3">
            <p className="text-sm text-[#FFF8F0] italic leading-relaxed">
              "{word.example.italian}"
            </p>
            <p className="text-xs text-white/40 mt-1">
              {exampleTranslation}
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 pt-1 border-t border-white/5">
          <button
            onClick={() => onListen?.(word.italian)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#009246]/20 text-white/60 hover:text-[#009246] text-xs font-medium transition-all duration-200"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Listen
          </button>

          <button
            onClick={() => onToggleSave?.(word.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              isSaved
                ? 'bg-[#D4A843]/20 text-[#D4A843] hover:bg-[#D4A843]/30'
                : 'bg-white/5 text-white/60 hover:bg-[#D4A843]/20 hover:text-[#D4A843]'
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
                ? 'bg-[#009246]/20 text-[#009246] hover:bg-[#009246]/30'
                : 'bg-white/5 text-white/60 hover:bg-[#009246]/20 hover:text-[#009246]'
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
