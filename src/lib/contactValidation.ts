export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length > 100) {
    errors.name = 'Name must be 100 characters or fewer.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!subject) {
    errors.subject = 'Please enter a subject.';
  } else if (subject.length > 150) {
    errors.subject = 'Subject must be 150 characters or fewer.';
  }

  if (!message) {
    errors.message = 'Please enter your message.';
  } else if (message.length < 10) {
    errors.message = 'Your message should be at least 10 characters.';
  } else if (message.length > 2000) {
    errors.message = 'Message must be 2000 characters or fewer.';
  }

  return errors;
}
