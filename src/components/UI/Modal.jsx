import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, dark = false }) {
  const handleEscape = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  const bg = dark ? 'bg-italian-dark-card' : 'bg-white';
  const border = dark ? 'border-italian-dark-border' : 'border-gray-200';
  const textColor = dark ? 'text-gray-100' : 'text-italian-charcoal';
  const mutedText = dark ? 'text-gray-400' : 'text-gray-500';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`relative z-10 w-full max-w-md rounded-2xl border ${border} ${bg} shadow-2xl overflow-hidden`}
          >
            <div className={`flex items-center justify-between px-6 py-4 border-b ${border}`}>
              <h2 className={`text-lg font-semibold font-heading ${textColor}`}>{title}</h2>
              <button
                onClick={onClose}
                className={`p-1.5 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-italian-dark-surface ${mutedText}`}
              >
                <X size={18} />
              </button>
            </div>

            <div className={`p-6 ${textColor}`}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
