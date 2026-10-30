import { useEffect, useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { navLinks } from '@/data/content';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-b border-forest-100 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5" aria-label="PureGlow Cleaning Solutions home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-800 text-mint-300">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-forest-950">PureGlow</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-forest-600">Cleaning Solutions</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-forest-900/80 transition-colors duration-200 hover:bg-forest-50 hover:text-forest-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" className="!px-5 !py-2.5">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-forest-900 transition-colors hover:bg-forest-50 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="animate-fade-in border-t border-forest-100 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-forest-900 transition-colors hover:bg-forest-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button href="#contact" className="w-full">
                Get in Touch
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
