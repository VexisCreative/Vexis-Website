import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { VexisLogo } from '@/components/VexisLogo';

const NAV_LINKS = [
  { label: 'Who We Are', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590384431701',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#',
  },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-vexis-border bg-vexis-black">
      {/* Background effects */}
      <div className="absolute inset-0 vexis-grid opacity-20" />

      <div className="absolute bottom-0 left-1/2 h-[200px] w-[600px] -translate-x-1/2 green-glow opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <VexisLogo className="h-10 w-auto md:h-12" />

            <p className="max-w-xs text-sm leading-relaxed text-vexis-text-secondary">
              Creative marketing, branding and AI-powered content for modern businesses.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-vexis-text-secondary">
              Navigation
            </h3>

            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-vexis-text-secondary transition-colors hover:text-vexis-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-vexis-text-secondary">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith('http');

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="card-hover inline-flex h-11 w-11 items-center justify-center rounded-lg border border-vexis-border bg-vexis-card"
                  >
                    <Icon
                      size={18}
                      className="text-vexis-text-secondary transition-colors hover:text-vexis-green"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-vexis-border pt-8 sm:flex-row">
          <p className="text-sm text-vexis-text-secondary">
            &copy; 2026 VEXIS Creative. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href={`${import.meta.env.BASE_URL}privacy`}
              className="text-sm text-vexis-text-secondary transition-colors hover:text-vexis-green"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}