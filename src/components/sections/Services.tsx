import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/data/content';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Support for homes and workplaces alike."
          description="Whether you are cleaning one household or stocking a whole office, we help you find the right products and plan your supplies."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex gap-6 rounded-3xl border border-forest-100 bg-white p-8 transition-all duration-500 hover:border-mint-300 hover:bg-mint-50/60"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest-800 text-mint-300 transition-transform duration-500 group-hover:scale-105">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-forest-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/75">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
