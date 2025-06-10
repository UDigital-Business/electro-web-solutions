
import { Zap, ShoppingCart, Building, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Zap,
      title: "Análisis Eléctricos",
      description: "Evaluación completa de sistemas eléctricos para optimizar eficiencia y prevenir fallas en instalaciones industriales y comerciales.",
      features: ["Análisis de calidad de energía", "Termografía infrarroja", "Medición de parámetros eléctricos"],
      route: "/servicios/analisis-electricos"
    },
    {
      icon: ShoppingCart,
      title: "Productos Eléctricos",
      description: "Suministro de equipos y componentes eléctricos de alta calidad para proyectos industriales y comerciales.",
      features: ["Equipos de protección", "Sistemas de control", "Instrumentación especializada"],
      route: "/servicios/productos-electricos"
    },
    {
      icon: Building,
      title: "Desarrollo de Ingeniería Estructural",
      description: "Diseño y desarrollo de estructuras especializadas para instalaciones eléctricas y proyectos industriales.",
      features: ["Diseño estructural", "Análisis de cargas", "Modelado 3D especializado"],
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
            Ofrecemos una gama completa de servicios especializados en análisis electromecánicos 
            para mantener sus equipos funcionando al máximo rendimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-dsae-blue rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleViewMore(service.route)}
                  className="w-full bg-gradient-to-r from-dsae-blue to-dsae-green hover:opacity-90 transition-all duration-300 group"
                >
                  Ver más
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
