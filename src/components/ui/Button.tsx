import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-forest-800 text-white shadow-md shadow-forest-900/15 hover:-translate-y-0.5 hover:bg-forest-700 hover:shadow-lg',
  secondary: 'border border-forest-200 bg-white text-forest-900 hover:-translate-y-0.5 hover:border-forest-400 hover:bg-forest-50',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  disabled,
  className = '',
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
