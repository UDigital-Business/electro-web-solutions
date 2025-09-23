import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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
      // Configuración de EmailJS con tu Service ID
      const serviceID = 'service_0jmy43e';
      const templateID = 'template_pr1prlf'; // Reemplaza con tu Template ID
      const publicKey = 'SpGloohbOi3LqV3mm'; // Reemplaza con tu Public Key
      const toEmail = 'contacto@solucionesdsae.com.mx';

      // Enviar el formulario
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_email: toEmail
        },
        publicKey
      );

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
      console.error("Error al enviar el mensaje:", error);
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
      details: "+52 33 2177 0750",
      action: "tel:+523321770750",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contacto@solucionesdsae.com.mx",
      action: "mailto:contacto@solucionesdsae.com.mx",
      gradient: "from-dsae-blue to-dsae-green"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Av. Nicolas Copérnico 1510 colonia Moctezuma Poniente CP 45059 Zapopan Jalisco",
      action: "#",
      gradient: "from-green-500 to-green-600"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      text: "Más de 6 años de experiencia",
      color: "text-green-600"
    },
    {
      icon: Shield,
      text: "Tecnología de vanguardia",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      text: "Soporte técnico especializado",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-muted/30 to-muted/60">
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
                  <Card key={index} className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white dark:bg-card">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <CardContent className="relative p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-full bg-gradient-to-br ${info.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">{info.title}</h4>
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-dsae-blue transition-colors duration-200 text-sm"
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

            <Card className="relative overflow-hidden border-none shadow-xl bg-gradient-to-br from-dsae-blue to-dsae-green">
              <CardContent className="p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h4>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <benefit.icon className="h-5 w-5 text-white/90" />
                      <span className="text-white/90">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="relative overflow-hidden border-none shadow-2xl animate-fade-in bg-white dark:bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-dsae-blue/5 to-dsae-green/5"></div>
            <CardContent className="relative p-8">
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
                      className="border-muted focus:border-dsae-blue transition-colors duration-200"
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
                      className="border-muted focus:border-dsae-blue transition-colors duration-200"
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
                      className="border-muted focus:border-dsae-blue transition-colors duration-200"
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
                      className="border-muted focus:border-dsae-blue transition-colors duration-200"
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
                    className="border-muted focus:border-dsae-blue resize-none transition-colors duration-200"
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-dsae-blue to-dsae-green hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
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