interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

const toneClasses = {
  light: {
    eyebrow: 'text-forest-500',
    title: 'text-forest-950',
    description: 'text-forest-800/75',
  },
  dark: {
    eyebrow: 'text-mint-300',
    title: 'text-white',
    description: 'text-forest-200/80',
  },
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const colors = toneClasses[tone];

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.eyebrow}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl ${colors.title}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-relaxed ${colors.description}`}>{description}</p>}
    </div>
  );
}
