import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <button
              onClick={() => setOpen(active ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="font-serif text-xl text-ivory">{item.q}</span>
              <ChevronDown className={`shrink-0 text-gold transition ${active ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                  <p className="px-5 pb-5 leading-7 text-ivory/62">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
