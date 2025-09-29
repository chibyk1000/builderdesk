import React from 'react'
import Navbar from './components/navbar';
import { ModernHero } from './components/modern-hero';
import { FeaturesSection } from './components/feature-section';
import { RecentTasksSection } from './components/recent-task-section';
import { TrustedSection } from './components/trusted-section';
import { ComparisonSection } from './components/comparison-section';
import { TestimonialsSection } from './components/testimonial-section';
import { Footer } from './components/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <ModernHero />

      <FeaturesSection />

      <TrustedSection />
      <RecentTasksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App
