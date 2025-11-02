import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { MobileMockupSection } from '@/components/landing/MobileMockupSection';
import { CubeSection } from '@/components/landing/CubeSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { AIStrategistSection } from '@/components/landing/AIStrategistSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CompetitiveAnalysis } from '@/components/landing/CompetitiveAnalysis';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MobileMockupSection />
      <CubeSection />
      <TestimonialSection />
      <FeaturesSection />
      <AIStrategistSection />
      <HowItWorksSection />
      <PricingSection />
      <CompetitiveAnalysis />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
