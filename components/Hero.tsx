import { ArrowRight, Mountain, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const stats = [
  { icon: Mountain, label: 'Max Altitude', value: '8,849', unit: 'm' },
  { icon: TrendingUp, label: 'Success Rate', value: '98.7', unit: '%' },
  { icon: Users, label: 'Expert Guides', value: '42', unit: '' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/13567740/pexels-photo-13567740.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Climber on a mountain summit above the clouds"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 border border-ember-500/40 bg-ember-500/10 px-3 py-1.5 text-xs font-medium tracking-wide text-ember-300 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember-400" />
              2026 Season Now Open
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink-50 sm:text-6xl lg:text-7xl text-balance">
            Conquer the World's
            <br />
            <span className="text-ember-500">Highest Summits</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300 text-balance">
            Join elite IFMGA-certified guides on professionally led expeditions to the planet's
            most extraordinary peaks. Safety, sustainability, and summit success — guaranteed.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#treks"
              className="group inline-flex items-center justify-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-ink-950 transition-all hover:bg-ember-400 hover:shadow-xl hover:shadow-ember-500/30"
            >
              Explore Treks
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#newsletter"
              className="group inline-flex items-center justify-center gap-2 border border-ink-600 bg-ink-900/50 px-7 py-4 text-sm font-semibold text-ink-100 backdrop-blur-sm transition-all hover:border-ink-400 hover:bg-ink-800/70"
            >
              Plan Custom Trip
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Stats overlay */}
        <div className="mt-16 grid grid-cols-1 gap-px border border-ink-800 bg-ink-800 sm:grid-cols-3 lg:max-w-2xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col gap-2 bg-ink-950/80 p-6 backdrop-blur-md transition-colors hover:bg-ink-900/80"
            >
              <div className="flex items-center gap-2 text-ink-400">
                <stat.icon className="h-4 w-4 text-ember-500" />
                <span className="text-xs font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-ink-50">{stat.value}</span>
                <span className="text-lg text-ink-400">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-ink-600 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-ink-400" />
        </div>
      </div>
    </section>
  );
}
