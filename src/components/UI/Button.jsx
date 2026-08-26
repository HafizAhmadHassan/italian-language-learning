import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const variants = {
  primary:
    'bg-italian-green text-white hover:bg-italian-green/90 shadow-md shadow-italian-green/20',
  secondary:
    'bg-white text-italian-charcoal border border-gray-200 hover:bg-gray-50 shadow-sm',
  danger:
    'bg-italian-red text-white hover:bg-italian-red/90 shadow-md shadow-italian-red/20',
  ghost:
    'bg-transparent text-italian-charcoal hover:bg-gray-100',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  return (
    <motion.button
      whileTap={!disabled && !loading ? { scale: 0.97 } : undefined}
      whileHover={!disabled && !loading ? { scale: 1.015 } : undefined}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-medium transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...rest}
    >
      {loading && <Loader2 size={size === 'sm' ? 14 : 18} className="animate-spin" />}
      {children}
    </motion.button>
  );
}
