import { Clock, Mountain, Star, Users, ArrowRight } from 'lucide-react';
import type { Trek } from '@/data/treks';
import { difficulties } from '@/data/treks';

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-moss-500/15 text-moss-400 border-moss-500/30',
  Intermediate: 'bg-ember-500/15 text-ember-400 border-ember-500/30',
  Advanced: 'bg-orange-600/15 text-orange-400 border-orange-600/30',
  Expert: 'bg-red-600/15 text-red-400 border-red-600/30',
};

export default function TrekCard({ trek }: { trek: Trek }) {
  return (
    <article className="group relative flex flex-col overflow-hidden border border-ink-800 bg-ink-900 transition-all duration-300 hover:border-ink-700 hover:shadow-2xl hover:shadow-black/40">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={trek.image}
          alt={trek.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

        {/* Difficulty badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`border px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ${difficultyColors[trek.difficulty]}`}
          >
            {trek.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-ink-950/80 px-2.5 py-1 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-ember-400 text-ember-400" />
          <span className="text-xs font-semibold text-ink-100">{trek.rating}</span>
          <span className="text-xs text-ink-500">({trek.reviews})</span>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4 text-sm font-medium text-ink-200">
          {trek.location}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-ink-50">{trek.name}</h3>

        <div className="mt-4 grid grid-cols-3 gap-3 border-y border-ink-800 py-4">
          <div className="flex flex-col gap-1">
            <Clock className="h-4 w-4 text-ink-500" />
            <span className="text-xs text-ink-500">Duration</span>
            <span className="text-sm font-semibold text-ink-100">{trek.duration}</span>
          </div>
          <div className="flex flex-col gap-1">
            <Mountain className="h-4 w-4 text-ink-500" />
            <span className="text-xs text-ink-500">Altitude</span>
            <span className="text-sm font-semibold text-ink-100">{trek.altitude}</span>
          </div>
          <div className="flex flex-col gap-1">
            <Users className="h-4 w-4 text-ink-500" />
            <span className="text-xs text-ink-500">Spots</span>
            <span className="text-sm font-semibold text-ink-100">{trek.spots} left</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-ink-500">From</span>
            <div className="font-display text-2xl font-bold text-ink-50">{trek.price}</div>
          </div>
          <button className="group/btn inline-flex items-center gap-2 bg-ember-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-ember-400 hover:shadow-lg hover:shadow-ember-500/30">
            Book Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}

export { difficultyColors, difficulties };
