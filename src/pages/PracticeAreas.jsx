import PageHero from "../components/PageHero.jsx";
import PracticeCard from "../components/PracticeCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { images, industries, practiceAreas, process, quickServices } from "../data/siteData.js";

export default function PracticeAreas() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Strategic counsel across the dispute lifecycle."
        text="Representation across litigation, arbitration, investigations, regulatory proceedings, corporate conflict and reputation-sensitive matters."
        image={images.gavel}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {practiceAreas.map((item, index) => (
              <PracticeCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-parchment text-ink">
        <div className="container">
          <SectionHeader
            eyebrow="Capabilities"
            title="Direct legal support for urgent and complex problems."
            text="The firm supports clients from early-stage advisory to courtroom action, negotiation and final resolution."
            dark={false}
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickServices.map((item, index) => (
              <Reveal key={item} delay={index * 0.012}>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-soft">
                  <span className="text-sm font-semibold text-black/70">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Matter Lifecycle"
            title="From first assessment to final resolution."
            text="Each matter is organized around facts, timing, relief, leverage and practical outcome."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-7">
                  <p className="font-serif text-5xl text-gold">{item.step}</p>
                  <h3 className="mt-7 font-serif text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-7 text-ivory/62">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-parchment text-ink">
        <div className="container">
          <SectionHeader
            eyebrow="Industries"
            title="Commercial understanding across sectors."
            text="Legal strategy becomes stronger when it reflects how the client’s business operates."
            dark={false}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-[1.8rem] border border-black/10 bg-white p-7 shadow-soft">
                    <Icon className="text-blood" />
                    <h3 className="mt-6 font-serif text-3xl">{item.title}</h3>
                    <p className="mt-4 leading-7 text-black/64">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
