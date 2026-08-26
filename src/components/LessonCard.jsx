import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Lock, Clock } from 'lucide-react';

export default function LessonCard({ lesson, isCompleted, isLocked, progress = 0 }) {
  const levelColor =
    lesson.level === 'A1'
      ? 'bg-italian-green/12 text-italian-green'
      : lesson.level === 'A2'
        ? 'bg-italian-gold/12 text-italian-gold'
        : 'bg-italian-red/12 text-italian-red';

  const CardWrapper = isLocked ? 'div' : Link;
  const wrapperProps = isLocked ? {} : { to: `/lesson/${lesson.id}` };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!isLocked ? { y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' } : undefined}
      transition={{ duration: 0.25 }}
    >
      <CardWrapper
        {...wrapperProps}
        className={`block rounded-2xl border p-5 transition-all duration-200 ${
          isLocked
            ? 'bg-gray-50 border-gray-200 opacity-50 cursor-not-allowed dark:bg-italian-dark-card dark:border-italian-dark-border'
            : 'bg-white border-gray-100 hover:border-italian-green/30 dark:bg-italian-dark-card dark:border-italian-dark-border dark:hover:border-italian-green/30'
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <span
            className={`inline-flex items-center font-semibold rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wide ${levelColor}`}
          >
            {lesson.level}
          </span>
          {isCompleted ? (
            <span className="w-7 h-7 rounded-full bg-italian-green flex items-center justify-center">
              <Check size={15} className="text-white" strokeWidth={2.5} />
            </span>
          ) : isLocked ? (
            <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center dark:bg-italian-dark-surface">
              <Lock size={13} className="text-gray-400" />
            </span>
          ) : null}
        </div>

        <p className="text-[11px] font-medium text-italian-sage uppercase tracking-wider mb-1">
          Unit {lesson.unit} &middot; {lesson.unitTitle}
        </p>

        <h3 className="font-heading font-semibold text-base text-italian-charcoal dark:text-gray-100 mb-2">
          {lesson.title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
          <Clock size={13} />
          <span>{lesson.duration} min</span>
        </div>

        {!isLocked && (
          <div className="w-full h-2 rounded-full bg-italian-green/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${isCompleted ? 100 : progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`h-full rounded-full ${isCompleted ? 'bg-italian-green' : 'bg-italian-sage'}`}
            />
          </div>
        )}
      </CardWrapper>
    </motion.div>
  );
}
