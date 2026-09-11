import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-vexis-black py-24 lg:py-36">
      <div className="absolute inset-0 vexis-grid opacity-30" />

      {/* Stronger green glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 green-glow-strong animate-glow-breathe" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 green-glow opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-white">
            Ready to Make
            <br />
            <span className="text-vexis-green">Your Brand Stand Out?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-vexis-text-secondary md:text-lg">
            Tell us what you're working on and let's see what VEXIS can create for your business.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
