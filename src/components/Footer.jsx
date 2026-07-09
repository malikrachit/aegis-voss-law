import { Link } from "react-router-dom";
import { ArrowUpRight, Scale } from "lucide-react";
import { firm, navLinks, quickServices } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(199,164,91,.14),transparent_28%),radial-gradient(circle_at_86%_0%,rgba(125,29,36,.16),transparent_28%)]" />
      <div className="relative mx-auto max-w-[1420px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.7fr_.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-gold/10">
                <Scale className="text-gold" />
              </span>
              <div>
                <p className="font-serif text-3xl">{firm.name}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
                  {firm.descriptor}
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/64">
              High-stakes counsel for litigation, arbitration, investigations, regulatory risk,
              corporate disputes, reputation protection and strategic resolution.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Navigation</h3>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <Link className="text-ivory/62 transition hover:text-gold" key={link.href} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="mt-5 space-y-3 text-ivory/62">
              <p>{firm.address}</p>
              <a href={`mailto:${firm.email}`} className="block transition hover:text-gold">{firm.email}</a>
              <a href={`tel:${firm.phone.replaceAll(" ", "")}`} className="block transition hover:text-gold">{firm.phone}</a>
              <Link to="/contact" className="inline-flex items-center gap-2 text-gold">
                Start confidential review <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Core Services</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {quickServices.slice(0, 10).map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-ivory/55">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-smoke md:flex-row md:items-center md:justify-between">
          <p>© 2026 {firm.name}. All rights reserved.</p>
          <p>Privacy · Terms · Attorney Advertising</p>
        </div>
      </div>
    </footer>
  );
}
