"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Apple,
  Monitor,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Categories", href: "#categories" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  Support: [
    { label: "Help Centre", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Vendor Support", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-text-primary pt-16 pb-8 overflow-hidden">
      {/* Subtle gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src="/funcxon-icon.png"
                alt="Funcxon"
                className="h-9 w-9 rounded-xl object-cover"
              />
              <span className="font-[var(--font-playfair)] text-xl font-bold text-white">
                Funcxon
              </span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-[280px]">
              The ultimate event planning marketplace. Connect with top-tier
              vendors, venues, and service professionals across South Africa.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a
                href="mailto:support@funcxon.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@funcxon.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="w-4 h-4" />
                South Africa
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white/80 text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Funcxon. All rights reserved.
          </p>

          {/* Platform badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-white/30">
              <Smartphone className="w-4 h-4" />
              <span className="text-xs">Android</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30">
              <Apple className="w-4 h-4" />
              <span className="text-xs">iOS</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30">
              <Monitor className="w-4 h-4" />
              <span className="text-xs">Web</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
