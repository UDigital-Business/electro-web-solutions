
import { Users, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Proporcionar soluciones integrales de análisis electromecánicos que optimicen el rendimiento y extiendan la vida útil de los equipos industriales."
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Ser líderes reconocidos en el sector de análisis electromecánicos, innovando constantemente para satisfacer las necesidades cambiantes del mercado."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Excelencia, integridad, innovación y compromiso con la satisfacción del cliente son los pilares que guían nuestro trabajo diario."
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
            Con más de 15 años de experiencia en el sector, somos especialistas en el desarrollo 
            y implementación de soluciones avanzadas para el análisis electromecánico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground">Nuestra Historia</h3>
            <p className="text-muted-foreground">
              DSAE nació de la visión de crear un puente entre la tecnología avanzada y las necesidades 
              reales de la industria. Fundada por un equipo de ingenieros especialistas, hemos crecido 
              hasta convertirnos en una referencia en análisis electromecánicos.
            </p>
            <p className="text-muted-foreground">
              Nuestro enfoque se centra en la innovación continua, la calidad excepcional y el 
              compromiso inquebrantable con nuestros clientes. Cada proyecto es una oportunidad 
              para demostrar nuestra experiencia y dedicación.
            </p>
            <div className="flex items-center space-x-4">
              <Users className="h-8 w-8 text-dsae-blue" />
              <div>
                <div className="font-semibold text-foreground">Equipo Multidisciplinario</div>
                <div className="text-sm text-muted-foreground">Ingenieros especializados trabajando para usted</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
              alt="Equipo trabajando en análisis"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
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
