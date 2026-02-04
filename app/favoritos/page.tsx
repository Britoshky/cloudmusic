import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { Heart } from "lucide-react";
import { FavoritosList } from "@/app/components/public/FavoritosList";

export const metadata = {
  title: 'Mis Favoritos | Pabellón.cl',
  description: 'Tus propiedades favoritas guardadas',
};

export default function FavoritosPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Heart className="size-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Mis Favoritos</h1>
            <p className="text-muted-foreground">Propiedades que has guardado</p>
          </div>
        </div>

        <FavoritosList />
      </div>
      
      <PabellonFooter />
    </div>
  );
}
