
import { Monitor, Smartphone, HardDrive, Cpu, Camera, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ProductsSection() {
  const products = [
    {
      icon: Monitor,
      title: "Sistemas de Monitoreo Online",
      description: "Soluciones de monitoreo continuo 24/7 para equipos críticos con alertas automáticas.",
      image: "/lovable-uploads/16871f7f-87c2-4efb-b282-892bc6f67a6b.png"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps especializadas para recolección de datos y análisis en campo con sincronización en tiempo real.",
      image: "/lovable-uploads/f1629c45-9a47-448e-9b90-58a6646ba1f2.png"
    },
    {
      icon: HardDrive,
      title: "Equipos de Adquisición",
      description: "Colectores de datos portátiles de alta precisión para análisis de vibraciones y parámetros eléctricos.",
      image: "/lovable-uploads/be5d304a-3231-4e6d-80a8-b71dec35139f.png"
    },
    {
      icon: Cpu,
      title: "Software de Análisis",
      description: "Plataformas avanzadas de análisis con algoritmos de inteligencia artificial para diagnóstico predictivo.",
      image: "/lovable-uploads/9165fa29-0cb8-48dd-87c9-303fd4f6c8e8.png"
    },
    {
      icon: Camera,
      title: "Cámaras Termográficas",
      description: "Equipos de termografía infrarroja para detección de puntos calientes y análisis térmico.",
      image: "/lovable-uploads/80b5c29a-6d35-4410-8284-67a39620f67c.png"
    },
    {
      icon: Radio,
      title: "Sensores Inalámbricos",
      description: "Red de sensores IoT para monitoreo distribuido con conectividad avanzada.",
      image: "/lovable-uploads/79b025a8-9cb8-43e3-855c-15ac0aded1b6.png"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-muted/30 overflow-hidden">
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

        <div className="relative w-screen left-1/2 transform -translate-x-1/2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in h-full bg-gradient-to-br from-background to-background/95">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg group-hover:bg-white transition-colors duration-300">
                        <product.icon className="h-6 w-6 text-dsae-blue" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-sm text-gray-800 font-medium">Tecnología Avanzada</p>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-dsae-blue transition-colors duration-300">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4 bg-white/95 hover:bg-white shadow-lg border-2 border-dsae-blue/20 hover:border-dsae-blue/40 transition-all duration-300" />
            <CarouselNext className="hidden md:flex right-4 bg-white/95 hover:bg-white shadow-lg border-2 border-dsae-blue/20 hover:border-dsae-blue/40 transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
