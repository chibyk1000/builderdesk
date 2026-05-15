import AboutSection from "@/components/about-section";
import { BenefitsSection } from "@/components/benefits";
import ClientsSection from "@/components/clients-section";
import ContactSection from "@/components/contact-section";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/home/Hero";
import OurPartners from "@/components/our-partners";
import Pricing from "@/components/pricing";
import  { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { WhyPartnerSection } from "@/components/why-partner-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyPartnerSection />
      <BenefitsSection />
     
      <ProcessSection />
      <Pricing />
      <AboutSection />
      <ContactUs />
      <ContactSection/>
      <ClientsSection />
    </main>
  );
}
