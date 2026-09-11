import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { Reveal } from '@/components/Reveal';

interface Project {
  client: string;
  title: string;
  category: string;
  variant: 'large' | 'medium' | 'small';
  accent: string;
  images?: string[];
}

const PROJECTS: Project[] = [
  {
    client: 'Northwind Coffee',
    title: 'Full Brand Identity System',
    category: 'Brand Identity',
    variant: 'large',
    accent: 'from-emerald-500/20 to-transparent',
    images: [
      '/portfolio/northwind-coffee.jpg',
    ],
  },
  {
    client: 'Cliffs Ground Maintenance',
    title: 'Logo Design & Refresh',
    category: 'Logo Design',
    variant: 'medium',
    accent: 'from-teal-500/20 to-transparent',
    images: [
      '/portfolio/cliffs-ground-maintenance.jpg',
    ],
  },
  {
    client: 'Life Sport Fitness',
    title: 'Social Media Campaign Refresh',
    category: 'Social Media',
    variant: 'medium',
    accent: 'from-green-500/20 to-transparent',
    images: [
      '/portfolio/life-sport-fitness-1.jpg',
      '/portfolio/life-sport-fitness-2.jpg',
    ],
  },
  {
    client: 'Veridian Goods',
    title: 'E-Commerce Website Design',
    category: 'Website Design',
    variant: 'small',
    accent: 'from-emerald-400/15 to-transparent',
    images: [
      '/portfolio/veridian-goods-1.jpg',
      '/portfolio/veridian-goods-2.jpg',
      '/portfolio/veridian-goods-3.jpg',
      '/portfolio/veridian-goods-4.jpg',
      '/portfolio/veridian-goods-5.jpg',
    ],
  },
  {
    client: 'Charlotte Emma Hair',
    title: 'Social Media Campaign Refresh',
    category: 'Social Media',
    variant: 'small',
    accent: 'from-teal-400/15 to-transparent',
    images: [
    '/portfolio/charlotte-emma-hair-1.jpg',
    '/portfolio/charlotte-emma-hair-2.jpg',
    ],
  },
];

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);

  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || paused) return;

    const interval = window.setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [hasMultipleImages, images.length, paused]);

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((current) => (current + 1) % images.length);
  };

  return (
    <article
      className={`card-hover group relative cursor-pointer overflow-hidden rounded-2xl border border-vexis-border bg-vexis-card ${
        className ?? ''
      }`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Project visual */}
      <div className="relative aspect-[16/10] overflow-hidden bg-vexis-black-secondary">
        {hasImages ? (
          <>
            <img
              src={images[currentImage]}
              alt={`${project.client} - ${project.title} - image ${
                currentImage + 1
              }`}
              className="h-full w-full object-contain bg-black transition-opacity duration-500"
            />

            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10`}
            />

            {hasMultipleImages && (
              <>
                {/* Previous */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-vexis-green hover:text-vexis-green group-hover:opacity-100"
                  aria-label={`Previous image for ${project.client}`}
                >
                  <ArrowLeft size={17} />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-vexis-green hover:text-vexis-green group-hover:opacity-100"
                  aria-label={`Next image for ${project.client}`}
                >
                  <ArrowRight size={17} />
                </button>

                {/* Slide dots */}
                <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage(index);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? 'w-6 bg-vexis-green'
                          : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Show image ${index + 1} for ${project.client}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {/* Placeholder */}
            <div className="absolute inset-0 vexis-grid-fine" />

            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
            />

            <div className="absolute bottom-0 left-0 right-0 h-24 green-glow opacity-30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                className="opacity-30 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
              >
                <path
                  d="M30 30 L60 60 L30 90"
                  stroke="#00D26A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M60 30 L90 60 L60 90"
                  stroke="#00D26A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.5"
                />
              </svg>
            </div>
          </>
        )}

        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 bg-vexis-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Hover arrow */}
        <div className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-vexis-green/50 bg-vexis-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} className="text-vexis-green" />
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-vexis-green">
          {project.category}
        </span>

        <h3 className="mt-2 text-lg font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-vexis-text-secondary">
          {project.client}
        </p>
      </div>
    </article>
  );
}

export function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-vexis-black-secondary py-24 lg:py-32"
    >
      <div className="absolute inset-0 vexis-grid opacity-30" />

      <div className="absolute left-0 top-1/3 h-[300px] w-[400px] green-glow opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionLabel>04 / Selected Work</SectionLabel>

          <h2 className="text-h2 text-white">
            Work That
            <br />

            <span className="text-vexis-text-secondary">
              Speaks for Itself.
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal>
            <ProjectCard project={PROJECTS[0]} />
          </Reveal>

          <Reveal delay={100}>
            <ProjectCard project={PROJECTS[1]} />
          </Reveal>

          <Reveal delay={150}>
            <ProjectCard project={PROJECTS[2]} />
          </Reveal>

          <Reveal delay={200}>
            <ProjectCard project={PROJECTS[3]} />
          </Reveal>

          <Reveal delay={250}>
            <ProjectCard project={PROJECTS[4]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}