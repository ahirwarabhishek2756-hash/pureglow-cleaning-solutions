import { Facebook, Instagram, Linkedin, Sparkles, Youtube } from 'lucide-react';
import { navLinks, products } from '@/data/content';

const socialLinks = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'YouTube', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-300 text-forest-950">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-bold text-white">PureGlow</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-mint-300">Cleaning Solutions</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest-200/80">
            Simple, convenient cleaning products for homes and workplaces.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-mint-300">Explore</h3>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-200 hover:text-mint-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Product categories">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-mint-300">Product Categories</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((product) => (
              <li key={product.id}>
                <a href="#products" className="transition-colors duration-200 hover:text-mint-300">
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-mint-300">Contact</h3>
          <p className="mt-5 text-sm leading-relaxed text-forest-200/80">
            Questions about our products or bulk orders? We would love to hear from you.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex text-sm font-semibold text-mint-300 transition-colors duration-200 hover:text-white"
          >
            Go to the contact form
          </a>
          <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-mint-300">Follow Us</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={`${label} (placeholder link)`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint-300 hover:text-mint-300"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-forest-200/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} PureGlow Cleaning Solutions. All rights reserved.</p>
          <p>Always read product labels before use.</p>
        </div>
      </div>
    </footer>
  );
}
