import { Award, SatelliteDish, Leaf, Backpack, HeartPulse } from 'lucide-react';
import { features } from '@/data/treks';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  SatelliteDish,
  Leaf,
  Backpack,
  HeartPulse,
};

export default function Features() {
  return (
    <section id="features" className="bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-ember-500">
            Why ApexTrails
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">
            Built for Serious Adventurers
          </h2>
          <p className="mt-4 text-lg text-ink-400">
            Every detail of your expedition is engineered for safety, sustainability, and
            summit success. No shortcuts, no compromises.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            const isLarge = feature.span.includes('col-span-2');
            return (
              <div
                key={feature.id}
                className={`group relative flex flex-col justify-between overflow-hidden border border-ink-800 bg-ink-900 p-6 transition-all duration-300 hover:border-ink-600 ${feature.span}`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ember-500/0 blur-3xl transition-all duration-500 group-hover:bg-ember-500/10" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border border-ink-700 bg-ink-800 transition-colors group-hover:border-ember-500/50 group-hover:bg-ember-500/10">
                    {Icon && <Icon className="h-6 w-6 text-ember-500" />}
                  </div>
                  <h3 className={`font-display font-bold text-ink-50 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                    {feature.title}
                  </h3>
                </div>

                <p className={`relative text-ink-400 ${isLarge ? 'mt-3 text-base leading-relaxed' : 'mt-2 text-sm leading-relaxed'}`}>
                  {feature.description}
                </p>

                {isLarge && feature.id === 'guides' && (
                  <div className="relative mt-6 flex items-center gap-4 border-t border-ink-800 pt-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-10 w-10 border-2 border-ink-900 bg-ink-700"
                          style={{
                            backgroundImage: `url(https://images.pexels.com/photos/${[3525907, 22776471, 3525908, 28214974][i - 1]}/pexels-photo-${[3525907, 22776471, 3525908, 28214974][i - 1]}.jpeg?auto=compress&cs=tinysrgb&w=100)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink-100">42 Certified Guides</div>
                      <div className="text-xs text-ink-500">Across 5 continents</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
