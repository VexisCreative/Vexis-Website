import { ArrowRight, ChevronDown } from 'lucide-react';
import { VexisEmblem } from '@/components/VexisLogo';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-vexis-black pt-24"
    >
      {/* Background grid */}
      <div className="absolute inset-0 vexis-grid" />

      {/* Atmospheric background glows */}
      <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 translate-x-1/4 green-glow" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] green-glow opacity-50" />

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-vexis-black" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left side */}
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-vexis-green/40 px-4 py-1.5">
            <span className="status-dot" />

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-vexis-green">
              UK • Creative Marketing Agency
            </span>
          </div>

          <h1 className="font-sans text-[clamp(2.25rem,6vw,4.75rem)] font-extrabold leading-[1.05] tracking-tight text-white">
            Creative Thinking.
            <br />

            Powered by{' '}
            <span className="text-vexis-green">
              AI.
            </span>

            <br />

            Built for Business.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-vexis-text-secondary md:text-lg">
            VEXIS Creative helps ambitious businesses stand out through intelligent branding,
            social media content, digital design and AI-powered creative solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();

                document
                  .querySelector('#services')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline"
            >
              View Our Services
            </a>
          </div>
        </div>

        {/* Right side - Pulsing logo */}
        <div className="hero-logo-stage lg:-translate-y-8">
          {/* Large ambient glow */}
          <div className="hero-logo-glow" />

          {/* Electrical glow */}
          <div className="hero-logo-energy" />

          {/* Fine background grid */}
          <div className="absolute inset-0 vexis-grid-fine opacity-40" />

          {/* Pulsing logo */}
          <div className="hero-logo-pulse flex w-full items-center justify-center">
            <VexisEmblem
              className="
                h-[480px] w-[480px]
                max-w-none
                object-contain
                md:h-[690px] md:w-[690px]
                lg:h-[840px] lg:w-[840px]
                drop-shadow-[0_0_55px_rgba(0,210,106,0.28)]
              "
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .querySelector('#about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-vexis-text-secondary transition-colors hover:text-vexis-green"
        aria-label="Scroll to next section"
      >
        <ChevronDown
          size={28}
          className="animate-bounce"
          style={{ animationDuration: '2s' }}
        />
      </button>
    </section>
  );
}