
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "573123456789"; // Cambiar por el número de WhatsApp real
    const message = "Hola, me interesa conocer más sobre los servicios de DSAE";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  );
}
