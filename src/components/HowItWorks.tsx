"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ListChecks, Send, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Search",
    description:
      "Browse our curated marketplace of verified vendors, venues, and service professionals. Filter by location, category, event type, and more.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Compare & Shortlist",
    description:
      "Save your favourites, compare vendor portfolios, ratings, and pricing side by side. Build your perfect event team effortlessly.",
  },
  {
    number: "03",
    icon: Send,
    title: "Request Quotes",
    description:
      "Send quote requests to multiple vendors at once. Receive and manage proposals directly in the app — no more endless emails.",
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "Plan & Celebrate",
    description:
      "Use the built-in planner to manage tasks, set deadlines, and coordinate everything. Then sit back and enjoy your perfectly planned event.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-surface-muted/50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-primary">
              Simple Process
            </span>
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            How <span className="gradient-text">Funcxon</span> Works
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From discovery to celebration — four simple steps to your perfect
            event.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center group"
              >
                {/* Step number + icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <span className="text-[64px] font-[var(--font-playfair)] font-bold text-primary/[0.07] leading-none select-none">
                    {step.number}
                  </span>
                  <div className="absolute bottom-0 w-16 h-16 rounded-2xl bg-surface border-2 border-primary/20 shadow-lg shadow-primary/10 flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
