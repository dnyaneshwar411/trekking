import { useState } from 'react';
import { Mail, Check, MapPin, Download } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1105654/pexels-photo-1105654.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mountain peak at sunrise"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 border border-ember-500/40 bg-ember-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-ember-300">
              <Download className="h-3.5 w-3.5" />
              Free Packing Checklist
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl text-balance">
              Get First Access to Seasonal Expedition Drops
            </h2>

            <p className="mt-4 max-w-xl text-lg text-ink-300 text-balance">
              Join our adventurer list for early-bird pricing on new expeditions, expert trek
              guides, and a free high-altitude packing checklist.
            </p>
          </div>

          {/* Form */}
          <div className="mt-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 border border-moss-500/30 bg-moss-500/10 p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-moss-500/20">
                  <Check className="h-7 w-7 text-moss-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-50">You're In!</h3>
                  <p className="mt-1 text-sm text-ink-300">
                    Check your inbox for the packing checklist and upcoming expedition dates.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full border border-ink-700 bg-ink-900/80 py-4 pl-12 pr-4 text-sm text-ink-100 placeholder-ink-500 backdrop-blur-sm transition-colors focus:border-ember-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-ember-500 px-8 py-4 text-sm font-semibold text-ink-950 transition-all hover:bg-ember-400 hover:shadow-xl hover:shadow-ember-500/30"
                >
                  Get the Checklist
                </button>
              </form>
            )}

            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-500">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-moss-500" /> No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-moss-500" /> Unsubscribe anytime
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-ember-500" /> Expeditions on 5 continents
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
