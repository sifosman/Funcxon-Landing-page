"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Heart,
  MessageSquareQuote,
  CalendarDays,
  ShieldCheck,
  MapPin,
  Sparkles,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Vendor Search",
    description:
      "Filter by location, category, event type, capacity, and distance. Find exactly what you need with our intelligent search engine.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Save Your Favourites",
    description:
      "Shortlist vendors you love and compare them side by side. Build your dream team with a single tap.",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: MessageSquareQuote,
    title: "Request & Manage Quotes",
    description:
      "Send quote requests to multiple vendors simultaneously. Track responses and compare pricing in one place.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: CalendarDays,
    title: "Built-in Event Planner",
    description:
      "Organise tasks, set reminders, manage your calendar, and keep your entire event timeline on track.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description:
      "Use GPS or map radius selection to find vendors near your event location. Province, city, and distance filters included.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified Vendor Profiles",
    description:
      "Every vendor goes through a rigorous application process. Rich portfolios with photos, descriptions, and real ratings.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Portfolio Assistance",
    description:
      "Vendors get guided help building stunning portfolios that attract more clients and showcase their best work.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: BarChart3,
    title: "Vendor Dashboard & Analytics",
    description:
      "Subscribers get access to activity dashboards, performance metrics, and tools to grow their event business.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="orb w-[500px] h-[500px] bg-accent/40 -top-40 left-1/2 absolute" />

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
              Powerful Features
            </span>
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Plan Perfectly</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From discovering vendors to managing your entire event — Funcxon
            brings it all together in one seamless experience.
          </p>
        </motion.div>

        {/* Hero image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", title: "Perfect Weddings", desc: "From intimate ceremonies to grand celebrations" },
              { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", title: "Corporate Events", desc: "Professional conferences and team building" },
              { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", title: "Private Parties", desc: "Birthday celebrations and special occasions" }
            ].map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={event.src}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-semibold text-lg mb-1">{event.title}</h4>
                  <p className="text-white/80 text-sm">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-surface rounded-2xl p-6 border border-border-subtle/50 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
