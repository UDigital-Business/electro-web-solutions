
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnalisisElectricos from "./pages/services/AnalisisElectricos";
import ProductosElectricos from "./pages/services/ProductosElectricos";
import IngenieriaEstructural from "./pages/services/IngenieriaEstructural";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/analisis-electricos" element={<AnalisisElectricos />} />
          <Route path="/servicios/productos-electricos" element={<ProductosElectricos />} />
          <Route path="/servicios/ingenieria-estructural" element={<IngenieriaEstructural />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
