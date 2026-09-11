import { Cpu, Heart, Zap, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { Reveal } from '@/components/Reveal';

interface Benefit {
  icon: LucideIcon;
  number: string;
  title: string;
  copy: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Cpu,
    number: '01',
    title: 'Modern Approach',
    copy: 'Creative workflows built around current technology, modern design and AI-assisted tools.',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Small Business Focused',
    copy: 'Professional creative work without large-agency pricing, jargon or unnecessary complexity.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Fast & Flexible',
    copy: 'Straightforward communication, practical workflows and responsive turnaround.',
  },
  {
    icon: Target,
    number: '04',
    title: 'Built Around Your Brand',
    copy: 'No one-size-fits-all identity. Creative work should feel specific to the business it represents.',
  },
];

export function WhyVexis() {
  return (
    <section id="why-vexis" className="relative overflow-hidden bg-vexis-black py-24 lg:py-32">
      <div className="absolute inset-0 vexis-grid opacity-30" />
      <div className="absolute right-1/4 bottom-0 h-[300px] w-[400px] green-glow opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionLabel>03 / Why VEXIS</SectionLabel>
          <h2 className="text-h2 text-white">
            Creative Without
            <br />
            <span className="text-vexis-text-secondary">the Agency Bloat.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.number} delay={i * 80}>
                <article className="card-hover group relative h-full overflow-hidden rounded-xl border border-vexis-border bg-vexis-black-secondary p-7">
                  {/* Oversized number background */}
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none font-sans text-[6rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-vexis-green/[0.06]">
                    {benefit.number}
                  </span>

                  <div className="relative z-10">
                    <div className="mb-5 inline-flex items-center justify-center rounded-lg border border-vexis-border bg-vexis-card p-3">
                      <Icon size={22} className="text-vexis-green" />
                    </div>

                    <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-vexis-text-secondary">
                      {benefit.copy}
                    </p>
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
