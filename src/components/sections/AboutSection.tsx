
import { Users, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Desarrollamos soluciones en energía e infraestructura que llevan a las empresas a operar de forma más segura, eficiente y sostenible, mediante análisis electromecánicos y obra civil especializada."
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Consolidarnos como una empresa líder en servicios de energía e infraestructura, reconocidos por impulsar el crecimiento seguro, eficiente y sostenible de nuestros clientes."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Compromiso, Integridad, Calidad, Innovación y Lealtad son los pilares que guían nuestro trabajo diario."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Sobre Nosotros</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DSAE (Desarrollo y Soluciones en Análisis Electromecánicos) fue creado con un objetivo muy claro: 
            ofrecer soluciones técnicas integrales en sistemas eléctricos, estructurales e industriales.
          </p>
        </div>

        <div className="mb-16">
          <div className="space-y-6 animate-slide-in-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground text-center">Nuestra Historia</h3>
            <p className="text-muted-foreground">
              DSAE (Desarrollo y Soluciones en Análisis Electromecánicos) fue creado con un objetivo muy claro: 
              ofrecer soluciones técnicas integrales en sistemas eléctricos, estructurales e industriales, con un 
              enfoque en calidad, eficiencia y cumplimiento normativo.
            </p>
            <p className="text-muted-foreground">
              Nuestra historia comienza en campo detectando que muchas instalaciones carecían de estudios confiables, 
              proyectos bien definidos o mantenimientos especializados, y que esto ponía en riesgo tanto la operación 
              como la seguridad en las empresas.
            </p>
            <p className="text-muted-foreground">
              Por eso formamos un equipo multidisciplinario que hoy brinda servicios como: Servicios Eléctricos, 
              Servicios de Automatización Industrial, Servicios de Diseño Estructural y Obra Civil, y Venta de Productos.
            </p>
            <p className="text-muted-foreground font-semibold">
              Más que hacer estudios, diseñamos soluciones reales para que cada instalación opere con seguridad, 
              eficiencia y claridad técnica.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Users className="h-8 w-8 text-dsae-blue" />
              <div className="text-center">
                <div className="font-semibold text-foreground">Equipo Multidisciplinario</div>
                <div className="text-sm text-muted-foreground">Ingenieros especializados trabajando para usted</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-dsae-blue" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
