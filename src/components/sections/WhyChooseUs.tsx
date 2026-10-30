import SectionHeading from '@/components/ui/SectionHeading';
import { whyChooseUs } from '@/data/content';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-forest-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Why Choose Us"
          title="Clean living, made easy."
          description="Four simple reasons customers choose PureGlow for their everyday cleaning."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map(({ title, description, icon: Icon }, index) => (
            <div
              key={title}
              className="group rounded-3xl border border-forest-800 bg-forest-900/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-mint-300/40 hover:bg-forest-900"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-300 text-forest-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-forest-400">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold leading-snug text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-200/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
