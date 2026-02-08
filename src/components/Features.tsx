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
