
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "./ServiceCard";
import { automatizacionServices } from "@/data/automatizacionServices";

export const ServicesTabs = () => {
  return (
    <Tabs defaultValue="mantenimiento" className="mb-16">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
        {automatizacionServices.map((servicio) => (
          <TabsTrigger key={servicio.id} value={servicio.id} className="text-xs flex items-center gap-1">
            <servicio.icon className="h-3 w-3" />
            <span className="hidden sm:inline">
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
