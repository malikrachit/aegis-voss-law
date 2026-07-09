import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { images, insights } from "../data/siteData.js";
import { ArrowUpRight, Newspaper } from "lucide-react";

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical legal thinking for high-stakes decisions."
        text="Briefings on litigation strategy, governance disputes, investigations, arbitration, reputation protection and regulatory response."
        image={images.city}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Briefings"
            title="Clear analysis for complex legal moments."
            text="Focused notes for businesses, founders, boards and decision-makers managing legal risk."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group flex min-h-[22rem] flex-col rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1.5 hover:border-gold/45 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-[0.27em] text-gold">
                      {item.category}
                    </span>
                    <ArrowUpRight className="text-ivory/32 transition group-hover:rotate-45 group-hover:text-gold" />
                  </div>
                  <Newspaper className="mt-9 text-gold" />
                  <h3 className="mt-7 font-serif text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-5 flex-1 leading-7 text-ivory/62">{item.excerpt}</p>
                  <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-ivory/45">{item.read}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
