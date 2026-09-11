import { ArrowUpRight, Palette, Share2, PenTool, Sparkles, Globe, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { Reveal } from '@/components/Reveal';

interface Service {
  icon: LucideIcon;
  title: string;
  copy: string;
}

const SERVICES: Service[] = [
  {
    icon: Palette,
    title: 'Brand Identity',
    copy: 'Logo design, brand refreshes, colour systems and visual identities designed to make businesses instantly recognisable.',
  },
  {
    icon: Share2,
    title: 'Social Media Content',
    copy: 'Professional branded content designed to help businesses look consistent, credible and engaging online.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    copy: 'Marketing graphics, promotional material, business cards, digital assets and campaign creative.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Content',
    copy: 'Modern AI-assisted creative workflows that help produce high-quality content faster and more efficiently.',
  },
  {
    icon: Globe,
    title: 'Website Design',
    copy: 'Modern websites and landing pages designed to give businesses a professional and effective online presence.',
  },
  {
    icon: ClipboardCheck,
    title: 'Business & Social Audits',
    copy: 'Practical reviews that identify opportunities to improve branding, content, presentation and digital presence.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-vexis-black-secondary py-24 lg:py-32">
      <div className="absolute inset-0 vexis-grid opacity-30" />
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 green-glow opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionLabel>02 / What We Do</SectionLabel>
          <h2 className="text-h2 text-white">
            Creative Services
            <br />
            <span className="text-vexis-text-secondary">Built for Modern Business.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 80}>
                <article className="card-hover group relative h-full overflow-hidden rounded-xl border border-vexis-border bg-vexis-card p-7">
                  {/* Green corner accent */}
                  <div className="absolute right-0 top-0 h-16 w-16 green-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 inline-flex items-center justify-center rounded-lg border border-vexis-border bg-vexis-black-secondary p-3">
                      <Icon size={22} className="text-vexis-green" />
                    </div>

                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-vexis-text-secondary">
                      {service.copy}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-vexis-text-secondary transition-colors group-hover:text-vexis-green">
                      <span>View Service</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
