import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";

import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import GallerySection from "@/components/home/GallerySection";
import BenefitsSection from "@/components/home/BenefitsSection";
import MembershipSection from "@/components/home/MembershipSection";
import PlanRideSection from "@/components/home/PlanRideSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import CharitySection from "@/components/home/CharitySection";
import ContactSection from "@/components/home/ContactSection";
import TrustSection from "@/components/home/TrustSection";
import EmergencySection from "@/components/home/EmergencySection";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "Specialist Equine Veterinary Care | EquiVet Practice",
  description:
    "Premium mobile equine veterinary services across Germany. Sports medicine, lameness evaluation, diagnostic imaging, dentistry, and 24/7 emergency care brought to your stable.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrustSection />
        <MembershipSection />
        <EmergencySection />
        <StatsSection />
        <PlanRideSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <GallerySection />
        <ProcessSection />
        <BlogSection />
        <CharitySection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
