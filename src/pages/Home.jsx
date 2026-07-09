import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2, Scale, Sparkles } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import PracticeCard from "../components/PracticeCard.jsx";
import CaseCard from "../components/CaseCard.jsx";
import AttorneyCard from "../components/AttorneyCard.jsx";
import LegalTicker from "../components/LegalTicker.jsx";
import Reveal from "../components/Reveal.jsx";
import FAQ from "../components/FAQ.jsx";
import {
  attorneys,
  cases,
  commandRoom,
  faqs,
  images,
  industries,
  practiceAreas,
  process,
  quickServices,
  stats,
  testimonials,
  insights,
} from "../data/siteData.js";

export default function Home() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 70]);
  const symbolY = useTransform(scrollY, [0, 700], [0, -28]);

  return (
    <>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
        <motion.img
          src={images.court}
          alt="Courtroom interior"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center opacity-[0.11] grayscale"
          style={{ y: bgY }}
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#08090d_0%,rgba(8,9,13,.97)_44%,rgba(38,14,18,.95)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_44%,rgba(199,164,91,.16),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(125,29,36,.24),transparent_42%)]" />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-gold/[0.045]"
          style={{ y: symbolY }}
        >
          <Scale className="h-[30rem] w-[30rem] md:h-[42rem] md:w-[42rem] lg:h-[50rem] lg:w-[50rem]" strokeWidth={0.45} />
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

        <div className="relative mx-auto w-full max-w-[1420px] px-5 py-16 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-6xl text-center"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mx-auto inline-flex rounded-full border border-gold/20 bg-gold/[0.08] px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.32em] text-gold backdrop-blur sm:text-xs">
              Strategic Dispute Counsel
            </p>

            <h1 className="mx-auto mt-8 max-w-6xl font-serif text-[clamp(3.2rem,8vw,7.8rem)] leading-[0.92] tracking-[-0.065em] text-ivory">
              Control the conflict before it controls the outcome.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-ivory/68 md:text-xl md:leading-9">
              Aegis & Voss represents businesses, founders, boards and institutions in litigation,
              arbitration, investigations, regulatory pressure and reputation-sensitive disputes.
            </p>

            <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-ivory/55">
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3">Evidence first</span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3">Timing matters</span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3">Discretion always</span>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-ink transition hover:-translate-y-0.5 hover:bg-ivory"
              >
                Request Counsel
                <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </Link>
              <Link
                to="/cases"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ivory transition hover:border-gold/45 hover:text-gold"
              >
                Representative Matters
              </Link>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/24 p-4 text-center backdrop-blur">
                  <p className="font-serif text-3xl text-gold">{stat.value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ivory/52">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <LegalTicker />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Practice"
            title="Focused representation across business-critical matters."
            text="Aegis & Voss combines courtroom preparation, commercial judgement and discreet strategic response across complex disputes."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {practiceAreas.map((item, index) => (
              <PracticeCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-parchment text-ink">
        <div className="container">
          <SectionHeader
            eyebrow="Method"
            title="A disciplined process from first call to final resolution."
            text="Every matter begins with facts, urgency, risk and leverage before the legal route is selected."
            dark={false}
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="h-full rounded-[1.8rem] border border-black/10 bg-white p-7 shadow-soft">
                  <p className="font-serif text-5xl text-blood">{item.step}</p>
                  <h3 className="mt-7 font-serif text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-7 text-black/64">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-black py-24">
        <img src={images.lawDesk} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/92 to-black" />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <SectionHeader
              eyebrow="Command"
              title="Clarity when pressure is highest."
              text="The team moves quickly to preserve evidence, assess relief, understand stakeholders and reduce avoidable exposure."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {commandRoom.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6">
                      <Icon className="text-gold" />
                      <h3 className="mt-6 font-serif text-3xl">{item.title}</h3>
                      <p className="mt-4 leading-7 text-ivory/62">{item.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Matters"
            title="Representative work across litigation, arbitration and risk response."
            text="The firm handles matters where timing, evidence, confidentiality and commercial outcomes all matter."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {cases.slice(0, 4).map((item, index) => (
              <CaseCard key={item.title} item={item} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/cases" className="inline-flex items-center gap-3 rounded-full border border-gold/35 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-ink">
              View More Matters <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-parchment text-ink">
        <div className="container">
          <SectionHeader
            eyebrow="Industries"
            title="Commercial context across sectors."
            text="Effective legal strategy is built around the client’s business reality, not only the legal issue."
            dark={false}
            align="center"
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

      <section className="section bg-black">
        <div className="container">
          <SectionHeader
            eyebrow="Attorneys"
            title="Senior leadership with focused execution teams."
            text="Partners, counsel and associates work as structured matter teams across urgent disputes, investigations and strategic advisory."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {attorneys.map((person, index) => (
              <AttorneyCard key={person.name} person={person} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
            <SectionHeader
              eyebrow="Capabilities"
              title="Clear legal support for urgent and complex problems."
              text="From early advisory to courtroom action, the firm helps clients choose the right route before positions harden."
            />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {quickServices.map((item, index) => (
                <Reveal key={item} delay={index * 0.012}>
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm text-ivory/72">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-parchment text-ink">
        <div className="container">
          <SectionHeader
            eyebrow="Client Perspective"
            title="Trusted when disputes become business-critical."
            text="Clients rely on clear judgement, discreet handling and disciplined execution during sensitive matters."
            dark={false}
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <div className="h-full rounded-[1.8rem] border border-black/10 bg-white p-7 shadow-soft">
                  <p className="font-serif text-2xl leading-tight">“{item.quote}”</p>
                  <p className="mt-7 font-bold">{item.name}</p>
                  <p className="text-sm text-black/55">{item.company}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <SectionHeader
              eyebrow="Insights"
              title="Practical thinking for high-stakes decisions."
              text="Briefings on litigation strategy, governance disputes, investigations, arbitration and regulatory response."
            />
            <div className="grid gap-4">
              {insights.slice(0, 3).map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <Link to="/insights" className="group block rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-gold/40 hover:bg-white/[0.06]">
                    <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-gold">{item.category}</p>
                    <h3 className="mt-4 font-serif text-3xl leading-tight">{item.title}</h3>
                    <p className="mt-4 text-ivory/60">{item.excerpt}</p>
                    <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-ivory/50 group-hover:text-gold">
                      Read Insight <ArrowRight size={16} />
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-premium sm:p-10 lg:grid-cols-[.85fr_1.15fr]">
            <SectionHeader
              eyebrow="Questions"
              title="Before the first consultation."
              text="The first step is to understand urgency, parties, documents and the safest immediate route."
            />
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,164,91,.14),transparent_35%)]" />
        <div className="relative mx-auto max-w-[1420px] overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/16 via-white/[0.045] to-blood/18 p-6 shadow-gold sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-gold">Emergency Counsel</p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.045em] md:text-6xl">
                The first move can decide the dispute.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/68">
                Early strategy helps preserve evidence, protect leverage, avoid procedural mistakes and reduce commercial damage.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-black/42 p-6">
              {["Conflict check", "Evidence hold", "Relief options", "Action memorandum"].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/10 py-4 last:border-b-0">
                  <CheckCircle2 className="text-gold" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-ink transition hover:bg-ivory"
              >
                Request Private Review <Sparkles size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
