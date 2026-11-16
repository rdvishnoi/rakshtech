export interface LegalSection {
  heading: string;
  body: string[];
}

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: 'Information we collect',
    body: [
      'When you send an inquiry through our website, we collect the details you choose to share, such as your name, phone number, email address, the service you are interested in, and your project details.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'We use your information only to respond to your enquiry, understand your requirements and communicate about a possible project. We do not sell your personal information.',
    ],
  },
  {
    heading: 'Contact us',
    body: [
      'If you want your information updated or removed, contact us on WhatsApp or by phone at +91 94138 26608.',
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: 'About this website',
    body: [
      'This website provides information about Raksh Tech and its software development and technology services. Content may be updated from time to time.',
    ],
  },
  {
    heading: 'Project engagements',
    body: [
      'Submitting an inquiry does not create a contract. Scope, pricing, timelines and terms for any project are agreed in writing between Raksh Tech and the client.',
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      'The content, design and branding of this website belong to Raksh Tech. Please do not copy or reuse them without written permission.',
    ],
  },
];
