"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Star,
  Users,
  Calendar,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Verified Vendors" },
  { value: "8", label: "Service Categories" },
  { value: "25+", label: "Event Types" },
  { value: "4.9", label: "Average Rating", icon: Star },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/20 -top-40 -right-40 absolute" />
      <div className="orb w-[400px] h-[400px] bg-primary-light/30 bottom-20 -left-40 absolute" />
      <div className="orb w-[300px] h-[300px] bg-accent/40 top-1/2 right-1/4 absolute" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Now available on all platforms
              </span>
            </motion.div>

            <h1 className="font-[var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-text-primary mb-6">
              Connect,{" "}
              <span className="gradient-text">Collaborate</span>
              <br />& Celebrate
            </h1>

            <p className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
              Funcxon is the ultimate event planning marketplace. Discover
              top-tier vendors, venues, and service professionals — all in one
              beautifully designed platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#download"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border-2 border-border-subtle px-7 py-3.5 text-base font-semibold text-text-primary hover:border-primary hover:text-primary transition-all duration-300"
              >
                See Features
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="flex items-center gap-1 justify-center sm:justify-start">
                    <span className="text-2xl font-bold text-text-primary">
                      {stat.value}
                    </span>
                    {stat.icon && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <span className="text-xs text-text-muted">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone frame */}
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl scale-110" />

              {/* Phone body */}
              <div className="relative w-[280px] sm:w-[320px] rounded-[2.5rem] border-[8px] border-text-primary bg-background shadow-2xl overflow-hidden animate-float">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-text-primary rounded-b-2xl z-10" />

                {/* Screen content */}
                <div className="pt-8 pb-4 px-4 min-h-[560px] sm:min-h-[620px]">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 px-2">
                    <span className="text-[10px] font-semibold text-text-primary">
                      9:41
                    </span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 rounded-sm bg-text-primary/60" />
                      <div className="w-3.5 h-2 rounded-sm bg-text-primary/60" />
                      <div className="w-5 h-2.5 rounded-sm bg-text-primary/80 border border-text-primary/30" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="mb-4">
                    <h3 className="font-[var(--font-playfair)] text-lg font-bold text-text-primary">
                      Discover Vendors
                    </h3>
                    <p className="text-[10px] text-text-muted">
                      Find the perfect match for your event
                    </p>
                  </div>

                  {/* Search bar */}
                  <div className="flex items-center gap-2 bg-surface-muted rounded-xl px-3 py-2.5 mb-4">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full border border-primary" />
                    </div>
                    <span className="text-[10px] text-text-muted">
                      Search venues, vendors...
                    </span>
                  </div>

                  {/* Category chips */}
                  <div className="flex gap-1.5 mb-4 overflow-hidden">
                    {["All", "Venues", "Catering", "Photo"].map(
                      (cat, i) => (
                        <span
                          key={cat}
                          className={`text-[9px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
                            i === 0
                              ? "bg-primary text-white"
                              : "bg-surface-muted text-text-secondary"
                          }`}
                        >
                          {cat}
                        </span>
                      )
                    )}
                  </div>

                  {/* Vendor cards */}
                  {[
                    {
                      name: "The Grand Pavilion",
                      type: "Wedding Venue",
                      rating: "4.9",
                      color: "bg-primary/10",
                    },
                    {
                      name: "Elegant Catering Co.",
                      type: "Catering Service",
                      rating: "4.8",
                      color: "bg-accent",
                    },
                    {
                      name: "LensCraft Studios",
                      type: "Photography",
                      rating: "5.0",
                      color: "bg-primary-light/20",
                    },
                  ].map((vendor) => (
                    <div
                      key={vendor.name}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-border-subtle/50 mb-2 shadow-sm"
                    >
                      <div
                        className={`w-11 h-11 rounded-lg ${vendor.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-text-primary truncate">
                          {vendor.name}
                        </p>
                        <p className="text-[9px] text-text-muted">
                          {vendor.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-[10px] font-semibold text-text-primary">
                          {vendor.rating}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Bottom tab bar */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-3 bg-surface border-t border-border-subtle/50 rounded-b-[2rem]">
                    {[
                      { icon: "🔍", label: "Search", active: true },
                      { icon: "❤️", label: "Favourites", active: false },
                      { icon: "💬", label: "Quotes", active: false },
                      { icon: "📅", label: "Planner", active: false },
                      { icon: "👤", label: "Account", active: false },
                    ].map((tab) => (
                      <div
                        key={tab.label}
                        className="flex flex-col items-center gap-0.5"
                      >
                        <span className="text-xs">{tab.icon}</span>
                        <span
                          className={`text-[8px] ${
                            tab.active
                              ? "text-primary font-semibold"
                              : "text-text-muted"
                          }`}
                        >
                          {tab.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -left-12 top-20 bg-surface rounded-2xl shadow-xl p-3 border border-border-subtle/50 animate-float-delayed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-text-primary">
                      Event Booked!
                    </p>
                    <p className="text-[8px] text-text-muted">
                      Wedding - 15 Mar
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-32 bg-surface rounded-2xl shadow-xl p-3 border border-border-subtle/50 animate-float-slow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {["bg-primary", "bg-primary-light", "bg-accent"].map(
                      (c, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full ${c} border-2 border-white`}
                        />
                      )
                    )}
                  </div>
                  <span className="text-[10px] font-semibold text-text-primary">
                    +2.5k users
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
