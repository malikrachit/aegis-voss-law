import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 shadow-premium backdrop-blur-xl sm:p-8"
    >
      <div className="mb-7 flex items-start gap-4 rounded-2xl border border-gold/20 bg-gold/10 p-4">
        <ShieldCheck className="mt-1 shrink-0 text-gold" />
        <p className="text-sm leading-6 text-ivory/70">
          Share a brief non-confidential summary. Sensitive material should follow only after conflict checks and engagement confirmation.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="field-label">Name</span>
          <input className="input" placeholder="Your name" required />
        </label>
        <label className="grid gap-2">
          <span className="field-label">Email</span>
          <input className="input" type="email" placeholder="you@example.com" required />
        </label>
        <label className="grid gap-2">
          <span className="field-label">Phone</span>
          <input className="input" placeholder="+91..." />
        </label>
        <label className="grid gap-2">
          <span className="field-label">Matter Type</span>
          <select className="input" defaultValue="Commercial Litigation">
            <option>Commercial Litigation</option>
            <option>Corporate / Founder Dispute</option>
            <option>Arbitration</option>
            <option>White-Collar / Investigation</option>
            <option>Regulatory Risk</option>
            <option>Reputation / Media</option>
            <option>Technology / Data</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2">
        <span className="field-label">Brief Summary</span>
        <textarea className="input min-h-40 resize-none" placeholder="Give a short overview of the issue, timeline and urgency..." required />
      </label>

      <button className="mt-6 w-full rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-ink transition hover:-translate-y-0.5 hover:bg-ivory">
        Submit confidential request
      </button>

      {submitted && (
        <p className="mt-5 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-gold">
          Request received. The intake team will review the matter details.
        </p>
      )}
    </form>
  );
}
