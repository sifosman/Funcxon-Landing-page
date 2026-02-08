"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Monitor, Apple, Sparkles } from "lucide-react";

const platforms = [
  {
    icon: Smartphone,
    name: "Android",
    badge: "Google Play",
    description:
      "Download from the Google Play Store and start planning your next event on your Android device.",
    status: "Available Now",
    gradient: "from-green-500 to-emerald-600",
    bgIcon: "bg-green-50",
  },
  {
    icon: Apple,
    name: "iOS",
    badge: "App Store",
    description:
      "Get Funcxon on your iPhone or iPad from the Apple App Store. Seamless experience across all Apple devices.",
    status: "Available Now",
    gradient: "from-gray-700 to-gray-900",
    bgIcon: "bg-gray-100",
  },
  {
    icon: Monitor,
    name: "Web App",
    badge: "Browser",
    description:
      "Access Funcxon from any browser on your desktop or laptop. No installation required — just open and go.",
    status: "Available Now",
    gradient: "from-primary to-primary-dark",
    bgIcon: "bg-primary/10",
  },
];

export default function Platforms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="platforms"
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Multi-Platform
            </span>
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Available{" "}
            <span className="gradient-text">Everywhere You Are</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Plan your events on the go or from the comfort of your desk.
            Funcxon is available on Android, iOS, and the Web.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-surface rounded-3xl p-8 border border-border-subtle/50 hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden text-center h-full">
                {/* Gradient top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl ${platform.bgIcon} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <platform.icon className="w-10 h-10 text-text-primary" />
                </div>

                {/* Badge */}
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${platform.gradient} text-white px-3 py-1 rounded-full mb-4`}
                >
                  {platform.badge}
                </span>

                <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-3">
                  {platform.name}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {platform.description}
                </p>

                {/* Status pill */}
                <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-700">
                    {platform.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
          id="download"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {/* Google Play button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-text-primary text-white rounded-xl px-6 py-3.5 hover:bg-gray-800 transition-colors group"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.196 12.69l2.502-3.182zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider opacity-80">
                  Get it on
                </span>
                <span className="block text-sm font-semibold -mt-0.5">
                  Google Play
                </span>
              </div>
            </a>

            {/* App Store button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-text-primary text-white rounded-xl px-6 py-3.5 hover:bg-gray-800 transition-colors group"
            >
              <Apple className="w-7 h-7" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider opacity-80">
                  Download on the
                </span>
                <span className="block text-sm font-semibold -mt-0.5">
                  App Store
                </span>
              </div>
            </a>

            {/* Web App button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-primary text-white rounded-xl px-6 py-3.5 hover:bg-primary-dark transition-colors group"
            >
              <Monitor className="w-7 h-7" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider opacity-80">
                  Open in
                </span>
                <span className="block text-sm font-semibold -mt-0.5">
                  Web Browser
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
