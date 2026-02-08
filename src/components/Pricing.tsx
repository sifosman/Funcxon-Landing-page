"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Crown, Building2 } from "lucide-react";

const plans = [
  {
    name: "Basic",
    icon: Sparkles,
    price: "Free",
    period: "",
    description: "Perfect for getting started and exploring the marketplace.",
    features: [
      "Basic profile listing",
      "Up to 5 portfolio images",
      "Contact information display",
      "Basic search visibility",
      "Email support",
    ],
    cta: "Get Started Free",
    highlighted: false,
    gradient: "",
    border: "border-border-subtle/50",
  },
  {
    name: "Premium",
    icon: Crown,
    price: "Coming Soon",
    period: "",
    description:
      "For serious vendors who want maximum exposure and powerful tools.",
    features: [
      "Featured profile listing",
      "Unlimited images & videos",
      "Priority search ranking",
      "Quote request management",
      "Analytics dashboard",
      "Social media integration",
      "Priority support",
    ],
    cta: "Join Waitlist",
    highlighted: true,
    gradient: "from-primary to-primary-dark",
    border: "border-primary/30",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description:
      "For large agencies and multi-venue businesses with advanced needs.",
    features: [
      "Everything in Premium",
      "Multiple venue/service listings",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Advanced analytics",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
    gradient: "",
    border: "border-border-subtle/50",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
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
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Vendor Subscriptions
            </span>
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Grow Your <span className="gradient-text">Event Business</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the plan that fits your business. Start free and upgrade as
            you grow. Secure payments powered by PayFast.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative group ${
                plan.highlighted ? "md:-mt-4 md:mb-0" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/25">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative bg-surface rounded-3xl p-8 border ${plan.border} ${
                  plan.highlighted
                    ? "shadow-2xl shadow-primary/10 ring-1 ring-primary/20"
                    : "shadow-sm hover:shadow-xl"
                } transition-all duration-300 h-full flex flex-col`}
              >
                {/* Plan icon + name */}
                <div className="mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      plan.highlighted ? "bg-primary/10" : "bg-surface-muted"
                    } flex items-center justify-center mb-4`}
                  >
                    <plan.icon
                      className={`w-6 h-6 ${
                        plan.highlighted ? "text-primary" : "text-text-secondary"
                      }`}
                    />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-muted text-sm ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full ${
                          plan.highlighted
                            ? "bg-primary/10"
                            : "bg-surface-muted"
                        } flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlighted
                              ? "text-primary"
                              : "text-text-secondary"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40"
                      : "bg-surface-muted text-text-primary hover:bg-primary/10 hover:text-primary border border-border-subtle"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-text-muted mt-10"
        >
          Secure payments powered by{" "}
          <span className="font-semibold text-text-secondary">PayFast</span>.
          Cancel anytime. No hidden fees.
        </motion.p>
      </div>
    </section>
  );
}
