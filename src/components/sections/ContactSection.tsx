
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simular envío de email - en producción se conectaría con un servicio real
      console.log("Datos del formulario:", formData);
      console.log("Enviando email a: saulizcali@gmail.com");
      
      // Simular delay de envío
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error al enviar mensaje",
        description: "Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: "+57 312 345 6789",
      action: "tel:+573123456789"
    },
    {
      icon: Mail,
      title: "Email",
      details: "saulizcali@gmail.com",
      action: "mailto:saulizcali@gmail.com"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Cali, Valle del Cauca, Colombia",
      action: "#"
    }
  ];

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte. 
            Contáctanos y descubre cómo podemos optimizar tus procesos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-gradient-to-br from-dsae-blue to-dsae-green">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-dsae-blue transition-colors duration-200"
                          >
                            {info.details}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-dsae-blue to-dsae-green p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">¿Por qué elegirnos?</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Más de 15 años de experiencia</li>
                <li>✓ Tecnología de vanguardia</li>
                <li>✓ Equipo altamente calificado</li>
                <li>✓ Soporte técnico 24/7</li>
                <li>✓ Soluciones personalizadas</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-xl animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envíanos un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-dsae-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-dsae-blue"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-muted focus:border-dsae-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-muted focus:border-dsae-blue"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-muted focus:border-dsae-blue resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-dsae-blue to-dsae-green hover:opacity-90 transition-all duration-300"
                  size="lg"
                >
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
