
import { MapPin, Clock, Phone, Mail } from "lucide-react";

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
                    Guadalajara, Jalisco, México
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dsae-green/10 rounded-full">
                  <Clock className="h-6 w-6 text-dsae-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horarios de Atención</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dsae-blue/10 rounded-full">
                  <Phone className="h-6 w-6 text-dsae-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+52 333 447 1899</p>
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
              <iframe
                src="https://maps.app.goo.gl/y3YC84TP2DNEn62i8?g_st=aw"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
                title="Ubicación DSAE"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
