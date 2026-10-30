import { ClipboardList, Headset, Layers } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';

const contactReasons = [
  { text: 'Ask a question about a product or where it is used', icon: Headset },
  { text: 'Plan supplies for your office or shared spaces', icon: Layers },
  { text: 'Request help with a bulk enquiry', icon: ClipboardList },
];

interface ContactProps {
  enquiry: { subject: string; id: number } | null;
}

export default function Contact({ enquiry }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-20 bg-mint-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Contact Us"
            title="We are happy to help."
            description="Send us a message about our products, your cleaning needs or a bulk enquiry, and our team will respond."
          />

          <ul className="mt-10 space-y-4">
            {contactReasons.map(({ text, icon: Icon }) => (
              <li key={text} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-forest-900">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-xl shadow-forest-900/5 sm:p-10 lg:col-span-3">
          <ContactForm enquiry={enquiry} />
        </div>
      </div>
    </section>
  );
}
