
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Desarrollo y Soluciones</span>
                <br />
                <span className="text-foreground">en Análisis Electromecánicos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Potenciando tu industria
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("servicios")}
                className="group bg-gradient-to-r from-dsae-blue to-dsae-green hover:opacity-90 transition-all duration-300"
              >
                Nuestros Servicios
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="border-dsae-blue text-dsae-blue hover:bg-dsae-blue hover:text-white transition-all duration-300"
              >
                Contactar
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-8 w-8 text-dsae-blue" />
                </div>
                <div className="text-2xl font-bold text-foreground">6</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-dsae-green" />
                </div>
                <div className="text-2xl font-bold text-foreground">+100</div>
                <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-dsae-blue" />
                </div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-dsae rounded-2xl blur-3xl opacity-20"></div>
              <img
                src="/lovable-uploads/97a79187-b272-43fa-bd5f-f6aba4651d97.png"
                alt="Vista aérea de subestación eléctrica"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
