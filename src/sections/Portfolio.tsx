import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

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

const BASE_URL = import.meta.env.BASE_URL;

const PROJECTS: Project[] = [
  {
    client: 'Northwind Coffee',
    title: 'Full Brand Identity System',
    category: 'Brand Identity',
    variant: 'medium',
    accent: 'green',
    images: [
      `${BASE_URL}portfolio/northwind-coffee.jpg`,
    ],
  },
  {
    client: 'Cliffs Ground Maintenance',
    title: 'Logo Design & Refresh',
    category: 'Logo Design',
    variant: 'medium',
    accent: 'green',
    images: [
      `${BASE_URL}portfolio/cliffs-ground-maintenance.jpg`,
    ],
  },
  {
    client: 'Life Sport Fitness',
    title: 'Social Media Campaign Refresh',
    category: 'Social Media',
    variant: 'medium',
    accent: 'green',
    images: [
      `${BASE_URL}portfolio/life-sport-fitness-1.jpg`,
      `${BASE_URL}portfolio/life-sport-fitness-2.jpg`,
    ],
  },
  {
    client: 'Veridian Goods',
    title: 'E-Commerce Website Design',
    category: 'Web Design',
    variant: 'medium',
    accent: 'green',
    images: [
      `${BASE_URL}portfolio/veridian-goods-1.jpg`,
      `${BASE_URL}portfolio/veridian-goods-2.jpg`,
      `${BASE_URL}portfolio/veridian-goods-3.jpg`,
      `${BASE_URL}portfolio/veridian-goods-4.jpg`,
      `${BASE_URL}portfolio/veridian-goods-5.jpg`
    ],
  },
  {
    client: 'Charlotte Emma Hair',
    title: 'Brand & Social Media Refresh',
    category: 'Branding',
    variant: 'medium',
    accent: 'green',
    images: [
      `${BASE_URL}portfolio/charlotte-emma-hair-1.jpg`,
      `${BASE_URL}portfolio/charlotte-emma-hair-2.jpg`,
    ],
  },
];

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const images = project.images ?? [];
  const hasMultipleImages = images.length > 1;

  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!hasMultipleImages || paused) return;

    const interval = window.setInterval(() => {
      setCurrentImage((previous) =>
        previous === images.length - 1 ? 0 : previous + 1
      );
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [hasMultipleImages, images.length, paused]);

  const previousImage = () => {
    setCurrentImage((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((previous) =>
      previous === images.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-vexis-border bg-vexis-card transition-all duration-300 hover:-translate-y-1 hover:border-vexis-green/40 hover:shadow-[0_15px_50px_rgba(0,210,106,0.08)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        {images.length > 0 ? (
          <img
            src={images[currentImage]}
            alt={`${project.client} - ${project.title} - image ${
              currentImage + 1
            }`}
            className="h-full w-full object-contain bg-black transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-vexis-text-secondary">
            Project image coming soon
          </div>
        )}

        {/* Subtle overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Project arrow */}
        <div className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full border border-vexis-green/40 bg-vexis-black/80 backdrop-blur-sm transition-all duration-300 group-hover:border-vexis-green group-hover:bg-vexis-green">
          <ArrowUpRight
            size={18}
            className="text-vexis-green transition-colors duration-300 group-hover:text-black"
          />
        </div>

        {/* Slider controls */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-vexis-green hover:text-vexis-green group-hover:opacity-100"
              aria-label={`Previous image for ${project.client}`}
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-vexis-green hover:text-vexis-green group-hover:opacity-100"
              aria-label={`Next image for ${project.client}`}
            >
              <ArrowRight size={18} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/60 px-3 py-2 backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? 'w-5 bg-vexis-green'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`View image ${index + 1} of ${project.client}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project information */}
      <div className="p-5 md:p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-vexis-green">
          {project.category}
        </span>

        <h3 className="mt-3 text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-vexis-text-secondary">
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
      {/* Background effects */}
      <div className="absolute inset-0 vexis-grid opacity-30" />

      <div className="absolute left-0 top-1/3 h-[350px] w-[350px] green-glow opacity-20" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] green-glow opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <Reveal>
          <SectionLabel>04 / Our Work</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-6 max-w-3xl">
            <h2 className="text-h2 text-white">
              Selected Work.
              <br />
              <span className="text-vexis-text-secondary">
                Built to make businesses stand out.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-vexis-text-secondary md:text-lg">
              A selection of branding, content and digital design projects
              created to help businesses look more professional, communicate
              more clearly and build a stronger presence.
            </p>
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={`${project.client}-${project.title}`}
              delay={100 + index * 80}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}