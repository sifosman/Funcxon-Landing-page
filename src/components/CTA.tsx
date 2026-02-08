"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Smartphone, Apple, Monitor } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/15 top-0 left-1/4 absolute" />
      <div className="orb w-[400px] h-[400px] bg-primary-light/20 bottom-0 right-1/4 absolute" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-text-primary" />

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Ready to Plan Your
              <br />
              Perfect Event?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-lg max-w-xl mx-auto mb-10"
            >
              Join thousands of event planners and vendors already using Funcxon.
              Download the app or open it in your browser — it&apos;s free to get
              started.
            </motion.p>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-white text-text-primary rounded-full px-7 py-3.5 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Platform icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex justify-center items-center gap-6"
            >
              <div className="flex items-center gap-2 text-white/60">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm">Android</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2 text-white/60">
                <Apple className="w-5 h-5" />
                <span className="text-sm">iOS</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2 text-white/60">
                <Monitor className="w-5 h-5" />
                <span className="text-sm">Web</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
