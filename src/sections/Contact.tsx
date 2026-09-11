import {
  Mail,
  Facebook,
  MessageCircle,
  Send,
  CheckCircle2,
} from 'lucide-react';

import { useForm, ValidationError } from '@formspree/react';

import { SectionLabel } from '@/components/SectionLabel';
import { Reveal } from '@/components/Reveal';

const HELP_OPTIONS = [
  'Brand Identity',
  'Social Media Content',
  'Graphic Design',
  'AI-Powered Content',
  'Website Design',
  'Business & Social Audit',
  'Other',
];

const SOCIALS = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:info@vexiscreative.co.uk',
    value: 'info@vexiscreative.co.uk',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590384431701',
    value: 'Follow us on Facebook',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/447867394495',
    value: 'Message us on WhatsApp',
  },
];

export function Contact() {
  const [state, handleSubmit] = useForm('mwlkzzor');

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-vexis-black-secondary py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 vexis-grid opacity-30" />

      <div className="absolute right-0 top-0 h-[300px] w-[400px] green-glow opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionLabel>06 / Contact</SectionLabel>

          <h2 className="text-h2 text-white">
            Let's Build
            <br />

            <span className="text-vexis-text-secondary">
              Something Better.
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Contact form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col gap-5"
            >
              {/* Name / Business */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Your name"
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="form-label">
                    Business
                  </label>

                  <input
                    id="business"
                    name="business"
                    type="text"
                    className="form-input"
                    placeholder="Your business"
                  />

                  <ValidationError
                    prefix="Business"
                    field="business"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>
              </div>

              {/* Email / Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="you@example.com"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="Optional"
                  />

                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="help" className="form-label">
                  What do you need help with?
                </label>

                <select
                  id="help"
                  name="help"
                  required
                  defaultValue=""
                  className="form-input"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {HELP_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <ValidationError
                  prefix="Service"
                  field="help"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="form-label">
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="form-input resize-none"
                  placeholder="What are you working on?"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary self-start disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? (
                  <>
                    <Send size={16} className="animate-pulse" />
                    Sending...
                  </>
                ) : state.succeeded ? (
                  <>
                    <CheckCircle2 size={18} />
                    Enquiry Sent
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send size={16} />
                  </>
                )}
              </button>

              {/* Success message */}
              {state.succeeded && (
                <div className="flex items-center gap-2 text-sm text-vexis-green">
                  <CheckCircle2 size={17} />

                  <span>
                    Thank you — your enquiry has been sent successfully.
                  </span>
                </div>
              )}
            </form>
          </Reveal>

          {/* Contact information */}
          <Reveal delay={200} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                const isExternal =
                  social.label === 'Facebook' ||
                  social.label === 'WhatsApp';

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="card-hover group flex items-center gap-4 rounded-xl border border-vexis-border bg-vexis-card p-5"
                  >
                    <div className="inline-flex items-center justify-center rounded-lg border border-vexis-border bg-vexis-black-secondary p-3">
                      <Icon size={20} className="text-vexis-green" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-vexis-text-secondary">
                        {social.label}
                      </span>

                      <span className="text-sm font-medium text-white transition-colors group-hover:text-vexis-green">
                        {social.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}