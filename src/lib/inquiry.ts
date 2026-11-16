import { CONTACT_SERVICE_OPTIONS } from '@/data/content';

export interface InquiryValues {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  details: string;
}

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

const PHONE_PATTERN = /^\+?\d{10,13}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const EMPTY_INQUIRY: InquiryValues = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  details: '',
};

export function validateInquiry(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};
  const name = values.fullName.trim();
  const phone = values.phone.replace(/[\s()-]/g, '');
  const email = values.email.trim();
  const details = values.details.trim();

  if (name.length < 2) errors.fullName = 'Please enter your full name.';
  else if (name.length > 100) errors.fullName = 'Name must be under 100 characters.';

  if (!PHONE_PATTERN.test(phone)) errors.phone = 'Enter a valid phone number with 10 digits.';

  if (email && (!EMAIL_PATTERN.test(email) || email.length > 254)) {
    errors.email = 'Enter a valid email address, or leave this blank.';
  }

  if (!(CONTACT_SERVICE_OPTIONS as readonly string[]).includes(values.service)) {
    errors.service = 'Please choose the service you are interested in.';
  }

  if (details.length < 10) errors.details = 'Please share a few more details (at least 10 characters).';
  else if (details.length > 2000) errors.details = 'Please keep your details under 2000 characters.';

  return errors;
}

export function buildInquiryMessage(values: InquiryValues): string {
  const lines = ['Hello Raksh Tech, I would like to discuss a project.'];
  if (values.fullName.trim()) lines.push(`Name: ${values.fullName.trim()}`);
  if (values.phone.trim()) lines.push(`Phone: ${values.phone.trim()}`);
  if (values.service) lines.push(`Service: ${values.service}`);
  if (values.details.trim()) lines.push(`Details: ${values.details.trim()}`);
  return lines.join('\n');
}
