import Reveal from "./Reveal.jsx";

export default function SectionHeader({ eyebrow, title, text, align = "left", dark = true, narrow = false }) {
  return (
    <Reveal className={`${narrow ? "max-w-3xl" : "max-w-4xl"} ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-4 text-xs font-extrabold uppercase tracking-[0.34em] ${dark ? "text-gold" : "text-blood"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl ${dark ? "text-ivory" : "text-ink"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? "text-ivory/63" : "text-black/62"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
