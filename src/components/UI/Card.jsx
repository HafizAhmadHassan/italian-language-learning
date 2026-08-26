import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = false,
  ...rest
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-gray-100 dark:border-[#2E323C] bg-white dark:bg-[#1A1D24] shadow-sm shadow-gray-200/60 dark:shadow-none p-5 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
