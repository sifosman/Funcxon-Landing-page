"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Naledi M.",
    role: "Bride-to-be",
    text: "Funcxon made planning my wedding a dream. I found the most amazing vendors in minutes — from catering to photography. The quote system saved me weeks of back-and-forth.",
    rating: 5,
    avatar: "NM",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "James K.",
    role: "Corporate Event Manager",
    text: "We use Funcxon for all our corporate functions now. The search filters are incredibly detailed, and the planner feature keeps my whole team in sync. Game changer.",
    rating: 5,
    avatar: "JK",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Thandi S.",
    role: "Event Photographer",
    text: "As a vendor on Funcxon, I have doubled my bookings. The portfolio tools are amazing, and the subscriber dashboard lets me track exactly how my profile performs.",
    rating: 5,
    avatar: "TS",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Ravi P.",
    role: "Birthday Party Planner",
    text: "Found an incredible DJ and caterer for my daughter's 21st through Funcxon. The favourites feature let me compare options easily. Highly recommend!",
    rating: 5,
    avatar: "RP",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Zanele D.",
    role: "Wedding Venue Owner",
    text: "Funcxon brings us qualified leads consistently. The platform is professional and the application process ensures only serious vendors are listed. Love it.",
    rating: 5,
    avatar: "ZD",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Marco B.",
    role: "Conference Organiser",
    text: "The location-based search is brilliant. I can find vendors within a specific radius of my venue. The built-in planner replaced three other apps I was using.",
    rating: 5,
    avatar: "MB",
    color: "bg-teal-100 text-teal-700",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-primary/10 -bottom-40 left-1/4 absolute" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">
              Loved by Users
            </span>
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            What People Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From event planners to vendors — hear how Funcxon is transforming
            the way South Africa plans events.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-surface rounded-2xl p-6 border border-border-subtle/50 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/10 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
