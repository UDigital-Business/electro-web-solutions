
import { ShoppingCart, Lightbulb, Hammer, Zap, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductsSection() {
  const servicios = [
    {
      icon: Zap,
      title: "Análisis Eléctricos",
      description: "Estudios especializados en sistemas eléctricos para garantizar seguridad y eficiencia operativa.",
      caracteristicas: ["Estudios de cortocircuito", "Coordinación de protecciones", "Análisis de arco eléctrico"]
    },
    {
      icon: Wrench,
      title: "Ingeniería Estructural",
      description: "Diseño y análisis de estructuras para soportar instalaciones eléctricas y mecánicas.",
      caracteristicas: ["Análisis estructural", "Diseño de soportes", "Cálculos sísmicos"]
    }
  ];

  const areas = [
    {
      icon: Lightbulb,
      title: "Innovación y Tecnología",
      description: "Soluciones tecnológicas avanzadas para optimizar procesos industriales y comerciales.",
      caracteristicas: ["Sistemas inteligentes", "Automatización", "Monitoreo digital"]
    },
    {
      icon: Hammer,
      title: "Construcción",
      description: "Equipos especializados para proyectos de construcción e infraestructura eléctrica.",
      caracteristicas: ["Herramientas especializadas", "Equipos de seguridad", "Materiales certificados"]
    },
    {
      icon: Zap,
      title: "Área Eléctrica",
      description: "Componentes y equipos eléctricos para instalaciones industriales y comerciales.",
      caracteristicas: ["Dispositivos de protección", "Sistemas de control", "Instrumentación"]
    }
  ];

  return (
    <section id="productos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Servicios y Productos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicios especializados de análisis electromecánicos y suministro de equipos eléctricos 
            de alta calidad para diferentes sectores industriales.
          </p>
        </div>

        {/* Servicios Principales */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Nuestros Servicios Especializados
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {servicios.map((servicio, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover:scale-105 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                      <servicio.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                    {servicio.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{servicio.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-dsae-blue">Servicios incluidos:</h4>
                    <ul className="space-y-1">
                      {servicio.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-dsae-green rounded-full mr-2 flex-shrink-0"></span>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Productos */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg animate-fade-in">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <div className="p-6 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                  <ShoppingCart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                Venta de Equipo Eléctrico
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Suministro especializado de equipos eléctricos de alta calidad para diferentes sectores industriales, 
                garantizando soluciones confiables y eficientes para cada proyecto.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Áreas de Aplicación */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Áreas de Aplicación
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover:scale-105 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-dsae-blue">Características:</h4>
                    <ul className="space-y-1">
                      {area.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-dsae-green rounded-full mr-2 flex-shrink-0"></span>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
