import { Search, PenTool, RefreshCw, PackageCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { Reveal } from '@/components/Reveal';

interface Stage {
  icon: LucideIcon;
  number: string;
  title: string;
  copy: string;
}

const STAGES: Stage[] = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    copy: 'Understand the business, audience, objectives and requirements.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Create',
    copy: 'Develop the concept, content and creative direction.',
  },
  {
    icon: RefreshCw,
    number: '03',
    title: 'Refine',
    copy: 'Review, improve and perfect the work.',
  },
  {
    icon: PackageCheck,
    number: '04',
    title: 'Deliver',
    copy: 'Provide polished assets ready for real-world use.',
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-vexis-black py-24 lg:py-32">
      <div className="absolute inset-0 vexis-grid opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 green-glow opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionLabel>05 / Process</SectionLabel>
          <h2 className="text-h2 text-white">
            From Idea
            <br />
            <span className="text-vexis-text-secondary">to Impact.</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-[1px] bg-gradient-to-r from-vexis-green/40 via-vexis-green/20 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.number} delay={i * 100}>
                  <div className="relative flex flex-col items-start">
                    {/* Node dot */}
                    <div className="relative z-10 mb-5 flex h-[84px] w-[84px] items-center justify-center rounded-2xl border border-vexis-border bg-vexis-black-secondary">
                      <div className="absolute inset-0 rounded-2xl green-glow opacity-0 transition-opacity duration-300 hover:opacity-100" />
                      <Icon size={28} className="text-vexis-green" />
                    </div>

                    <span className="text-sm font-bold text-vexis-green/70">{stage.number}</span>
                    <h3 className="mt-1 text-xl font-bold text-white">{stage.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-vexis-text-secondary">
                      {stage.copy}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
