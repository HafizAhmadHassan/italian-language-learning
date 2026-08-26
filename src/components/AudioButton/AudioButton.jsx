import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { speak, stopSpeaking } from '../../services/speech';

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const iconMap = {
  sm: 16,
  md: 20,
  lg: 24,
};

export default function AudioButton({ text, size = 'md', className = '' }) {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }

    setPlaying(true);
    speak(text);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';
    utterance.rate = 0.9;
    const estimated = Math.max(800, text.length * 120);
    setTimeout(() => setPlaying(false), estimated);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={`relative flex items-center justify-center rounded-full transition-colors ${
        playing ? 'bg-italian-green text-white' : 'bg-italian-green/10 text-italian-green hover:bg-italian-green/20'
      } ${sizeMap[size]} ${className}`}
    >
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div
            key="playing"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="flex gap-0.5 items-end h-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ height: [4, 14, 4] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="w-[3px] rounded-full bg-white"
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <Volume2 size={iconMap[size]} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
