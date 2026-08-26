import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = false,
  dark = false,
  ...rest
}) {
  const bg = dark ? 'bg-italian-dark-card' : 'bg-white';
  const border = dark ? 'border-italian-dark-border' : 'border-gray-100';
  const shadow = dark ? 'shadow-none' : 'shadow-sm shadow-gray-200/60';

  return (
    <motion.div
      whileHover={hover ? { y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border ${border} ${bg} ${shadow} p-5 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
