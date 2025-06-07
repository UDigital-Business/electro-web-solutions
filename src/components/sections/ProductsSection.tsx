
import { Monitor, Smartphone, HardDrive, Cpu, Camera, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductsSection() {
  const products = [
    {
      icon: Monitor,
      title: "Sistemas de Monitoreo Online",
      description: "Soluciones de monitoreo continuo 24/7 para equipos críticos con alertas automáticas.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps especializadas para recolección de datos y análisis en campo con sincronización en tiempo real.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: HardDrive,
      title: "Equipos de Adquisición",
      description: "Colectores de datos portátiles de alta precisión para análisis de vibraciones y parámetros eléctricos.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Cpu,
      title: "Software de Análisis",
      description: "Plataformas avanzadas de análisis con algoritmos de inteligencia artificial para diagnóstico predictivo.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Camera,
      title: "Cámaras Termográficas",
      description: "Equipos de termografía infrarroja para detección de puntos calientes y análisis térmico.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Radio,
      title: "Sensores Inalámbricos",
      description: "Red de sensores IoT para monitoreo distribuido con conectividad avanzada.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&q=80"
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
            Tecnología de vanguardia diseñada para optimizar sus procesos de análisis 
            y mantenimiento electromecánico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-full">
                  <product.icon className="h-6 w-6 text-dsae-blue" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                  {product.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
