import { SectionLabel } from '@/components/SectionLabel';

export function Privacy() {
  return (
    <main className="min-h-screen bg-vexis-black px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>Privacy Policy</SectionLabel>

        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-vexis-text-secondary">
          Last updated: 11 September 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-vexis-text-secondary">
          <section>
            <h2 className="text-xl font-bold text-white">Who we are</h2>
            <p className="mt-3">
              VEXIS Creative is a creative marketing and digital design business
              based in Staffordshire, United Kingdom.
            </p>
            <p className="mt-3">
              Email: info@vexiscreative.co.uk
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Information we collect</h2>
            <p className="mt-3">
              When you use our contact form or contact us directly, we may collect
              your name, business name, email address, phone number, the service
              you are interested in, and any information you provide about your
              project or enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">How we use your information</h2>
            <p className="mt-3">
              We use your information to respond to enquiries, discuss potential
              projects or services, prepare quotations and proposals, communicate
              with customers, provide requested services, and maintain appropriate
              business records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Contact forms and Formspree</h2>
            <p className="mt-3">
              Our website uses Formspree to process contact form submissions.
              Information submitted through the contact form may be processed by
              Formspree so that your enquiry can be delivered to VEXIS Creative.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Third-party services</h2>
            <p className="mt-3">
              Our website contains links to third-party services including
              Facebook and WhatsApp. If you choose to interact with these services,
              your information will also be processed according to their own
              privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Data retention</h2>
            <p className="mt-3">
              We keep personal information only for as long as reasonably
              necessary for the purpose for which it was collected, including
              handling enquiries, providing services, maintaining business records,
              and meeting legal or regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Your rights</h2>
            <p className="mt-3">
              Depending on the circumstances, you may have rights relating to your
              personal information, including access, correction, deletion,
              restriction, objection, and withdrawal of consent where applicable.
            </p>
            <p className="mt-3">
              To exercise these rights, contact info@vexiscreative.co.uk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Cookies and analytics</h2>
            <p className="mt-3">
              At present, VEXIS Creative does not use non-essential analytics or
              advertising cookies unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Security</h2>
            <p className="mt-3">
              We take reasonable steps to protect personal information from loss,
              misuse, unauthorised access, alteration or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Contact us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy or how VEXIS
              Creative handles personal information, contact:
            </p>
            <p className="mt-3">
              VEXIS Creative
              <br />
              Staffordshire, United Kingdom
              <br />
              info@vexiscreative.co.uk
            </p>
          </section>
        </div>

        <a
          href="/"
          className="mt-12 inline-flex text-sm font-semibold text-vexis-green hover:text-white"
        >
          ← Back to home
        </a>
      </div>
    </main>
  );
}