import { BUSINESS } from '@/config/business';

export const WHATSAPP_MESSAGES = {
  general:
    'Hello Raksh Tech, I am interested in your software development services. I would like to discuss my project requirements.',
  website:
    'Hello Raksh Tech, I am looking for website development for my business. I would like to discuss the details.',
  customSoftware:
    'Hello Raksh Tech, I need custom software built for my business. Could we discuss my requirements?',
  mobileApp:
    'Hello Raksh Tech, I am interested in developing an Android or iOS mobile app. Could we discuss it?',
  automation:
    'Hello Raksh Tech, I want to automate some of my business processes. Could we discuss how you can help?',
  consultation:
    'Hello Raksh Tech, I would like to book a free consultation to discuss my project idea.',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
