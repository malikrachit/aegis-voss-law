import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AttorneyCard({ person, index = 0 }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035] shadow-premium"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.62, delay: index * 0.045 }}
    >
      <div className="relative h-80 overflow-hidden bg-black/30">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/32 to-transparent" />
        <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-gold backdrop-blur">
          <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">{person.level}</p>
        <h3 className="mt-3 font-serif text-3xl leading-tight">{person.name}</h3>
        <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.24em] text-ivory/55">{person.role}</p>
        <p className="mt-2 text-sm text-gold/80">{person.focus}</p>
        <p className="mt-5 leading-7 text-ivory/64">{person.bio}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {person.credentials.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-ivory/62">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
