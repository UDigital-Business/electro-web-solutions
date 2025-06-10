
import { Monitor, Smartphone, HardDrive, Cpu, Camera, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductsSection() {
  const products = [
    {
      icon: Monitor,
      title: "Sistemas de Monitoreo Online",
      description: "Soluciones de monitoreo continuo 24/7 para equipos críticos con alertas automáticas.",
      image: "/lovable-uploads/fbfb859c-6f80-49f8-a039-8d205b7248e6.png"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps especializadas para recolección de datos y análisis en campo con sincronización en tiempo real.",
      image: "/lovable-uploads/917417b8-c06f-4091-9607-043f64022461.png"
    },
    {
      icon: HardDrive,
      title: "Equipos de Adquisición",
      description: "Colectores de datos portátiles de alta precisión para análisis de vibraciones y parámetros eléctricos.",
      image: "/lovable-uploads/6f110ccc-71eb-4fae-8519-d120f2ce161d.png"
    },
    {
      icon: Cpu,
      title: "Software de Análisis",
      description: "Plataformas avanzadas de análisis con algoritmos de inteligencia artificial para diagnóstico predictivo.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Camera,
      title: "Cámaras Termográficas",
      description: "Equipos de termografía infrarroja para detección de puntos calientes y análisis térmico.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Radio,
      title: "Sensores Inalámbricos",
      description: "Red de sensores IoT para monitoreo distribuido con conectividad avanzada.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80"
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

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
