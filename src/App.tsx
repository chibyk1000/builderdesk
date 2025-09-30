
import Navbar from './components/navbar';
import { ModernHero } from './components/modern-hero';
import { FeaturesSection } from './components/feature-section';
import { RecentTasksSection } from './components/recent-task-section';
import { TrustedSection } from './components/trusted-section';
import { ComparisonSection } from './components/comparison-section';
import { TestimonialsSection } from './components/testimonial-section';
import { Footer } from './components/footer';
import { Hero2 } from './components/Hero2';
import { TimeSavingSection } from './components/time-saving-section';

const App = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <ModernHero />

      <FeaturesSection />

      <TrustedSection />
      <TimeSavingSection/>
      <RecentTasksSection />
      <Hero2/>
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App
