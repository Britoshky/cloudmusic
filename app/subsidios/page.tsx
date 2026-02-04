import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { DollarSign } from "lucide-react";

export const metadata = {
  title: 'Subsidios Habitacionales | Pabellón.cl',
  description: 'Información sobre subsidios habitacionales en Chile',
};

export default function SubsidiosPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <DollarSign className="size-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Subsidios Habitacionales</h1>
          <p className="text-xl text-muted-foreground">
            En desarrollo - Próximamente disponible
          </p>
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
