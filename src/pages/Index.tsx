import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        // pequeño delay para asegurar que la sección ya esté montada
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* 👇 Asegúrate de asignar los IDs correctos */}
      <div id="nosotros">
        <AboutSection />
      </div>
      <div id="servicios">
        <ServicesSection />
      </div>
      <ProductsSection />
      <div id="proyectos">
        <ProjectsSection />
      </div>
      <LocationSection />
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contacto">
        <ContactSection />
      </div>
      <SocialSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
