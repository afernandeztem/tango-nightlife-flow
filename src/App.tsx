
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fidelizacion from "./pages/features/Fidelizacion";
import CRM from "./pages/features/CRM";
import Ventas from "./pages/features/Ventas";
import TiempoReal from "./pages/features/TiempoReal";
import Promotores from "./pages/features/Promotores";
import RolesPermisos from "./pages/features/RolesPermisos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Feature pages */}
          <Route path="/fidelizacion" element={<Fidelizacion />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/tiempo-real" element={<TiempoReal />} />
          <Route path="/promotores" element={<Promotores />} />
          <Route path="/roles-permisos" element={<RolesPermisos />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
