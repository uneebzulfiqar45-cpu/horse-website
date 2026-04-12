import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import EmergencySection from "@/components/home/EmergencySection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import MembershipSection from "@/components/home/MembershipSection";
import PlanRideSection from "@/components/home/PlanRideSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import CharitySection from "@/components/home/CharitySection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Specialist Equine Veterinary Care | EquiVet Practice",
  description:
    "Premium mobile equine veterinary services across Germany. Sports medicine, lameness evaluation, diagnostic imaging, dentistry, and 24/7 emergency care brought to your stable.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EmergencySection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <BenefitsSection />
      <MembershipSection />
      <PlanRideSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <CharitySection />
      <ContactSection />
    </>
  );
}
