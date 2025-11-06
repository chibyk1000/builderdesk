import IndustryExpertise from "@/components/home/Expertise";
import Hero from "@/components/home/Hero";
import HourlyPricing from "@/components/home/hourlyPricing";
import HowItWorks from "@/components/home/how-it-works";
import PreFoot from "@/components/home/PreFoot";
import Pricing from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/testimonials";
import WhyChoose from "@/components/home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (<main>
    <Hero />
    <Services />
    <WhyChoose />
    <HowItWorks />
    <Testimonials />
    <Pricing />
    <HourlyPricing />
    <IndustryExpertise />
    <PreFoot/>
  </main>
  );
}
