import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PracticeCard({ item, index = 0 }) {
  const Icon = item.icon;
  return (
    <motion.article
      className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-6 shadow-premium backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-white/[0.06] sm:p-7"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.62, delay: index * 0.045 }}
    >
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gold/8 blur-3xl transition group-hover:bg-gold/14" />
      <div className="relative flex items-start justify-between gap-6">
        <span className="grid h-13 w-13 place-items-center rounded-2xl border border-gold/25 bg-gold/10 p-3 text-gold">
          <Icon />
        </span>
        <ArrowUpRight className="text-ivory/25 transition group-hover:rotate-45 group-hover:text-gold" />
      </div>
      <div className="relative mt-8 flex flex-1 flex-col">
        <p className="text-xs font-extrabold uppercase tracking-[0.27em] text-gold/82">
          {item.tagline}
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-ivory">{item.title}</h3>
        <p className="mt-4 leading-7 text-ivory/60">{item.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.points.map((point) => (
            <span key={point} className="rounded-full border border-white/10 bg-black/18 px-3 py-2 text-xs text-ivory/58">
              {point}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
