import PageHero from "../components/PageHero.jsx";
import CaseCard from "../components/CaseCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { cases, images } from "../data/siteData.js";

export default function Cases() {
  return (
    <>
      <PageHero
        eyebrow="Representative Matters"
        title="Strategic work across litigation, arbitration and risk response."
        text="Selected matters showing urgent relief, investigations, regulatory defence, commercial recovery and reputation-sensitive counsel."
        image={images.library}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-2">
            {cases.map((item, index) => (
              <CaseCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-parchment text-ink">
        <div className="container">
          <SectionHeader
            eyebrow="Matter Discipline"
            title="Clear case strategy without compromising confidentiality."
            text="A well-managed matter protects privileged facts while making risk, strategy and outcome visible to the client."
            dark={false}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {["Risk", "Strategy", "Execution", "Result"].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="h-full rounded-[1.8rem] border border-black/10 bg-white p-7 shadow-soft">
                  <p className="font-serif text-5xl text-blood">0{index + 1}</p>
                  <h3 className="mt-7 font-serif text-3xl">{item}</h3>
                  <p className="mt-4 leading-7 text-black/64">
                    Each matter is assessed through a disciplined lens so legal action remains commercially aligned.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
