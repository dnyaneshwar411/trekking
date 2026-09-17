import { Mountain, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Expeditions: ['Everest Base Camp', 'Annapurna Circuit', 'Kilimanjaro', 'Patagonia W Trek', 'Custom Trips'],
  Company: ['About Us', 'Our Guides', 'Sustainability', 'Careers', 'Press Kit'],
  Resources: ['Trek Blog', 'Packing Guides', 'Training Plans', 'FAQ', 'Trail Conditions'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Liability Waiver'],
};

const socials = [
  { icon: Mountain, label: 'Instagram', href: '#' },
  { icon: Mountain, label: 'Twitter', href: '#' },
  { icon: Mountain, label: 'Facebook', href: '#' },
  { icon: Mountain, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center bg-ember-500 text-ink-950">
                <Mountain className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-ink-50">
                Apex<span className="text-ember-500">Trails</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Premier adventure trekking and expeditions. Professionally guided journeys to the
              world's most extraordinary peaks since 2009.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-ink-800 text-ink-400 transition-all hover:border-ember-500/50 hover:bg-ember-500/10 hover:text-ember-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center text-sm text-ink-400 transition-colors hover:text-ink-100"
                    >
                      {link}
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © 2026 ApexTrails. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-moss-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
