import { motion } from "framer-motion";

export default function CaseCard({ item, index = 0 }) {
  const Icon = item.icon;
  return (
    <motion.article
      className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 shadow-premium sm:p-7"
      initial={{ opacity: 0, scale: 0.98, y: 22 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.58, delay: index * 0.05 }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-ivory to-blood" />
      <div className="mb-7 flex items-center justify-between gap-5">
        <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-smoke">
          {item.category}
        </span>
        <Icon className="shrink-0 text-gold" />
      </div>
      <h3 className="font-serif text-3xl leading-tight">{item.title}</h3>
      <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
        {item.result}
      </p>
      <p className="mt-4 leading-7 text-ivory/62">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/[0.055] px-3 py-2 text-xs text-ivory/58">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
