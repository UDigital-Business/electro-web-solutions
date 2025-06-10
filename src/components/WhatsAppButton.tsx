
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export function WhatsAppButton({ 
  message = "Hola, me interesa obtener más información sobre los servicios de DSAE",
  className = "",
  variant = "default",
  size = "default"
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "523334471899";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className={`bg-gradient-to-r from-dsae-blue to-dsae-green hover:opacity-90 transition-all duration-300 ${className}`}
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      Obtener más información
    </Button>
  );
}
