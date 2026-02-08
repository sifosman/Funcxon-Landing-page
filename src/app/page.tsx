import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Platforms from "@/components/Platforms";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Platforms />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
