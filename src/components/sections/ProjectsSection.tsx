
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ProjectsSection() {
  const projects = [
    {
      title: "Instalación Eléctrica Industrial",
      description: "Proyecto de modernización de sistema eléctrico en planta industrial",
      image: "/lovable-uploads/16871f7f-87c2-4efb-b282-892bc6f67a6b.png",
      category: "Instalación Eléctrica"
    },
    {
      title: "Subestación Eléctrica",
      description: "Diseño e instalación de subestación eléctrica de media tensión",
      image: "/lovable-uploads/f1629c45-9a47-448e-9b90-58a6646ba1f2.png",
      category: "Subestación"
    },
    {
      title: "Sistema de Automatización",
      description: "Implementación de sistema de control y automatización industrial",
      image: "/lovable-uploads/be5d304a-3231-4e6d-80a8-b71dec35139f.png",
      category: "Automatización"
    },
    {
      title: "Proyecto de Eficiencia Energética",
      description: "Optimización del consumo energético en instalaciones comerciales",
      image: "/lovable-uploads/9165fa29-0cb8-48dd-87c9-303fd4f6c6e8.png",
      category: "Eficiencia Energética"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Nuestros Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre algunos de los proyectos exitosos que hemos realizado, 
            demostrando nuestra experiencia y compromiso con la excelencia en cada instalación.
          </p>
        </div>

        <div className="mx-auto max-w-[1400px] w-[80%] lg:w-[90%] xl:w-[80%]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 left-4 bg-dsae-blue/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                          <h3 className="font-bold text-gray-800 mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                      </div>
                    </div>
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
