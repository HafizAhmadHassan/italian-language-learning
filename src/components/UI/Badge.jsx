const badgeStyles = {
  green: 'bg-italian-green/12 text-italian-green',
  red: 'bg-italian-red/12 text-italian-red',
  gold: 'bg-italian-gold/12 text-italian-gold',
  sage: 'bg-italian-sage/15 text-italian-sage',
  gray: 'bg-gray-100 text-gray-600',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

export default function Badge({
  children,
  variant = 'green',
  size = 'md',
  className = '',
}) {
  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${badgeStyles[variant] || badgeStyles.green} ${badgeSizes[size] || badgeSizes.md} ${className}`}
    >
      {children}
    </span>
  );
}
