import {
  BrainCircuit,
  Brush,
  MonitorSmartphone,
  Sparkles,
} from 'lucide-react';

import { SectionLabel } from '@/components/SectionLabel';
import { Reveal } from '@/components/Reveal';

const CREATIVE_SYSTEM = [
  {
    icon: Brush,
    title: 'Branding',
    text: 'Identity systems that make businesses look established, consistent and memorable.',
  },
  {
    icon: Sparkles,
    title: 'Content',
    text: 'Creative social and campaign content built to communicate clearly and attract attention.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web',
    text: 'Modern responsive websites designed around usability, trust and conversion.',
  },
  {
    icon: BrainCircuit,
    title: 'AI',
    text: 'AI-assisted creative workflows that help us move faster without compromising quality.',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-vexis-black py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 vexis-grid opacity-40" />

      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] green-glow opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section label */}
        <Reveal>
          <SectionLabel>01 / Who We Are</SectionLabel>
        </Reveal>

        {/* Main two-column layout */}
        <div className="mt-6 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}
          <Reveal delay={100}>
            <div>
              {/* Heading */}
              <h2 className="text-h2 text-white">
                Creative Ideas.
                <br />

                <span className="text-vexis-text-secondary">
                  Smarter Execution.
                </span>
              </h2>

              {/* Text */}
              <div className="mt-12 flex flex-col gap-5 text-base leading-relaxed text-vexis-text-secondary md:text-lg">
                <p>
                  VEXIS Creative is a Staffordshire-based creative marketing
                  agency helping small and growing businesses build stronger
                  brands and create better digital content.
                </p>

                <p>
                  We combine creativity, technology and modern AI tools to help
                  businesses look better, communicate more clearly and compete
                  more effectively online.
                </p>

                <p>
                  Whether you're creating a brand from scratch or improving an
                  existing business, VEXIS provides practical creative solutions
                  without traditional agency complexity.
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE - VEXIS CREATIVE SYSTEM */}
          <Reveal delay={200} className="self-start">
            <div className="relative overflow-hidden rounded-2xl border border-vexis-border bg-vexis-black-secondary p-6 md:p-8">

              {/* Background grid */}
              <div className="absolute inset-0 vexis-grid-fine opacity-40" />

              {/* Background glow */}
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full green-glow opacity-30" />

              <div className="relative z-10">

                {/* Panel heading */}
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-vexis-green">
                    The VEXIS Creative System
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    One creative workflow.
                    <br />

                    <span className="text-vexis-text-secondary">
                      Four connected disciplines.
                    </span>
                  </h3>
                </div>

                {/* Creative system cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {CREATIVE_SYSTEM.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group relative overflow-hidden rounded-xl border border-vexis-border bg-vexis-card/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-vexis-green/40 hover:shadow-[0_8px_30px_rgba(0,210,106,0.08)]"
                      >
                        {/* Number */}
                        <span className="absolute right-4 top-4 text-xs font-semibold text-vexis-text-secondary/40">
                          0{index + 1}
                        </span>

                        {/* Icon */}
                        <div className="mb-4 inline-flex items-center justify-center rounded-lg border border-vexis-border bg-vexis-black p-3">
                          <Icon
                            size={20}
                            className="text-vexis-green"
                          />
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-white">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-relaxed text-vexis-text-secondary">
                          {item.text}
                        </p>

                        {/* Accent line */}
                        <div className="mt-4 h-px w-full bg-gradient-to-r from-vexis-green/50 to-transparent" />
                      </div>
                    );
                  })}
                </div>

                {/* Result statement */}
                <div className="mt-6 rounded-xl border border-vexis-green/20 bg-vexis-green/5 px-5 py-4">
                  <p className="text-sm leading-relaxed text-vexis-text-secondary">
                    <span className="font-semibold text-white">
                      The result:
                    </span>{' '}
                    better branding, stronger content, smarter digital
                    experiences and a more efficient creative process.
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}