
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialSection() {
  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/dsae",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/dsae",
      color: "hover:text-pink-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/dsae",
      color: "hover:text-blue-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/dsae",
      color: "hover:text-blue-400"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/dsae",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-gradient">Síguenos en Redes Sociales</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Mantente al día con las últimas novedades, proyectos y contenido técnico 
          siguiéndonos en nuestras redes sociales.
        </p>
        
        <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              asChild
              className={`group transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} border-dsae-blue/20 hover:border-current`}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <social.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{social.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
