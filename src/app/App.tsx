import { SEOHead } from '@/app/components/SEOHead';
import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { TrustBanner } from '@/app/components/TrustBanner';
import { AboutSection } from '@/app/components/AboutSection';
import { ProblemsSection } from '@/app/components/ProblemsSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { MiniCTA } from '@/app/components/MiniCTA';
import { StatsSection } from '@/app/components/StatsSection';
import { ValuePropositionSection } from '@/app/components/ValuePropositionSection';
import { WhyUsSection } from '@/app/components/WhyUsSection';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';
import { FAQSection } from '@/app/components/FAQSection';
import { ContactForm } from '@/app/components/ContactForm';
import { CTASection } from '@/app/components/CTASection';
import { Footer } from '@/app/components/Footer';
import { WhatsAppButton } from '@/app/components/WhatsAppButton';

export default function App() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <TrustBanner />
          <AboutSection />
          <ProblemsSection />
          <ServicesSection />
          <MiniCTA 
            title="¿Interesado en alguno de nuestros servicios?"
            description="Conversemos sin compromiso sobre cómo podemos ayudarte"
          />
          <StatsSection />
          <ValuePropositionSection />
          <WhyUsSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactForm />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}