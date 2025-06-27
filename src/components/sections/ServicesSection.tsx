
import { Zap, Building, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Zap,
      title: "Servicios Eléctricos",
      description: "Soluciones integrales en sistemas eléctricos con cumplimiento normativo y estudios especializados para garantizar eficiencia y seguridad.",
      subServices: [
        "Estudios de calidad de energía y eficiencia energética",
        "Cumplimiento de Código de Red",
        "Estudios eléctricos con base IEEE e IEC",
        "Mantenimiento a subestaciones eléctricas",
        "Diseño de instalaciones eléctricas",
        "Obra electromecánica",
        "Verificación de instalaciones eléctricas"
      ],
      route: "/servicios/analisis-electricos"
    },
    {
      icon: Building,
      title: "Servicios de Diseño Estructural y Obra Civil",
      description: "Desarrollo especializado de estructuras y obra civil con enfoque en seguridad, cumplimiento normativo y calidad constructiva.",
      subServices: [
        "Diseño estructural especializado",
        "Dictaminación estructural certificada",
        "Construcción con cumplimiento normativo"
      ],
      route: "/servicios/ingenieria-estructural"
    }
  ];

  const handleViewMore = (route: string) => {
    navigate(route);
  };

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Nuestros Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicios especializados en análisis electromecánicos y desarrollo estructural 
            para mantener sus equipos e instalaciones funcionando al máximo rendimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground text-lg">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-dsae-blue">Sub-servicios incluidos:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {service.subServices.map((subService, subIndex) => (
                      <li key={subIndex} className="flex items-start text-left">
                        <span className="w-2 h-2 bg-dsae-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{subService}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  onClick={() => handleViewMore(service.route)}
                  className="w-full bg-gradient-to-r from-dsae-blue to-dsae-green hover:opacity-90 transition-all duration-300 group mt-6"
                >
                  Ver detalles completos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
