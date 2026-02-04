import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: 'Guías Inmobiliarias | Pabellón.cl',
  description: 'Guías y tutoriales para compradores y vendedores',
};

export default function GuiasPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <BookOpen className="size-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Guías Inmobiliarias</h1>
          <p className="text-xl text-muted-foreground">
            En desarrollo - Próximamente disponible
          </p>
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
