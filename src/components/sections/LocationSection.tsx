
import { MapPin, Phone, Mail } from "lucide-react";

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Nuestra Ubicación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visítanos en nuestras oficinas o contáctanos para agendar una cita
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dsae-blue/10 rounded-full">
                  <MapPin className="h-6 w-6 text-dsae-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Nicolas Copérnico 1510 colonia Moctezuma Poniente CP 45059 Zapopan Jalisco
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dsae-blue/10 rounded-full">
                  <Phone className="h-6 w-6 text-dsae-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+52 3321770750</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dsae-green/10 rounded-full">
                  <Mail className="h-6 w-6 text-dsae-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">contacto@dsae.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div style={{ width: "100%" }}>
                <iframe 
                  width="100%" 
                  height="400" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av.%20Nicolas%20Copérnico%201510%20colonia%20Moctezuma%20Poniente%20CP%2045059%20Zapopan%20Jalisco+(Av.%20Nicolas%20Copérnico%201510)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Ubicación DSAE"
                  className="w-full h-96 rounded-2xl"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
