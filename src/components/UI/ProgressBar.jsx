import { motion } from 'framer-motion';

const barColors = {
  green: 'bg-italian-green',
  red: 'bg-italian-red',
  gold: 'bg-italian-gold',
  sage: 'bg-italian-sage',
};

const trackColors = {
  green: 'bg-italian-green/15',
  red: 'bg-italian-red/15',
  gold: 'bg-italian-gold/15',
  sage: 'bg-italian-sage/15',
};

const heights = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

export default function ProgressBar({
  value = 0,
  color = 'green',
  size = 'md',
  showLabel = false,
  className = '',
}) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-end mb-1">
          <span className="text-xs font-medium text-gray-500">{Math.round(clamped)}%</span>
        </div>
      )}
      <div className={`w-full rounded-full ${trackColors[color] || trackColors.green} ${heights[size]} overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`h-full rounded-full ${barColors[color] || barColors.green}`}
        />
      </div>
    </div>
  );
}
