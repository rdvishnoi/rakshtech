import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, CheckCircle2, ChevronDown, MessageCircle, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT_SERVICE_OPTIONS } from '@/data/content';
import { EMPTY_INQUIRY, buildInquiryMessage, validateInquiry, type InquiryErrors, type InquiryValues } from '@/lib/inquiry';
import { supabase } from '@/lib/supabase';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FIELD_CLASS =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-primary-950 placeholder:text-slate-400 transition-colors duration-200 focus:border-secondary-500 focus:outline-none focus:ring-4 focus:ring-secondary-500/15';

function fieldClass(hasError: boolean) {
  return `${FIELD_CLASS} ${hasError ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300 hover:border-slate-400'}`;
}

interface FieldProps {
  id: keyof InquiryValues;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-primary-900">
        {label}
        {required && <span className="ml-0.5 text-rose-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-xs font-medium text-rose-600" role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<InquiryValues>(EMPTY_INQUIRY);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  const update = (field: keyof InquiryValues) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError('');
    const nextErrors = validateInquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    if (!supabase) {
      setStatus('error');
      setServerError('Our online form is not available right now. Please send your inquiry on WhatsApp instead.');
      return;
    }

    setStatus('submitting');
    const { error } = await supabase.from('contact_inquiries').insert({
      full_name: values.fullName.trim(),
      phone: values.phone.replace(/[\s()-]/g, ''),
      email: values.email.trim() || null,
      service: values.service,
      details: values.details.trim(),
    });

    if (error) {
      setStatus('error');
      setServerError('We could not send your inquiry just now. Please try again, or contact us on WhatsApp.');
      return;
    }

    setStatus('success');
    setValues(EMPTY_INQUIRY);
  };

  const isSubmitting = status === 'submitting';

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-5 rounded-3xl border border-emerald-200 bg-emerald-50/60 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 animate-type-line">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-2xl font-semibold text-primary-950">Thank you, your inquiry is received.</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Our team will review your requirements and get in touch with you soon.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-secondary-600 underline-offset-4 hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8" aria-label="Project inquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <input
            id="fullName"
            name="name"
            autoComplete="name"
            value={values.fullName}
            onChange={update('fullName')}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={fieldClass(Boolean(errors.fullName))}
          />
        </Field>
        <Field id="phone" label="Phone Number" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            placeholder="+91 98765 43210"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={fieldClass(Boolean(errors.phone))}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email Address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            placeholder="you@business.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass(Boolean(errors.email))}
          />
        </Field>
        <Field id="service" label="Service Required" required error={errors.service}>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={update('service')}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className={`${fieldClass(Boolean(errors.service))} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {CONTACT_SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          </div>
        </Field>
      </div>

      <Field id="details" label="Project Details" required error={errors.details}>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={values.details}
          onChange={update('details')}
          placeholder="Tell us about your business, what you need, and any deadlines you have in mind."
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? 'details-error' : undefined}
          className={`${fieldClass(Boolean(errors.details))} resize-y`}
        />
      </Field>

      {serverError && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
        <a
          href={buildWhatsAppUrl(buildInquiryMessage(values))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-300 hover:bg-emerald-50"
        >
          <MessageCircle className="h-4 w-4" />
          Prefer WhatsApp? Send it there
        </a>
      </div>
    </form>
  );
}
