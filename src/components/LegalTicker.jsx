import { tickerItems } from "../data/siteData.js";

export default function LegalTicker() {
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-black py-4">
      <div className="flex w-[200%] animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-xs font-extrabold uppercase tracking-[0.36em] text-ivory/32"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
