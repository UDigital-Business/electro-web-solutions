
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
      title: "Subestación Eléctrica",
      description: "1 - Protección de transformador – Estudio para selección de protecciones de transformador.",
      image: "/lovable-uploads/d798b657-cf08-417b-b8cf-0da40c75f275.png",
      category: "Protección de transformador"
    },
    {
      title: "Subestación Eléctrica",
      description: "2 - Obra civil – Construcción de nave industrial",
      image: "/lovable-uploads/980b5fe6-2e03-4069-a5cc-9e4a7765989a.png",
      category: "Obra civil"
    },
    {
      title: "Subestación Eléctrica",
      description: "3- Mantenimiento a subestación – Pruebas eléctricas a transformadores",
      image: "/lovable-uploads/87e0427f-95b3-47c3-87ad-923c0a5401d8.png",
      category: "Mantenimiento"
    },
    {
      title: "Subestación Eléctrica",
      description: "4 - Estudio de coordinación de protecciones – Coordinación de protecciones a planta industrial",
      image: "/lovable-uploads/f0376457-9fbb-4f04-81ab-a1434150f370.png",
      category: "Coordinación de protecciones"
    },
    {
      title: "Subestación Eléctrica",
      description: "5 - Obra civil – Construcción de nave industrial",
      image: "/lovable-uploads/9099be27-612f-4e08-88bc-6ce2197a9495.png",
      category: "Obra civil"
    },
    {
      title: "Subestación Eléctrica",
      description: "6 - Estudio de cortocircuito – Estudio realizado a planta industrial",
      image: "/lovable-uploads/857663e9-068c-45e9-beda-f1cddc1bf1ed.png",
      category: "Estudio de cortocircuito"
    },
    {
      title: "Subestación Eléctrica",
      description: "7 - Armado de tablero de control – Instalación de CCM.",
      image: "/lovable-uploads/8affa213-e36e-4e11-bceb-215608c997c3.png",
      category: "Tablero de control"
    },
    {
      title: "Subestación Eléctrica",
      description: "8 - Obra electromecánica – Instalación de TC's y TP's.",
      image: "/lovable-uploads/f7b63d90-52fe-4958-9c50-9a6c51ec9d04.png",
      category: "Obra electromecánica"
    },
    {
      title: "Subestación Eléctrica",
      description: "Mantenimiento a subestación – Limpieza a componentes con solventes dieléctricos.",
      image: "/lovable-uploads/f1629c45-9a47-448e-9b90-58a6646ba1f2.png",
      category: "Mantenimiento"
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
