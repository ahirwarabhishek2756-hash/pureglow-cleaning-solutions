import { ArrowRight, CircleCheck, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

const highlights = ['Clear product information', 'Everyday convenience', 'Homes and workplaces'];

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-mint-100 via-mint-50 to-white pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-forest-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-forest-500" aria-hidden="true" />
            PureGlow Cleaning Solutions
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-forest-950 sm:text-5xl lg:text-6xl">
            A Cleaner Space, <span className="text-forest-600">A Better Life.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-forest-800/80 sm:text-lg">
            PureGlow Cleaning Solutions brings together thoughtfully presented cleaning products to make everyday cleaning
            simple and convenient for homes and workplaces.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#products" className="group">
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm font-medium text-forest-900">
                <CircleCheck className="h-4 w-4 shrink-0 text-forest-500" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-900/15">
            <img
              src="https://images.pexels.com/photos/10566502/pexels-photo-10566502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="An arrangement of cleaning products in a bright, minimal setting"
              className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-forest-900/10 sm:-left-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest-500">Everyday convenience</p>
            <p className="mt-1 font-serif text-base font-semibold text-forest-950">Products for every room</p>
          </div>
        </div>
      </div>
    </section>
  );
}
