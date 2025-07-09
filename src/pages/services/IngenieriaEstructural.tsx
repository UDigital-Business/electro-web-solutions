import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, ArrowLeft, CheckCircle, FileCheck, PenTool } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const IngenieriaEstructural = () => {
  const navigate = useNavigate();

  const servicios = [
    {
      id: "dictamen",
      icon: FileCheck,
      title: "Dictamen Estructural",
      description: "La dictaminación estructural es un proceso técnico-legal mediante el cual un profesional acreditado declara si una estructura cumple con las condiciones mínimas de seguridad para seguir siendo utilizada.",
      casos: [
        "Cambio de uso o incremento de carga, por ejemplo, convertir una casa en bodega",
        "Ampliaciones o modificaciones, como añadir pisos, muros o cambios estructurales",
        "Daños por sismo, incendio, explosión o colapso parcial",
        "Edificaciones históricas o de valor patrimonial",
        "Compraventa de inmuebles industriales o comerciales"
      ],
      beneficios: [
        "Certidumbre legal y técnica para propietarios e inversionistas",
        "Prevención de riesgos y colapsos estructurales",
        "Base para reforzar o rehabilitar edificios existentes",
        "Cumplimiento normativo ante dependencias de gobierno",
        "Tranquilidad y seguridad para los usuarios del inmueble"
      ],
      proceso: "Incluye una inspección técnica del inmueble, revisión de planos, pruebas no destructivas y evaluación de daños si los hubiera. Se aplica a estructuras existentes, y se diferencia del diseño estructural porque no diseña, sino que evalúa y valida.",
      conclusion: "La dictaminación estructural es una herramienta técnica fundamental para evaluar la integridad de edificaciones existentes, especialmente en zonas sísmicas como México. Su realización está respaldada por los reglamentos de construcción, normas técnicas complementarias y leyes de protección civil."
    },
    {
      id: "diseno",
      icon: PenTool,
      title: "Diseño Estructural",
      description: "Desarrollo de estructuras especializadas para soportar instalaciones eléctricas y equipos industriales con análisis detallado de cargas y modelado 3D.",
      casos: [
        "Estructuras nuevas para instalaciones eléctricas e industriales",
        "Soporte especializado para equipos pesados",
        "Sistemas estructurales para automatización industrial",
        "Reforzamiento de estructuras existentes",
        "Análisis sísmico y de cargas dinámicas"
      ],
      beneficios: [
        "Cálculos estructurales precisos y confiables",
        "Diseño optimizado de soportes y cimentaciones",
        "Análisis de resistencia y estabilidad estructural",
        "Modelado BIM y renderizado técnico especializado",
        "Planos ejecutivos y especificaciones técnicas detalladas"
      ],
      proceso: "Incluye análisis estático y dinámico, simulación de cargas sísmicas, modelado 3D especializado y desarrollo de planos ejecutivos con especificaciones técnicas completas.",
      conclusion: "El diseño estructural especializado garantiza la seguridad, funcionalidad y durabilidad de las instalaciones, cumpliendo con todas las normativas aplicables y optimizando los recursos del proyecto."
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
                <span className="text-gradient">Servicios de Diseño Estructural y Obra Civil</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluciones especializadas en ingeniería estructural para instalaciones eléctricas, 
                industriales y proyectos de infraestructura.
              </p>
            </div>
          </div>

          <Tabs defaultValue="dictamen" className="mb-16">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1">
              {servicios.map((servicio) => (
                <TabsTrigger 
                  key={servicio.id} 
                  value={servicio.id} 
                  className="flex flex-col items-center gap-2 py-4 px-3 text-sm font-medium h-auto min-h-[80px] data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  <servicio.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-center leading-tight">
                    {servicio.id === 'dictamen' ? 'Dictamen Estructural' : 'Diseño Estructural'}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {servicios.map((servicio) => (
              <TabsContent key={servicio.id} value={servicio.id}>
                <Card className="border-none shadow-xl">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                        <servicio.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-4">
                      {servicio.title}
                    </CardTitle>
                    <p className="text-muted-foreground max-w-4xl mx-auto">
                      {servicio.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    <div className="bg-gradient-to-br from-dsae-blue/5 to-dsae-green/5 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-dsae-blue mb-4">
                        Proceso y metodología
                      </h3>
                      <p className="text-muted-foreground">{servicio.proceso}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-dsae-blue mb-4">
                        {servicio.id === 'dictamen' ? 'Casos donde es obligatorio o requerido' : 'Aplicaciones principales'}
                      </h3>
                      <ul className="space-y-3">
                        {servicio.casos.map((caso, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-dsae-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{caso}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-dsae-blue mb-4">
                        {servicio.id === 'dictamen' ? 'Beneficios de realizar un dictamen estructural' : 'Características y beneficios'}
                      </h3>
                      <ul className="space-y-3">
                        {servicio.beneficios.map((beneficio, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-dsae-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-lg p-6">
                      <h4 className="font-semibold text-dsae-blue mb-3">Importancia del servicio:</h4>
                      <p className="text-muted-foreground">{servicio.conclusion}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action Section */}
          <div className="text-center bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Necesitas servicios de ingeniería estructural?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos para obtener dictámenes estructurales o desarrollar diseños especializados para tu proyecto. 
              Nuestro equipo de ingenieros estructurales certificados está listo para garantizar la seguridad de tu inversión.
            </p>
            <WhatsAppButton 
              message="Hola, me interesa conocer más sobre los Servicios de Diseño Estructural y Obra Civil de DSAE"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IngenieriaEstructural;
