
import { Facebook, Instagram, Linkedin, Music2} from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialSection() {
  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/share/1G7z4gvnYr/?mibextid=wwXIfr",
      color: "hover:text-blue-600",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/soluciones_dsae?igsh=N241empld2k4eDRw&utm_source=qr",
      color: "hover:text-pink-600",
      gradient: "from-pink-500 to-purple-600"
    },
     {
      icon: Music2, 
      name: "TikTok",
      url: "https://www.tiktok.com/@solucionesdsae?is_from_webapp=1&sender_device=pc",
      color: "hover:text-black",
      gradient: "from-black to-gray-800"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/40 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Síguenos en Redes Sociales</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Mantente al día con las últimas novedades, proyectos y contenido técnico 
            siguiéndonos en nuestras redes sociales.
          </p>
        </div>
        
        <div className="flex justify-center items-center flex-wrap gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="relative group transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-muted hover:border-transparent bg-white/80 hover:bg-white dark:bg-card/80 dark:hover:bg-card backdrop-blur-sm"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${social.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="h-5 w-5" />
                  </div>
                  <span className="hidden sm:inline font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${social.gradient.split(' ')[0].replace('from-', '')}, ${social.gradient.split(' ')[1].replace('to-', '')})` }}>
                    {social.name}
                  </span>
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ¡Únete a nuestra comunidad y mantente conectado!
          </p>
        </div>
      </div>
    </section>
  );
}
