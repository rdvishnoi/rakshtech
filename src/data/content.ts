import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  Boxes,
  Briefcase,
  Building2,
  Cog,
  Code2,
  Factory,
  GraduationCap,
  Globe,
  Handshake,
  Headset,
  LayoutDashboard,
  Lightbulb,
  Receipt,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Stethoscope,
  Store,
  Users,
  Wrench,
  Workflow,
  ClipboardList,
  PenTool,
  Hammer,
  Home,
  Layers,
  Network,
} from 'lucide-react';
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  points: string[];
  whatsappMessage: string;
}

export const SERVICES: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: Code2,
    summary: 'Tailored software solutions designed around how your business actually works.',
    points: ['Business management systems', 'Workflow and approval applications'],
    whatsappMessage: WHATSAPP_MESSAGES.customSoftware,
  },
  {
    id: 'website',
    title: 'Website Development',
    icon: Globe,
    summary: 'Fast, professional websites that build trust and bring in enquiries.',
    points: ['Corporate websites and landing pages', 'E-commerce websites'],
    whatsappMessage: WHATSAPP_MESSAGES.website,
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    icon: LayoutDashboard,
    summary: 'Modern, scalable and responsive web applications for daily operations.',
    points: ['Custom dashboards', 'Business portals and client areas'],
    whatsappMessage:
      'Hello Raksh Tech, I need a web application or dashboard for my business. Could we discuss my requirements?',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Application Development',
    icon: Smartphone,
    summary: 'User-friendly Android and iOS apps that your customers and team will enjoy using.',
    points: ['Android and iOS applications', 'Simple, intuitive mobile experiences'],
    whatsappMessage: WHATSAPP_MESSAGES.mobileApp,
  },
  {
    id: 'crm-erp',
    title: 'CRM & ERP Solutions',
    icon: Users,
    summary: 'Manage customers, sales, stock and operations from one connected system.',
    points: ['Customer relationship management', 'Business resource and operations management'],
    whatsappMessage:
      'Hello Raksh Tech, I am looking for a CRM or ERP solution for my business. Could we discuss it?',
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: Workflow,
    summary: 'Remove repetitive manual work and let your processes run more smoothly.',
    points: ['Workflow automation', 'Process optimization and smart business tools'],
    whatsappMessage: WHATSAPP_MESSAGES.automation,
  },
  {
    id: 'ai',
    title: 'AI-Powered Solutions',
    icon: Sparkles,
    summary: 'Practical AI features that help your team work faster and make better decisions.',
    points: ['AI integration in existing applications', 'Intelligent business automation'],
    whatsappMessage:
      'Hello Raksh Tech, I am interested in adding AI-powered features to my business software. Could we discuss it?',
  },
  {
    id: 'maintenance',
    title: 'Software Maintenance & Support',
    icon: Wrench,
    summary: 'Ongoing care that keeps your software secure, fast and up to date.',
    points: ['Bug fixing and improvements', 'Performance optimization and ongoing support'],
    whatsappMessage:
      'Hello Raksh Tech, I need support and maintenance for my existing software. Could we discuss it?',
  },
];

export interface Product {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
  accent: 'royal' | 'cyan' | 'violet';
}

export const PRODUCTS: Product[] = [
  {
    id: 'business-management',
    title: 'Business Management Software',
    icon: LayoutDashboard,
    description: 'A central place to run your daily business operations with clear reports.',
    capabilities: ['Dashboards & reports', 'Staff and task tracking'],
    accent: 'royal',
  },
  {
    id: 'inventory',
    title: 'Inventory Management Systems',
    icon: Boxes,
    description: 'Track stock movement, purchases and low-stock alerts in real time.',
    capabilities: ['Stock in and out', 'Low-stock alerts'],
    accent: 'cyan',
  },
  {
    id: 'billing',
    title: 'Billing & Accounting Solutions',
    icon: Receipt,
    description: 'Generate invoices, record payments and keep your books organised.',
    capabilities: ['Invoices and receipts', 'Payment and ledger records'],
    accent: 'violet',
  },
  {
    id: 'crm',
    title: 'CRM Software',
    icon: Users,
    description: 'Follow every lead and customer from first enquiry to repeat sale.',
    capabilities: ['Lead pipeline', 'Customer history'],
    accent: 'royal',
  },
  {
    id: 'erp',
    title: 'ERP Solutions',
    icon: Layers,
    description: 'Connect sales, purchases, production and finance in one system.',
    capabilities: ['Connected departments', 'Operational visibility'],
    accent: 'cyan',
  },
  {
    id: 'custom-apps',
    title: 'Custom Business Applications',
    icon: Cog,
    description: 'Purpose-built tools designed around a process unique to your business.',
    capabilities: ['Built to your workflow', 'Room to grow'],
    accent: 'violet',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your business, your requirements and your goals.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define the features, technology and a clear project roadmap.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create an intuitive user experience and a solid application structure.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Develop',
    description: 'We build, test and refine the solution until it is ready.',
    icon: Hammer,
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'We deploy the solution and stay with you with ongoing assistance.',
    icon: Rocket,
  },
];

