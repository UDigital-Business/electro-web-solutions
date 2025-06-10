
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <LocationSection />
      <FAQSection />
      <ContactSection />
      <SocialSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
