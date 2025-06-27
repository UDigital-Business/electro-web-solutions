
import { ShoppingCart, Lightbulb, Hammer, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductsSection() {
  const products = [
    {
      icon: ShoppingCart,
      title: "Venta de Equipo Eléctrico",
      description: "Suministro especializado de equipos eléctricos de alta calidad para diferentes sectores industriales.",
      areas: ["Innovación y tecnología", "Construcción", "Área eléctrica"]
    },
    {
      icon: Lightbulb,
      title: "Innovación y Tecnología",
      description: "Soluciones tecnológicas avanzadas para optimizar procesos industriales y comerciales.",
      areas: ["Sistemas inteligentes", "Automatización", "Monitoreo digital"]
    },
    {
      icon: Hammer,
      title: "Construcción",
      description: "Equipos especializados para proyectos de construcción e infraestructura eléctrica.",
      areas: ["Herramientas especializadas", "Equipos de seguridad", "Materiales certificados"]
    },
    {
      icon: Zap,
      title: "Área Eléctrica",
      description: "Componentes y equipos eléctricos para instalaciones industriales y comerciales.",
      areas: ["Dispositivos de protección", "Sistemas de control", "Instrumentación"]
    }
  ];

  return (
    <section id="productos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Nuestros Productos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipos eléctricos especializados de alta calidad para satisfacer las necesidades 
            de innovación, construcción y desarrollo eléctrico de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg hover:scale-105 animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                  {product.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-dsae-blue">Áreas de aplicación:</h4>
                  <ul className="space-y-1">
                    {product.areas.map((area, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-dsae-green rounded-full mr-2 flex-shrink-0"></span>
                        {area}
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
  );
}
