
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AutomatizacionHeader } from "@/components/pages/automatizacion/AutomatizacionHeader";
import { ServicesTabs } from "@/components/pages/automatizacion/ServicesTabs";
import { AutomatizacionCTA } from "@/components/pages/automatizacion/AutomatizacionCTA";

const AutomatizacionIndustrial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
            
            <AutomatizacionHeader />
          </div>

          <ServicesTabs />

          <AutomatizacionCTA />
        </div>
      </section>
    </div>
  );
};

export default AutomatizacionIndustrial;
