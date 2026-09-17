import { ArrowRight } from 'lucide-react';
import { treks } from '@/data/treks';
import TrekCard from './TrekCard';

export default function FeaturedTreks() {
  const featured = treks.slice(0, 4);

  return (
    <section id="treks" className="bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ember-500">
              Featured Treks
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">
              Popular Expeditions
            </h2>
            <p className="mt-3 max-w-xl text-ink-400">
              Hand-picked journeys to the most iconic destinations on Earth, led by our most
              experienced certified guides.
            </p>
          </div>
          <a
            href="#finder"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ember-400 transition-colors hover:text-ember-300"
          >
            View all treks
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      </div>
    </section>
  );
}
