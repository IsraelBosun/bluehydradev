import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import TechStack from '@/components/TechStack';
import ProcessTimeline from '@/components/ProcessTimeline';
import PortfolioHighlights from '@/components/PortfolioHighlights';
import ValueProposition from '@/components/ValueProposition';
import PricingTeaser from '@/components/PricingTeaser';
import TrustIndicators from '@/components/TrustIndicators';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <PortfolioHighlights />
      <TechStack />
      <ValueProposition />
      <ProcessTimeline />
      <PricingTeaser />
      <TrustIndicators />
    </>
  );
}