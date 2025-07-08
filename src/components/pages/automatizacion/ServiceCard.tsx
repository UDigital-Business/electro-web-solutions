
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    actividades: string[];
    normativas: string[];
    nota?: string;
  };
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = service.icon;

  return (
    <Card className="border-none shadow-xl">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground mb-4">
          {service.title}
        </CardTitle>
        <p className="text-muted-foreground max-w-4xl mx-auto">
          {service.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-dsae-blue mb-4">
            ¿Qué incluye nuestro servicio?
          </h3>
          <ul className="space-y-3">
            {service.actividades.map((actividad, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dsae-green mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{actividad}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-dsae-blue mb-4">
            Justificación normativa
          </h3>
          <ul className="space-y-3">
            {service.normativas.map((normativa, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dsae-green mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{normativa}</span>
              </li>
            ))}
          </ul>
        </div>

        {service.nota && (
          <div className="bg-gradient-to-br from-dsae-blue/10 to-dsae-green/10 rounded-lg p-4">
            <h4 className="font-semibold text-dsae-blue mb-2">Nota importante:</h4>
            <p className="text-sm text-muted-foreground">{service.nota}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
