
import { Cog } from "lucide-react";

export const AutomatizacionHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
          <Cog className="h-12 w-12 text-white" />
        </div>
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-gradient">Servicios de Automatización Industrial</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Soluciones avanzadas en automatización para optimizar procesos industriales 
        con tecnología de vanguardia y sistemas inteligentes.
      </p>
    </div>
  );
};
