import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function QuizOption({
  text,
  selected = false,
  correct = false,
  incorrect = false,
  onClick,
  disabled = false,
}) {
  const base = `w-full text-left px-5 py-4 rounded-2xl border-2 font-medium transition-all duration-200`;

  let style;
  if (correct) {
    style = 'border-italian-green bg-italian-green/10 text-italian-green';
  } else if (incorrect) {
    style = 'border-italian-red bg-italian-red/10 text-italian-red';
  } else if (selected) {
    style = 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
  } else {
    style = 'bg-white dark:bg-italian-dark-surface border-gray-200 dark:border-italian-dark-border text-italian-charcoal dark:text-gray-200 hover:border-italian-green/40 hover:bg-italian-green/5 dark:hover:bg-italian-green/10';
  }

  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${base} ${style} ${disabled && !correct && !incorrect ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      <span className="flex items-center gap-3">
        <span className="flex-1">{text}</span>
        {correct && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Check size={18} />
          </motion.span>
        )}
        {incorrect && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <X size={18} />
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}
