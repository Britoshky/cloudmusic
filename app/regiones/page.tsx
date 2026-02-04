import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { RegionSelector } from "@/app/components/public/RegionSelector";

export const metadata = {
  title: 'Propiedades por Región | Pabellón.cl',
  description: 'Explora propiedades en todas las regiones de Chile',
};

export default function RegionesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <RegionSelector />
      
      <PabellonFooter />
    </div>
  );
}
