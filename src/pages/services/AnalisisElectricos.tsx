
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const AnalisisElectricos = () => {
  const navigate = useNavigate();

  const subServicios = [
    {
      title: "Análisis de Calidad de Energía",
      description: "Evaluación completa de la calidad de la energía eléctrica para identificar perturbaciones y optimizar el suministro.",
      caracteristicas: ["Medición de armónicos", "Análisis de flicker", "Evaluación de desequilibrios"]
    },
    {
      title: "Termografía Infrarroja",
      description: "Inspección térmica de equipos eléctricos para detectar puntos calientes y prevenir fallas.",
      caracteristicas: ["Detección de sobrecargas", "Identificación de conexiones defectuosas", "Reportes termográficos detallados"]
    },
    {
      title: "Medición de Parámetros Eléctricos",
      description: "Monitoreo y análisis de parámetros eléctricos críticos para optimizar el rendimiento del sistema.",
      caracteristicas: ["Medición de potencia", "Factor de potencia", "Análisis de consumo energético"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
            
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient">Análisis Eléctricos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Evaluación completa de sistemas eléctricos para optimizar eficiencia y prevenir fallas 
                en instalaciones industriales y comerciales.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {subServicios.map((servicio, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-none shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {servicio.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{servicio.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-dsae-blue">Características:</h4>
                    <ul className="space-y-1">
                      {servicio.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-dsae-green mr-2 flex-shrink-0" />
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Necesitas nuestros servicios de análisis eléctricos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos para una evaluación personalizada de tu proyecto. 
              Nuestro equipo de expertos está listo para ayudarte a optimizar tus sistemas eléctricos.
            </p>
            <WhatsAppButton 
              message="Hola, me interesa conocer más sobre los servicios de Análisis Eléctricos de DSAE"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalisisElectricos;
