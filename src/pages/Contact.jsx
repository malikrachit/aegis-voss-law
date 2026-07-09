import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Reveal from "../components/Reveal.jsx";
import { firm, images } from "../data/siteData.js";
import { Mail, MapPin, Phone, ShieldCheck, Clock3 } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Confidential Contact"
        title="Start with a controlled legal intake."
        text="For urgent litigation, investigations, regulatory risk, founder disputes, reputation matters or commercial conflict, early strategy matters."
        image={images.boardroom}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <SectionHeader
              eyebrow="Private Review"
              title="Tell us what is at stake."
              text="The intake team will assess urgency, parties, documents, deadlines and immediate strategic options."
            />
            <div className="mt-10 grid gap-4">
              {[
                [Phone, firm.phone, "24/7 urgent matter desk"],
                [Mail, firm.email, "Confidential legal intake"],
                [MapPin, firm.address, "By appointment only"],
                [Clock3, "Response protocol", "Urgent matters are escalated for immediate review"],
              ].map(([Icon, title, text], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <Icon className="mt-1 shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-ivory/55">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-gold/20 bg-gold/10 p-6">
              <ShieldCheck className="text-gold" />
              <h3 className="mt-5 font-serif text-3xl">Before sending documents</h3>
              <p className="mt-3 leading-7 text-ivory/65">
                Send only a brief non-confidential summary until conflict checks are complete and the engagement process is confirmed.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
