
import { Wrench, BarChart3, Shield, Cog, Zap, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Análisis de Vibraciones",
      description: "Diagnóstico preciso del estado de máquinas rotatorias mediante análisis espectral avanzado.",
      features: ["Detección temprana de fallas", "Análisis de tendencias", "Reportes detallados"]
    },
    {
      icon: Zap,
      title: "Análisis Eléctrico",
      description: "Evaluación completa de sistemas eléctricos para optimizar eficiencia y prevenir fallas.",
      features: ["Análisis de calidad de energía", "Termografía infrarroja", "Medición de parámetros eléctricos"]
    },
    {
      icon: Cog,
      title: "Mantenimiento Predictivo",
      description: "Estrategias de mantenimiento basadas en condición para maximizar la disponibilidad.",
      features: ["Planificación optimizada", "Reducción de costos", "Aumento de vida útil"]
    },
    {
      icon: Shield,
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado para mejorar procesos y implementar mejores prácticas.",
      features: ["Auditorías técnicas", "Planes de mejora", "Capacitación especializada"]
    },
    {
      icon: Settings,
      title: "Puesta en Marcha",
      description: "Servicios completos de instalación y puesta en marcha de equipos industriales.",
      features: ["Instalación profesional", "Pruebas de funcionamiento", "Documentación técnica"]
    },
    {
      icon: Wrench,
      title: "Mantenimiento Correctivo",
      description: "Reparaciones especializadas con diagnóstico preciso y soluciones duraderas.",
      features: ["Diagnóstico avanzado", "Reparaciones especializadas", "Garantía de calidad"]
    }
  ];

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
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-dsae-blue rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
