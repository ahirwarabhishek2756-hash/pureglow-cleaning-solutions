import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { CircleCheck, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/lib/contactValidation';

interface ContactFormProps {
  enquiry: { subject: string; id: number } | null;
}

const emptyValues: ContactFormValues = { name: '', email: '', subject: '', message: '' };

const inputClasses =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-forest-950 placeholder:text-forest-800/40 transition-colors duration-200 focus:outline-none focus:ring-4';

export default function ContactForm({ enquiry }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!enquiry) return;
    setValues((current) => ({ ...current, subject: enquiry.subject }));
    setIsSubmitted(false);
  }, [enquiry]);

  const visibleErrors: ContactFormErrors = hasAttemptedSubmit ? validateContactForm(values) : {};

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasAttemptedSubmit(true);
    if (Object.keys(validateContactForm(values)).length > 0) return;

    setValues(emptyValues);
    setHasAttemptedSubmit(false);
    setIsSubmitted(true);
  };

  const fieldClasses = (field: keyof ContactFormValues) =>
    `${inputClasses} ${
      visibleErrors[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
        : 'border-forest-200 focus:border-forest-500 focus:ring-forest-100'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={visibleErrors.name} htmlFor="contact-name">
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => handleChange('name', event.target.value)}
            placeholder="Your full name"
            className={fieldClasses('name')}
            aria-invalid={Boolean(visibleErrors.name)}
          />
        </Field>

        <Field label="Email" error={visibleErrors.email} htmlFor="contact-email">
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => handleChange('email', event.target.value)}
            placeholder="you@example.com"
            className={fieldClasses('email')}
            aria-invalid={Boolean(visibleErrors.email)}
          />
        </Field>
      </div>

      <Field label="Subject" error={visibleErrors.subject} htmlFor="contact-subject">
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={(event) => handleChange('subject', event.target.value)}
          placeholder="How can we help?"
          className={fieldClasses('subject')}
          aria-invalid={Boolean(visibleErrors.subject)}
        />
      </Field>

      <Field label="Message" error={visibleErrors.message} htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange('message', event.target.value)}
          placeholder="Tell us about your home, workplace or product question."
          className={`${fieldClasses('message')} resize-y`}
          aria-invalid={Boolean(visibleErrors.message)}
        />
      </Field>

      {isSubmitted && (
        <div role="status" className="animate-fade-in flex items-start gap-3 rounded-xl border border-mint-300 bg-mint-100 px-4 py-3 text-sm text-forest-900">
          <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
          <p>
            Thank you. Your message passed our checks. This is a demo contact form, so it has not been sent to PureGlow.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-forest-800/60">All fields are required. This is a demo form.</p>
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-forest-950">
        {label}
      </label>
      {children}
      {error && <p className="animate-fade-in mt-2 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
