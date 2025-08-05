import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Zap, Settings, Wrench, PaintBucket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Productos = () => {
  const navigate = useNavigate();

  const categorias = [
    {
      icon: Zap,
      title: "Equipos Eléctricos",
      description: "En DSAE ponemos a tu alcance soluciones en equipamiento eléctrico confiable y de calidad superior, pensadas para maximizar la eficiencia de tus sistemas eléctricos y cumplir con la normativa nacional e internacional vigente.",
      productos: [
        "Interruptores termomagnéticos",
        "Transformadores de distribución",
        "TC's y TP's",
        "Medidores para código de red",
        "Medidores (Tecnología AMI)",
        "Centros de carga",
        "Contactores, relevadores, arrancadores",
        "Bancos de capacitores",
        "Motores eléctricos",
        "Filtro de armónicos activo"
      ],
      extra: "Entre otros productos. ¡Pregunta y los cotizamos!"
    },
    {
      icon: Settings,
      title: "Equipos de Control",
      description: "En DSAE te proporcionamos una línea especializada de equipos de control eléctrico, ideales para gestionar de forma eficiente motores, sistemas automatizados y procesos industriales, asegurando un alto rendimiento y cumplimiento estricto con la normatividad vigente.",
      productos: [
        "Contactores tripolares y tetrapolares",
        "Relevadores térmicos de sobrecarga",
        "Arrancadores suaves y a tensión plena",
        "Variadores de frecuencia (VFDs)",
        "PLC's (controladores lógicos programables)",
        "Temporizadores, sensores y relés de control",
        "Botoneras, estaciones de mando, pilotos y selectores",
        "Guardamotores y protectores de fase",
        "Fuentes de alimentación y módulos de interfaz"
      ],
      extra: "Entre otros productos. ¡Pregunta y los cotizamos!"
    },
    {
      icon: Wrench,
      title: "Renta y Venta de Maquinaria",
      description: "En DSAE ofrecemos soluciones integrales en renta y venta de maquinaria especializada, ideales para trabajos eléctricos, electromecánicos, de construcción e instalación. Nuestro equipo está diseñado para garantizar seguridad, productividad y cumplimiento normativo en campo.",
      productos: [],
      extra: "Contáctanos para conocer nuestro catálogo completo de maquinaria especializada."
    },
    {
      icon: Zap,
      title: "Materiales Eléctricos y de Control",
      description: "En DSAE ofrecemos una línea completa de materiales eléctricos y de control para proyectos industriales, comerciales y residenciales. Nuestros productos están seleccionados para asegurar compatibilidad, seguridad, eficiencia energética y cumplimiento normativo, facilitando la correcta instalación, operación y mantenimiento de tus sistemas eléctricos.",
      productos: [
        "Cables y conductores (THW-LS, XLP, USE, multiconductor, etc.)",
        "Canalización: tubería conduit (IMC, EMT, PVC), charolas, abrazaderas",
        "Centros de carga, pastillas, breakers y tableros",
        "Contactos, apagadores, clavijas, bases y accesorios",
        "Iluminación industrial, comercial y de emergencia",
        "Material de puesta a tierra y pararrayos",
        "Cajas y gabinetes para control y fuerza"
      ],
      extra: "Entre otros productos. ¡Pregunta y los cotizamos!"
    },
    {
      icon: PaintBucket,
      title: "Materiales de Construcción",
      description: "En DSAE ofrecemos una gama completa de materiales de construcción, incluyendo sistemas de pintura y recubrimientos, ideales para proyectos industriales, comerciales, residenciales y de infraestructura. Nuestros productos cumplen con las normas NOM, NMX, ASTM y ACI, garantizando calidad, resistencia y rendimiento en campo.",
      productos: [
        "Cemento gris y blanco, cal hidratada, mortero",
        "Agregados: arena, grava, balasto, tezontle",
        "Block, tabique rojo, tablaroca, panel de yeso",
        "Varilla, alambrón, malla electrosoldada",
        "Impermeabilizantes, selladores, adhesivos y recubrimientos especiales",
        "Bases y pedestales de concreto para transformadores y equipos",
        "Registros, ductos y canalización subterránea",
        "Anclajes, soportería, perfiles metálicos y materiales de fijación",
        "Materiales para cuartos eléctricos: muros, pisos y acabados técnicos",
        "Pinturas vinílicas, acrílicas y esmaltes",
        "Pintura epóxica y poliuretano para pisos industriales",
        "Recubrimientos anticorrosivos para estructuras metálicas",
        "Pintura conductiva y dieléctrica",
        "Solventes, selladores y productos complementarios",
        "Equipos para aplicación (rodillos, brochas, pistolas de aire)",
        "Carretillas, cubetas, palas, niveles y cintas",
        "Protección para obra (mallas, señalética, lonas)"
      ],
      extra: "Entre otros productos. ¡Pregunta y los cotizamos!"
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
                  <ShoppingCart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient">Venta de Materiales y Equipos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Suministro especializado de equipos y materiales de alta calidad para diferentes sectores industriales, 
                garantizando soluciones confiables y eficientes para cada proyecto.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {categorias.map((categoria, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-none shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green flex-shrink-0">
                      <categoria.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-foreground mb-4">
                        {categoria.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {categoria.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                {categoria.productos.length > 0 && (
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      {categoria.productos.map((producto, idx) => (
                        <div key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-dsae-green rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{producto}</span>
                        </div>
                      ))}
                    </div>
                    {categoria.extra && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-dsae-blue/10 to-dsae-green/10 rounded-lg">
                        <p className="text-dsae-blue font-medium text-center">{categoria.extra}</p>
                      </div>
                    )}
                  </CardContent>
                )}
                
                {categoria.productos.length === 0 && categoria.extra && (
                  <CardContent className="pt-0">
                    <div className="p-4 bg-gradient-to-r from-dsae-blue/10 to-dsae-green/10 rounded-lg">
                      <p className="text-dsae-blue font-medium text-center">{categoria.extra}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-2xl p-8 mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Necesitas equipos o materiales específicos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos para conocer nuestro catálogo completo y obtener cotizaciones personalizadas. 
              Te ayudamos a encontrar los productos perfectos para tu proyecto.
            </p>
            <WhatsAppButton 
              message="Hola, me interesa conocer más sobre los productos y equipos de DSAE"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productos;