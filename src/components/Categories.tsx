"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Music,
  UtensilsCrossed,
  Users,
  Palette,
  Wrench,
  Camera,
  ClipboardList,
  Shield,
  MapPin,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    icon: Music,
    name: "Entertainment",
    items: "DJs, Musicians, Dancers, Comedians, Magicians",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Drinks",
    items: "Caterers, Chefs, Bartenders, Baristas, Bakers",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    name: "Support Staff",
    items: "Ushers, Servers, Setup Crews, Parking Attendants",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: Palette,
    name: "Creative Services",
    items: "Designers, Florists, Stylists, Makeup Artists",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
  },
  {
    icon: Wrench,
    name: "Technical Services",
    items: "Sound Engineers, Lighting, IT Support, Electricians",
    color: "from-slate-500 to-gray-600",
    bg: "bg-slate-50",
  },
  {
    icon: Camera,
    name: "Media & Content",
    items: "Photographers, Videographers, Drone Operators",
    color: "from-amber-500 to-yellow-500",
    bg: "bg-amber-50",
  },
  {
    icon: ClipboardList,
    name: "Event Management",
    items: "Planners, Coordinators, Emcees, Consultants",
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Shield,
    name: "Specialised Services",
    items: "Security, Medical, Transport, Officiants",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
  },
];

const venueTypes = [
  "Wedding Venues",
  "Conference Centres",
  "Banquet Halls",
  "Garden Venues",
  "Beach Venues",
  "Hotels & Resorts",
  "Restaurants",
  "Farm Venues",
  "Historic Buildings",
  "Community Centres",
];

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="relative py-24 lg:py-32">
      <div className="orb w-[400px] h-[400px] bg-primary-light/20 top-20 -right-40 absolute" />

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
              Marketplace
            </span>
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            8 Service Categories,{" "}
            <span className="gradient-text">Endless Possibilities</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Whatever your event needs, our comprehensive marketplace has
            professionals across every category — all verified and ready to make
            your event unforgettable.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative rounded-2xl bg-surface p-5 border border-border-subtle/50 hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-11 h-11 rounded-xl ${cat.bg} group-hover:bg-white/20 flex items-center justify-center mb-3 transition-colors duration-500`}
                >
                  <cat.icon className="w-5 h-5 text-text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-[var(--font-playfair)] text-base font-semibold text-text-primary group-hover:text-white mb-1.5 transition-colors duration-500">
                  {cat.name}
                </h3>
                <p className="text-xs text-text-muted group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                  {cat.items}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue types row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-text-primary">
              Venue Types
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {venueTypes.map((venue, i) => (
              <motion.span
                key={venue}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.04 }}
                className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-text-secondary border border-border-subtle hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
              >
                {venue}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
