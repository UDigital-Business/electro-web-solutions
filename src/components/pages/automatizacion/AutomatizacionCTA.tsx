
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const AutomatizacionCTA = () => {
  return (
    <div className="text-center bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-2xl p-8 animate-fade-in">
      <h3 className="text-2xl font-bold mb-4 text-foreground">
        ¿Necesitas automatización industrial especializada?
      </h3>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Contáctanos para desarrollar soluciones de automatización personalizadas para tu industria. 
        Nuestro equipo de ingenieros especializados está listo para optimizar tus procesos.
      </p>
      <WhatsAppButton 
        message="Hola, me interesa conocer más sobre los Servicios de Automatización Industrial de DSAE"
        size="lg"
      />
    </div>
  );
};
