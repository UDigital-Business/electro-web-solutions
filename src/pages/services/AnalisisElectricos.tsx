
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, ArrowLeft, Shield, AlertTriangle, Network, Building2, Wrench, Activity, Settings, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const AnalisisElectricos = () => {
  const navigate = useNavigate();

  const subServicios = [
    {
      id: "arco-electrico",
      title: "Arco Eléctrico",
      icon: Shield,
      description: "Evaluación cuantitativa del riesgo térmico en equipos eléctricos energizados.",
      content: {
        intro: "El estudio de arco eléctrico es una evaluación cuantitativa del riesgo térmico que enfrenta el personal cuando realiza actividades en equipos eléctricos energizados o cercanos a ellos. El objetivo principal es calcular la energía incidente (expresada en cal/cm²) que se liberaría durante un evento de arco eléctrico y así determinar:",
        objetivos: [
          "El nivel de riesgo de la actividad",
          "La distancia límite de protección",
          "El tipo de equipo de protección personal (EPP) necesario para realizar la actividad",
          "Recomendaciones de etiquetado, procedimientos y entrenamiento"
        ],
        peligros: [
          "Quemaduras por energía incidente (hasta 20,000 °C en el punto de arco)",
          "Onda de presión que puede lanzar proyectiles y a los trabajadores",
          "Daño severo al equipo eléctrico",
          "Ruido de más de 160 dB"
        ],
        normativas: [
          "NOM-029-STPS-2011: Prevención de riesgos eléctricos",
          "NOM-017-STPS-2011: Uso de equipo de protección personal (EPP)",
          "NOM-001-SEDE-2012: Medidas especiales de seguridad ante riesgos eléctricos"
        ],
        beneficios: [
          "Mayor seguridad del personal operativo y de mantenimiento",
          "Reducción de accidentes laborales eléctricos",
          "Cumplimiento con normativas nacionales e internacionales",
          "Continuidad operativa y menor riesgo legal",
          "Conciencia y cultura de seguridad eléctrica en la empresa"
        ]
      }
    },
    {
      id: "cortocircuito",
      title: "Estudio de Cortocircuito",
      icon: AlertTriangle,
      description: "Análisis técnico para determinar las magnitudes de corrientes de falla en sistemas eléctricos.",
      content: {
        intro: "Los estudios de cortocircuito son estudios técnicos realizados en sistemas eléctricos para determinar las magnitudes de las corrientes de falla que pueden ocurrir en caso de una falla eléctrica. Este análisis permite verificar la capacidad interruptora de los equipos de protección y asegurar la seguridad del sistema y del personal.",
        aplicaciones: [
          "Dispositivos de protección (fusibles, interruptores, relevadores)",
          "Equipos de maniobra",
          "Sistemas de puesta a tierra",
          "Evaluación del nivel de riesgo por arco eléctrico",
          "Coordinación de protecciones"
        ],
        beneficios: [
          "Ayuda a evitar apagones y tiempo de inactividad prolongados",
          "Reduce el riesgo de daños e incendios debido a fallas eléctricas",
          "Aumenta la seguridad del personal",
          "Permite cumplir regulaciones, como la NOM-001-SEDE-2012 y el Código de Red",
          "Aumenta la robustez del sistema eléctrico"
        ],
        normativas: [
          "Código de Red: Todos los Centros de Carga en media o alta tensión",
          "NOM-001-SEDE-2012: Equipos de protección adecuadamente dimensionados",
          "Manual de Interconexión de CFE: Evaluación en punto de interconexión"
        ]
      }
    },
    {
      id: "codigo-red",
      title: "Cumplimiento del Código de Red",
      icon: Network,
      description: "Estudios técnicos especializados para cumplir con los requerimientos del Código de Red.",
      content: {
        intro: "En DSAE ayudamos a las empresas a cumplir de forma integral con los requerimientos del Código de Red, mediante estudios técnicos especializados que garantizan la estabilidad, eficiencia y seguridad de sus sistemas eléctricos.",
        definicion: "El Código de Red es una regulación emitida por la Comisión Reguladora de Energía (CRE) en México, que establece los requisitos técnicos que deben cumplir los centros de carga conectados al Sistema Eléctrico Nacional.",
        servicios: [
          "Estudio de Cortocircuito",
          "Coordinación de Protecciones",
          "Evaluación de la Calidad de Energía",
          "Informe de Cumplimiento Integral"
        ],
        normativas: [
          "Código de Red (CRE, última versión vigente)",
          "NOM-001-SEDE-2012",
          "IEEE C37, IEEE 242, IEEE 519"
        ],
        beneficios: [
          "Evita sanciones y multas por parte de la CRE",
          "Garantiza la continuidad operativa al minimizar interrupciones",
          "Protege la infraestructura eléctrica",
          "Mejora la eficiencia energética",
          "Facilita la integración a la Red Eléctrica Nacional",
          "Incrementa la competitividad y confiabilidad de la empresa"
        ]
      }
    },
    {
      id: "diseno-instalaciones",
      title: "Diseño de Instalaciones Eléctricas",
      icon: Building2,
      description: "Proceso técnico especializado para la planeación y cálculo de sistemas eléctricos.",
      content: {
        intro: "El diseño de instalaciones eléctricas constituye un proceso técnico especializado orientado a la planeación, cálculo y representación gráfica de los sistemas eléctricos que abastecerán de energía a una edificación.",
        servicios: [
          "Levantamiento en sitio",
          "Elaboración de diagramas unifilares",
          "Distribución y balanceo de cargas eléctricas",
          "Planos de instalación",
          "Estudio de iluminación"
        ],
        normativas: [
          "NOM-001-SEDE-2012 – Instalaciones eléctricas",
          "NOM-007-ENER-2014 – Eficiencia energética para sistemas de alumbrado",
          "NMX-J-136-ANCE-2007 – Canalizaciones eléctricas"
        ],
        beneficios: [
          "Base sólida para la ejecución del proyecto",
          "Prevención de riesgos",
          "Optimización de recursos",
          "Cumplimiento de estándares técnicos y legales"
        ]
      }
    },
    {
      id: "obra-electromecanica",
      title: "Obra Electromecánica",
      icon: Settings,
      description: "Ejecución especializada de instalaciones eléctricas y mecánicas en proyectos de infraestructura.",
      content: {
        intro: "El servicio de obra electromecánica comprende la ejecución especializada de instalaciones eléctricas y mecánicas en proyectos de infraestructura industrial, comercial, institucional o de servicios.",
        actividades: [
          "Suministro, montaje y conexión de canalizaciones eléctricas",
          "Instalación y tendido de conductores eléctricos",
          "Montaje electromecánico de equipos",
          "Supervisión, control de calidad y cumplimiento normativo"
        ],
        normativas: [
          "NOM-001-SEDE-2012 – Instalaciones eléctricas",
          "NOM-002-SEDE-2010 – Requisitos de seguridad",
          "NMX-J-549-ANCE-2005 – Equipos electromecánicos",
          "NRF-001-CFE y NRF-026-CFE – Normas técnicas"
        ]
      }
    },
    {
      id: "calidad-energia",
      title: "Estudios de Calidad de Energía y Eficiencia Energética",
      icon: Activity,
      description: "Estudios especializados para garantizar un suministro eléctrico estable y eficiente.",
      content: {
        intro: "En DSAE ofrecemos estudios especializados en calidad de energía y eficiencia energética que permiten garantizar un suministro eléctrico estable, eficiente y confiable.",
        servicios: [
          "Evaluación del Factor de Potencia",
          "Análisis de Daño en Equipos Eléctricos",
          "Diagnóstico de Activación de Protecciones",
          "Dimensionamiento de Equipo Eléctrico",
          "Mejoramiento de la Calidad de la Energía"
        ],
        normativas: [
          "NOM-001-SEDE-2012: Normas mexicanas para instalaciones eléctricas",
          "IEEE 519: Límites y recomendaciones para armónicos",
          "Código de Red de la CFE: Requisitos para interconexión"
        ],
        ventajas: [
          "Reducir costos operativos mediante optimización del consumo",
          "Proteger equipos ante daños por perturbaciones",
          "Garantizar la continuidad operativa",
          "Cumplir con normativas para evitar sanciones",
          "Obtener diagnósticos precisos para decisiones estratégicas"
        ]
      }
    },
    {
      id: "mantenimiento",
      title: "Mantenimiento a Subestaciones Eléctricas",
      icon: Wrench,
      description: "Proceso fundamental para garantizar la seguridad y continuidad operativa de instalaciones industriales.",
      content: {
        intro: "El mantenimiento a subestaciones eléctricas es un proceso fundamental para garantizar la seguridad, la eficiencia y la continuidad operativa de las instalaciones industriales.",
        actividades: [
          "Estudio termográfico previo",
          "Mantenimiento preventivo",
          "Pruebas eléctricas",
          "Estudios de aceite dieléctrico",
          "Estudio termográfico posterior"
        ],
        recomendaciones: "Se recomienda que el mantenimiento a las subestaciones eléctricas se realice por lo menos una vez al año, aunque dependiendo de la naturaleza de la industria el tiempo podría ser menor.",
        normativa: "En México, es obligatorio realizar el mantenimiento a las subestaciones eléctricas, debido a lo establecido por la NOM-029-STPS-2011."
      }
    },
    {
      id: "verificacion",
      title: "Verificación de Instalaciones Eléctricas",
      icon: CheckCircle2,
      description: "Servicio fundamental para el cumplimiento regulatorio y conexión formal a la red de CFE.",
      content: {
        intro: "En DSAE ofrecemos el Servicio de Verificación de Instalaciones Eléctricas como parte fundamental del cumplimiento regulatorio y la conexión formal a la red de CFE.",
        definicion: "La verificación eléctrica es un proceso técnico-normativo realizado por una Unidad de Verificación de Instalaciones Eléctricas (UVIE) acreditada ante la EMA y aprobada por la CRE.",
        servicios: [
          "Revisión detallada de la instalación eléctrica",
          "Evaluación del cumplimiento normativo",
          "Emisión del dictamen UVIE",
          "Acompañamiento técnico y gestoría"
        ],
        requisitos: [
          "Industrias y comercios en media y alta tensión",
          "Usuarios que amplían su demanda contratada",
          "Proyectos de generación distribuida o interconectada",
          "Nuevas construcciones que necesitan formalizar su conexión con CFE"
        ],
        beneficios: [
          "Asegura el cumplimiento legal y técnico de la instalación",
          "Facilita la obtención del contrato con CFE",
          "Evita rechazos, sanciones y retrasos en la interconexión",
          "Protege la instalación y a los usuarios finales",
          "Reduce riesgos por fallas o accidentes eléctricos"
        ]
      }
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
                <span className="text-gradient">Servicios Eléctricos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluciones integrales en sistemas eléctricos con cumplimiento normativo y estudios especializados 
                para garantizar eficiencia y seguridad en sus instalaciones.
              </p>
            </div>
          </div>

          <Tabs defaultValue="arco-electrico" className="mb-16">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 h-auto p-2 mb-8 w-full">
              {subServicios.map((servicio) => (
                <TabsTrigger 
                  key={servicio.id} 
                  value={servicio.id}
                  className="flex flex-col items-center justify-center p-2 sm:p-3 h-auto text-xs min-h-[60px] sm:min-h-[70px] w-full"
                >
                  <servicio.icon className="h-4 w-4 mb-1 flex-shrink-0" />
                  <span className="text-center leading-tight text-[10px] sm:text-xs break-words hyphens-auto max-w-full">
                    {servicio.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {subServicios.map((servicio) => (
              <TabsContent key={servicio.id} value={servicio.id}>
                <Card className="border-none shadow-lg">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                        <servicio.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-bold text-foreground">
                      {servicio.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground mt-2">
                      {servicio.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    <div>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {servicio.content.intro}
                      </p>
                    </div>

                    {servicio.content.objetivos && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Objetivos:</h4>
                        <ul className="space-y-2">
                          {servicio.content.objetivos.map((objetivo, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="w-2 h-2 bg-dsae-green rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                              <span>{objetivo}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.peligros && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Peligros Asociados:</h4>
                        <ul className="space-y-2">
                          {servicio.content.peligros.map((peligro, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <AlertTriangle className="h-4 w-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                              <span>{peligro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.aplicaciones && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Aplicaciones:</h4>
                        <ul className="space-y-2">
                          {servicio.content.aplicaciones.map((aplicacion, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="w-2 h-2 bg-dsae-green rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                              <span>{aplicacion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.servicios && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Servicios Incluidos:</h4>
                        <ul className="space-y-2">
                          {servicio.content.servicios.map((service, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="w-2 h-2 bg-dsae-green rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.actividades && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Actividades Clave:</h4>
                        <ul className="space-y-2">
                          {servicio.content.actividades.map((actividad, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="w-2 h-2 bg-dsae-green rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                              <span>{actividad}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.ventajas && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Ventajas:</h4>
                        <ul className="space-y-2">
                          {servicio.content.ventajas.map((ventaja, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-dsae-green mr-3 mt-1 flex-shrink-0" />
                              <span>{ventaja}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.beneficios && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Beneficios:</h4>
                        <ul className="space-y-2">
                          {servicio.content.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-dsae-green mr-3 mt-1 flex-shrink-0" />
                              <span>{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.requisitos && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">¿Quiénes lo Requieren?:</h4>
                        <ul className="space-y-2">
                          {servicio.content.requisitos.map((requisito, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="w-2 h-2 bg-dsae-green rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                              <span>{requisito}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.normativas && (
                      <div>
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Normatividad Aplicable:</h4>
                        <ul className="space-y-2">
                          {servicio.content.normativas.map((norma, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="w-2 h-2 bg-dsae-blue rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                              <span>{norma}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {servicio.content.definicion && (
                      <div className="bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-lg p-6">
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Definición:</h4>
                        <p className="text-muted-foreground">{servicio.content.definicion}</p>
                      </div>
                    )}

                    {servicio.content.recomendaciones && (
                      <div className="bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-lg p-6">
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Recomendaciones:</h4>
                        <p className="text-muted-foreground">{servicio.content.recomendaciones}</p>
                      </div>
                    )}

                    {servicio.content.normativa && (
                      <div className="bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-lg p-6">
                        <h4 className="font-semibold text-dsae-blue mb-3 text-lg">Marco Normativo:</h4>
                        <p className="text-muted-foreground">{servicio.content.normativa}</p>
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
              ¿Necesitas nuestros servicios eléctricos especializados?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos para una evaluación personalizada de tu proyecto. 
              Nuestro equipo de expertos está listo para ayudarte a optimizar tus sistemas eléctricos con cumplimiento normativo total.
            </p>
            <WhatsAppButton 
              message="Hola, me interesa conocer más sobre los servicios eléctricos especializados de DSAE"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalisisElectricos;
