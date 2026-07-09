import PageHero from "../components/PageHero.jsx";
import AttorneyCard from "../components/AttorneyCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { attorneys, images } from "../data/siteData.js";
import { ClipboardCheck, BookOpenCheck, Users } from "lucide-react";

export default function Attorneys() {
  return (
    <>
      <PageHero
        eyebrow="Attorneys"
        title="Senior-led teams for high-stakes matters."
        text="Partners, counsel and associates work as focused teams across litigation, arbitration, investigations and advisory mandates."
        image={images.boardroom}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {attorneys.map((person, index) => (
              <AttorneyCard key={person.name} person={person} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-parchment text-ink">
        <div className="container">
          <SectionHeader
            eyebrow="Team Model"
            title="The right seniority for the right level of risk."
            text="Matter teams are structured to provide strategic judgement, specialist knowledge and disciplined execution."
            dark={false}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [Users, "Partner Direction", "Strategy, hearings, negotiations and decision points are led by senior lawyers."],
              [ClipboardCheck, "Specialist Counsel", "Focused lawyers handle arbitration, investigations, technology, employment, real estate and regulatory complexity."],
              [BookOpenCheck, "Associate Execution", "Research, pleadings, chronologies, evidence preparation and court coordination are handled with disciplined review."],
            ].map(([Icon, title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="h-full rounded-[1.8rem] border border-black/10 bg-white p-7 shadow-soft">
                  <Icon className="text-blood" />
                  <h3 className="mt-6 font-serif text-3xl">{title}</h3>
                  <p className="mt-4 leading-7 text-black/64">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
