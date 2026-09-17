import { useEffect, useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

const navLinks = [
  { label: 'Destinations', href: '#treks' },
  { label: 'Expeditions', href: '#finder' },
  { label: 'About', href: '#features' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#newsletter' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-xl border-b border-ink-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center bg-ember-500 text-ink-950 transition-transform group-hover:scale-110">
            <Mountain className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-ink-50">
            Apex<span className="text-ember-500">Trails</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-ink-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#treks"
            className="bg-ember-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:bg-ember-400 hover:shadow-lg hover:shadow-ember-500/30"
          >
            Book Expedition
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-ink-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-l-2 border-transparent px-4 py-3 text-sm font-medium text-ink-300 transition-colors hover:border-ember-500 hover:text-ink-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#treks"
              onClick={() => setOpen(false)}
              className="mt-2 bg-ember-500 px-4 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Book Expedition
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
