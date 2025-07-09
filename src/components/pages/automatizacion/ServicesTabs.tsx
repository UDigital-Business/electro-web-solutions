
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "./ServiceCard";
import { automatizacionServices } from "@/data/automatizacionServices";

export const ServicesTabs = () => {
  return (
    <Tabs defaultValue="mantenimiento" className="mb-16">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto p-1">
        {automatizacionServices.map((servicio) => (
          <TabsTrigger 
            key={servicio.id} 
            value={servicio.id} 
            className="flex flex-col items-center gap-2 py-4 px-3 text-sm font-medium h-auto min-h-[80px] data-[state=active]:bg-background data-[state=active]:text-foreground"
          >
            <servicio.icon className="h-5 w-5 flex-shrink-0" />
            <span className="text-center leading-tight">
              {servicio.id === 'mantenimiento' && 'Mantenimiento'}
              {servicio.id === 'diseno' && 'Diseño'}
              {servicio.id === 'armado' && 'Armado'}
              {servicio.id === 'programacion' && 'Programación'}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {automatizacionServices.map((servicio) => (
        <TabsContent key={servicio.id} value={servicio.id}>
          <ServiceCard service={servicio} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
