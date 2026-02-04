import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { Home } from "lucide-react";
import { PublicarWizard } from "@/app/components/public/PublicarWizard";

export const metadata = {
  title: 'Publicar Propiedad | Pabellón.cl',
  description: 'Publica tu propiedad gratis en Pabellón.cl',
};

export default function PublicarPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Home className="size-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Publica tu propiedad</h1>
            <p className="text-muted-foreground">
              Llega a miles de personas interesadas en comprar o arrendar
            </p>
          </div>

          <PublicarWizard />
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
