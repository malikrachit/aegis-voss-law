import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Scale, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { firm, navLinks } from "../data/siteData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-[0.22em] transition ${
      isActive ? "text-gold" : "text-ivory/64 hover:text-ivory"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/92 shadow-premium backdrop-blur-2xl"
          : "bg-gradient-to-b from-black/72 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1420px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/35 bg-gold/10">
            <span className="absolute inset-1 rounded-full border border-gold/10" />
            <Scale className="h-5 w-5 text-gold" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-2xl leading-none tracking-[-0.03em] text-ivory sm:text-[1.7rem]">
              {firm.name}
            </span>
            <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.25em] text-smoke sm:block">
              Strategic Counsel
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${firm.phone.replaceAll(" ", "")}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ivory/66 transition hover:border-gold/35 hover:text-gold"
          >
            24/7 Desk
          </a>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-5 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-ink transition hover:-translate-y-0.5 hover:bg-ivory"
          >
            Request Counsel
            <ArrowUpRight size={15} className="transition group-hover:rotate-45" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 xl:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] overflow-y-auto bg-ink/98 px-5 py-5 backdrop-blur-2xl xl:hidden"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24 }}
          >
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/35 bg-gold/10">
                  <Scale className="h-5 w-5 text-gold" />
                </span>
                <span className="font-serif text-2xl">{firm.name}</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-12 grid gap-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-serif text-4xl text-ivory"
                  >
                    {link.label}
                    <ArrowUpRight className="text-gold" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-ink"
            >
              Request Counsel
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
