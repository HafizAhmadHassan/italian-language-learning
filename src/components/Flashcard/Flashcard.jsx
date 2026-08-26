import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';
import AudioButton from '../AudioButton/AudioButton';
import Button from '../UI/Button';

export default function Flashcard({
  front,
  back,
  pronunciation,
  onKnow,
  onPractice,
  onFlip,
  dark = false,
}) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((f) => !f);
    onFlip?.(!flipped);
  };

  const bg = dark ? 'bg-italian-dark-card' : 'bg-white';
  const border = dark ? 'border-italian-dark-border' : 'border-gray-200';
  const textColor = dark ? 'text-gray-100' : 'text-italian-charcoal';
  const muted = dark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      <div className="relative w-full h-64 cursor-pointer perspective-[1000px]" onClick={handleFlip}>
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="absolute inset-0"
        >
          {/* Front */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border ${border} ${bg} p-6 shadow-lg`}
          >
            <p className={`text-2xl font-heading font-semibold ${textColor}`}>{front}</p>
            {pronunciation && (
              <p className={`mt-2 text-sm ${muted}`}>{pronunciation}</p>
            )}
            <div className="mt-4">
              <AudioButton text={front} size="sm" />
            </div>
            <p className={`absolute bottom-4 text-xs ${muted} flex items-center gap-1`}>
              <RotateCw size={12} /> Tap to flip
            </p>
          </div>

          {/* Back */}
          <div
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border ${border} bg-italian-green/5 p-6 shadow-lg`}
          >
            <p className={`text-xl font-heading font-medium ${textColor}`}>{back}</p>
            <div className="mt-3">
              <AudioButton text={back} size="sm" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center gap-3 w-full">
        <Button variant="danger" className="flex-1" onClick={onPractice}>
          Need Practice
        </Button>
        <Button variant="primary" className="flex-1" onClick={onKnow}>
          I Know This
        </Button>
      </div>
    </div>
  );
}
