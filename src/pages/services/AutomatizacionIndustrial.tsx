
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cog, ArrowLeft, CheckCircle, Wrench, Cpu, Settings, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const AutomatizacionIndustrial = () => {
  const navigate = useNavigate();

  const servicios = [
    {
      id: "mantenimiento",
      icon: Wrench,
      title: "Mantenimiento Preventivo y Correctivo de Tableros de Control",
      description: "Servicio técnico especializado en mantenimiento preventivo y correctivo de tableros eléctricos, orientado a preservar la funcionalidad, prevenir fallas críticas y asegurar la integridad del sistema eléctrico.",
      actividades: [
        "Limpieza interna y externa del gabinete, utilizando productos dieléctricos certificados",
        "Limpieza o reemplazo de filtros de ventilación para correcta disipación térmica",
        "Medición de tensiones y corrientes en equipos activos y líneas de alimentación",
        "Inspección termográfica con cámara infrarroja para detectar puntos calientes",
        "Revisión y ajuste de conexiones eléctricas, incluyendo apriete de terminales",
        "Pruebas funcionales a interruptores termomagnéticos y disyuntores"
      ],
      normativas: [
        "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Requisitos para instalaciones eléctricas seguras",
        "NOM-029-STPS-2011: Mantenimiento de instalaciones eléctricas en centros de trabajo"
      ]
    },
    {
      id: "diseno",
      icon: Settings,
      title: "Diseño de Tableros Eléctricos de Control",
      description: "Diseño integral de tableros eléctricos de control, estructurando soluciones que combinan eficiencia operativa, orden técnico y cumplimiento normativo.",
      actividades: [
        "Diseño CAD de la distribución interna del tablero con ubicación precisa de componentes",
        "Elaboración del diagrama unifilar o multifilar de control y potencia",
        "Diseño de diagramas de comunicación para redes industriales (Modbus, Profinet, etc.)",
        "Definición de distancias mínimas de seguridad eléctrica",
        "Documentación completa para fabricación o validación"
      ],
      normativas: [
        "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Dispositivos de protección y control correctamente coordinados",
        "NOM-004-STPS-1999: Sistemas de protección y dispositivos de seguridad en maquinaria",
        "NMX-J-136-ANCE e IEC 60204-1: Diseño de tableros de control y equipos eléctricos"
      ]
    },
    {
      id: "armado",
      icon: Cpu,
      title: "Armado de Gabinetes de Control",
      description: "Servicio completo de armado profesional de gabinetes de control, enfocado en convertir planos eléctricos en soluciones físicas listas para operar.",
      actividades: [
        "Montaje preciso de equipos en platina y puerta del gabinete",
        "Cableado interno y etiquetado completo siguiendo códigos de color y numeración",
        "Pruebas de funcionamiento previas al envío",
        "Envío y puesta en marcha en sitio",
        "Instalación segura y conexiones finales en campo"
      ],
      normativas: [
        "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Instalaciones eléctricas seguras",
        "NMX-J-118/1-ANCE: Tableros de distribución de baja tensión",
        "IEC 61439 / NMX-J-620-ANCE: Tableros de control y ensambles de baja tensión",
        "NOM-029-STPS-2011: Equipo eléctrico en condiciones seguras de operación"
      ]
    },
    {
      id: "programacion",
      icon: Code,
      title: "Programación de PLC y Sistemas de Automatización",
      description: "Desarrollo de soluciones personalizadas de programación de PLC y diseño de interfaces HMI, orientadas a digitalizar, controlar y optimizar procesos industriales.",
      actividades: [
        "Interpretación escrita de la lógica de proceso con documentación clara",
        "Programación del controlador PLC en lenguajes estándar (Ladder, FBD, ST)",
        "Integración de comunicación industrial (Modbus, Profinet, Ethernet/IP)",
        "Diseño y programación de interfaz HMI con navegación intuitiva",
        "Instalación de punto de acceso remoto para monitoreo y diagnóstico"
      ],
      normativas: [
        "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Instalación segura de equipos de control automático",
        "IEC 61131-3: Estándar internacional para programación de PLC",
        "NOM-004-STPS-1999: Dispositivos de seguridad en sistemas automatizados"
      ],
      nota: "La propiedad intelectual de la lógica de programación y del diseño de HMI pertenece a DSAE hasta que finalice el periodo de garantía técnica pactado con el cliente."
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
                  <Cog className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient">Servicios de Automatización Industrial</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluciones avanzadas en automatización para optimizar procesos industriales 
                con tecnología de vanguardia y sistemas inteligentes.
              </p>
            </div>
          </div>

          <Tabs defaultValue="mantenimiento" className="mb-16">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="mantenimiento" className="text-xs">Mantenimiento</TabsTrigger>
              <TabsTrigger value="diseno" className="text-xs">Diseño</TabsTrigger>
              <TabsTrigger value="armado" className="text-xs">Armado</TabsTrigger>
              <TabsTrigger value="programacion" className="text-xs">Programación</TabsTrigger>
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
                    <div>
                      <h3 className="text-lg font-semibold text-dsae-blue mb-4">
                        ¿Qué incluye nuestro servicio?
                      </h3>
                      <ul className="space-y-3">
                        {servicio.actividades.map((actividad, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-dsae-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{actividad}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-dsae-blue mb-4">
                        Justificación normativa
                      </h3>
                      <ul className="space-y-3">
                        {servicio.normativas.map((normativa, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-dsae-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{normativa}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {servicio.nota && (
                      <div className="bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-lg p-4">
                        <h4 className="font-semibold text-dsae-blue mb-2">Nota importante:</h4>
                        <p className="text-sm text-muted-foreground">{servicio.nota}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action Section */}
          <div className="text-center bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Necesitas automatización industrial especializada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos para desarrollar soluciones de automatización personalizadas para tu industria. 
              Nuestro equipo de ingenieros especializados está listo para optimizar tus procesos.
            </p>
            <WhatsAppButton 
              message="Hola, me interesa conocer más sobre los Servicios de Automatización Industrial de DSAE"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomatizacionIndustrial;
