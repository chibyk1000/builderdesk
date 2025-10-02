import { ComparisonSection } from "@/components/home/comparison-section";
import { FeaturesSection } from "@/components/home/features-section";
import { Hero2 } from "@/components/home/Hero2";

import { ModernHero } from "@/components/home/modern-hero";

import { RecentTasksSection } from "@/components/home/recent-task-section";
import { TestimonialsSection } from "@/components/home/testimonial-section";
import { TimeSavingSection } from "@/components/home/time-saving-section";
import { TrustedSection } from "@/components/home/trusted-section";

const Home = () => {
  return (
    <div>
      <ModernHero />

      <FeaturesSection />

          <TrustedSection />
          <TimeSavingSection/>
          <RecentTasksSection />
          <Hero2/>
      <ComparisonSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
