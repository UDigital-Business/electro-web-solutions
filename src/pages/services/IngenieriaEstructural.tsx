
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IngenieriaEstructural = () => {
  const navigate = useNavigate();

  const subServicios = [
    {
      title: "Diseño Estructural",
      description: "Desarrollo de estructuras especializadas para soportar instalaciones eléctricas y equipos industriales.",
      caracteristicas: ["Cálculos estructurales", "Diseño de soportes", "Análisis de resistencia"]
    },
    {
      title: "Análisis de Cargas",
      description: "Evaluación detallada de cargas y esfuerzos para garantizar la estabilidad estructural.",
      caracteristicas: ["Análisis estático", "Análisis dinámico", "Simulación de cargas sísmicas"]
    },
    {
      title: "Modelado 3D Especializado",
      description: "Creación de modelos tridimensionales precisos para visualización y análisis estructural.",
      caracteristicas: ["Modelado BIM", "Renderizado técnico", "Planos especializados"]
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
                  <Building className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient">Desarrollo de Ingeniería Estructural</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Diseño y desarrollo de estructuras especializadas para instalaciones eléctricas 
                y proyectos industriales.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>
    </div>
  );
};

export default IngenieriaEstructural;
