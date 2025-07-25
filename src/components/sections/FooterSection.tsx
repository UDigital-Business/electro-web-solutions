
import { Mail, Phone, MapPin } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { label: "Inicio", action: () => scrollToSection("inicio") },
    { label: "Nosotros", action: () => scrollToSection("nosotros") },
    { label: "Servicios", action: () => scrollToSection("servicios") },
    { label: "Productos", action: () => scrollToSection("productos") },
    { label: "Contacto", action: () => scrollToSection("contacto") }
  ];

  return (
    <footer className="bg-dsae-green-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/ad92c90c-2a9f-42db-bf1d-063723851f3a.png" 
                alt="DSAE Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold">DSAE</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Desarrollo y Soluciones en Análisis Electromecánicos. 
              2 años ofreciendo tecnología de vanguardia para 
              optimizar el rendimiento de equipos industriales.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+57 312 345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>saulizcali@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Cali, Valle del Cauca, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Análisis de Vibraciones</li>
              <li>Análisis Eléctrico</li>
              <li>Mantenimiento Predictivo</li>
              <li>Consultoría Técnica</li>
              <li>Puesta en Marcha</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} DSAE - Desarrollo y Soluciones en Análisis Electromecánicos. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
