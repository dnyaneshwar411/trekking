import { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { treks, difficulties, seasons, regions } from '@/data/treks';
import type { Difficulty, Season, Region } from '@/data/treks';
import TrekCard from './TrekCard';

type DifficultyFilter = Difficulty | 'All';
type SeasonFilter = Season | 'All';
type RegionFilter = Region | 'All';

export default function TrekFinder() {
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('All');
  const [season, setSeason] = useState<SeasonFilter>('All');
  const [region, setRegion] = useState<RegionFilter>('All');

  const filtered = useMemo(() => {
    return treks.filter((t) => {
      if (difficulty !== 'All' && t.difficulty !== difficulty) return false;
      if (season !== 'All' && !t.season.includes(season)) return false;
      if (region !== 'All' && t.region !== region) return false;
      return true;
    });
  }, [difficulty, season, region]);

  const activeCount = (difficulty !== 'All' ? 1 : 0) + (season !== 'All' ? 1 : 0) + (region !== 'All' ? 1 : 0);

  const reset = () => {
    setDifficulty('All');
    setSeason('All');
    setRegion('All');
  };

  return (
    <section id="finder" className="bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-ember-500">
              <SlidersHorizontal className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Trek Finder</span>
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">
              Find Your Next Expedition
            </h2>
            <p className="mt-3 max-w-xl text-ink-400">
              Filter by difficulty, season, or region to discover the trek that matches your
              ambition and schedule.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mb-10 border border-ink-800 bg-ink-950 p-4 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            {/* Difficulty */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-wider text-ink-500">
                Difficulty
              </label>
              <div className="flex flex-wrap gap-2">
                {(['All', ...difficulties] as DifficultyFilter[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`px-3 py-1.5 text-xs font-medium transition-all ${
                      difficulty === d
                        ? 'bg-ember-500 text-ink-950'
                        : 'border border-ink-700 text-ink-300 hover:border-ink-500 hover:text-ink-100'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Season */}
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-wider text-ink-500">
                Season
              </label>
              <div className="flex flex-wrap gap-2">
                {(['All', ...seasons] as SeasonFilter[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeason(s)}
                    className={`px-3 py-1.5 text-xs font-medium transition-all ${
                      season === s
                        ? 'bg-ember-500 text-ink-950'
                        : 'border border-ink-700 text-ink-300 hover:border-ink-500 hover:text-ink-100'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Region */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-wider text-ink-500">
                Region
              </label>
              <div className="relative">
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value as RegionFilter)}
                  className="appearance-none border border-ink-700 bg-ink-900 px-4 py-2 pr-10 text-sm text-ink-100 transition-colors hover:border-ink-500 focus:border-ember-500 focus:outline-none"
                >
                  <option value="All">All Regions</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
              </div>
            </div>
          </div>

          {/* Results bar */}
          <div className="mt-4 flex items-center justify-between border-t border-ink-800 pt-4">
            <span className="text-sm text-ink-400">
              <span className="font-semibold text-ink-100">{filtered.length}</span> expedition{filtered.length !== 1 ? 's' : ''} found
              {activeCount > 0 && (
                <button
                  onClick={reset}
                  className="ml-3 text-ember-400 transition-colors hover:text-ember-300"
                >
                  Clear filters ({activeCount})
                </button>
              )}
            </span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((trek: any) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center border border-ink-800 bg-ink-950 py-20 text-center">
            <p className="text-lg font-medium text-ink-200">No expeditions match your filters.</p>
            <p className="mt-2 text-sm text-ink-500">Try adjusting difficulty, season, or region.</p>
            <button
              onClick={reset}
              className="mt-6 bg-ember-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-ember-400"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}