export const INDUSTRIES: { title: string; icon: LucideIcon }[] = [
  { title: 'Retail & E-commerce', icon: Store },
  { title: 'Education & Coaching', icon: GraduationCap },
  { title: 'Healthcare & Clinics', icon: Stethoscope },
  { title: 'Real Estate', icon: Home },
  { title: 'Manufacturing & Distribution', icon: Factory },
  { title: 'Professional Services', icon: Briefcase },
  { title: 'Startups & Entrepreneurs', icon: Rocket },
  { title: 'Local Businesses', icon: Building2 },
];

export const REASONS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Customized Solutions',
    description: 'Built around your actual business needs, not a generic template.',
    icon: Lightbulb,
  },
  {
    title: 'Modern Technology',
    description: 'Contemporary tools and development practices for reliable software.',
    icon: Cog,
  },
  {
    title: 'Transparent Communication',
    description: 'Clear discussions, honest timelines and regular project updates.',
    icon: Handshake,
  },
  {
    title: 'Business-Focused Approach',
    description: 'Every feature is planned to solve a real problem for your team.',
    icon: BadgeCheck,
  },
  {
    title: 'Scalable Development',
    description: 'Designed with future growth in mind, so your software can keep up.',
    icon: Network,
  },
  {
    title: 'Dedicated Support',
    description: 'Assistance continues well beyond the initial launch.',
    icon: Headset,
  },
];

export const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What types of software solutions does Raksh Tech develop?',
    answer:
      'We develop custom software, business websites, web applications, mobile apps, CRM and ERP systems, business automation tools and AI-powered features.',
  },
  {
    question: 'Can you develop custom software for my business?',
    answer:
      'Yes. We start by understanding your processes and goals, then design software around them. Share your requirements with us and we will suggest the right approach.',
  },
  {
    question: 'Do you develop business websites and mobile applications?',
    answer:
      'Yes. We build business and e-commerce websites, landing pages, and Android and iOS mobile applications.',
  },
  {
    question: 'Can you automate my existing business processes?',
    answer:
      'In many cases, yes. We review your current workflow to find repetitive tasks and suggest the automation that fits your team and budget.',
  },
  {
    question: 'How do I discuss my software requirements?',
    answer:
      'Use the contact form, send us a message on WhatsApp, or call us directly. We will arrange a conversation to understand your needs.',
  },
  {
    question: 'Do you provide maintenance and technical support?',
    answer:
      'Yes. We offer bug fixing, performance improvements and ongoing technical support for software we build and, where possible, for existing systems.',
  },
  {
    question: 'How much does custom software development cost?',
    answer:
      'Cost depends on the scope, features and technology involved. We do not quote prices online. Contact us with your requirements and we will discuss a suitable plan with you.',
  },
  {
    question: 'Do you work with small businesses and startups?',
    answer:
      'Absolutely. We work with local businesses, startups, entrepreneurs, coaching institutes and established companies alike.',
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  'Custom Software Development',
  'Website Development',
  'Web Application Development',
  'Mobile Application Development',
  'CRM & ERP Solutions',
  'Business Automation',
  'AI-Powered Solutions',
  'Software Maintenance & Support',
  'Not sure yet / General inquiry',
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Our Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const;
