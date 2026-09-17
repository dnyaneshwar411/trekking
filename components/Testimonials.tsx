import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/treks';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-ember-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-ember-500">
            Reviews & Social Proof
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">
            Trusted by 2,500+ Climbers
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-ember-400 text-ember-400" />
              ))}
            </div>
            <span className="text-sm text-ink-300">
              <span className="font-semibold text-ink-100">4.9</span> average from 1,200+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="group relative flex flex-col border border-ink-800 bg-ink-950 p-6 transition-all duration-300 hover:border-ink-600 hover:bg-ink-900"
            >
              <Quote className="h-8 w-8 text-ink-800 transition-colors group-hover:text-ember-500/30" />

              <div className="mt-3 flex">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-ember-400 text-ember-400" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-300">"{t.quote}"</p>

              <div className="mt-6 flex items-center gap-3 border-t border-ink-800 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover border-2 border-ink-700"
                />
                <div>
                  <div className="text-sm font-semibold text-ink-100">{t.name}</div>
                  <div className="text-xs text-ink-500">
                    {t.location} · {t.trek}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Logos / trust strip */}
        <div className="mt-16 border-t border-ink-800 pt-12">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-500">
            Certified & Partnered With
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {['IFMGA', 'UIAGM', 'Leave No Trace', 'IAMF', 'Adventure Travel'].map((logo) => (
              <span
                key={logo}
                className="font-display text-lg font-bold text-ink-600 transition-colors hover:text-ink-400"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
