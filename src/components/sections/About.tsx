import SectionHeading from '@/components/ui/SectionHeading';
import { aboutCards } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-forest-900/10">
          <img
            src="https://images.pexels.com/photos/7546566/pexels-photo-7546566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="A bright, modern kitchen with clean white cabinets"
            className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Cleaning made simple, for every kind of space"
            description="PureGlow Cleaning Solutions is a cleaning products brand built around one idea: keeping a home or workplace clean should be straightforward. We focus on clear product information, everyday convenience and the real needs of the people who use each space."
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutCards.map(({ title, description, icon: Icon }) => (
              <li key={title} className="rounded-2xl border border-forest-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-forest-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/75">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
