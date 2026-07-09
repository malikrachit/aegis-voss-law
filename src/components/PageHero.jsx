import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(199,164,91,.18),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(125,29,36,.18),transparent_28%)]" />
      {image && (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-18 grayscale" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/88 to-ink" />
      <div className="absolute inset-0 legal-grid opacity-20" />
      <div className="relative mx-auto max-w-[1420px] px-5 pb-20 pt-14 sm:px-6 lg:px-8">
        <motion.p
          className="text-xs font-extrabold uppercase tracking-[0.38em] text-gold"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-6 max-w-5xl font-serif text-5xl leading-[1] tracking-[-0.055em] text-ivory md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            className="mt-7 max-w-3xl text-lg leading-8 text-ivory/66 md:text-xl md:leading-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
