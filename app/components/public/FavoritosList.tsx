'use client';

import { useFavoritos } from "@/app/contexts/FavoritosContext";
import { PropiedadCard, PropiedadCardData } from "@/app/components/public/PropiedadCard";
import { Heart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

// Mock data - En producción esto vendría de una API
const mockPropiedades: PropiedadCardData[] = [
  {
    id: 1,
    titulo: "Casa moderna en Las Condes",
    tipo: "Casa",
    operacion: "Venta",
    precio: "UF 15.000",
    precioClp: "$450.000.000",
    dormitorios: 4,
    banos: 3,
    superficie: 250,
    comuna: "Las Condes",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    destacada: true,
  },
  {
    id: 2,
    titulo: "Departamento con vista al mar",
    tipo: "Departamento",
    operacion: "Venta",
    precio: "UF 8.500",
    precioClp: "$255.000.000",
    dormitorios: 3,
    banos: 2,
    superficie: 120,
    comuna: "Viña del Mar",
    region: "Valparaíso",
    imagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    nueva: true,
  },
  {
    id: 3,
    titulo: "Oficina en el centro",
    tipo: "Oficina",
    operacion: "Arriendo",
    precio: "UF 50",
    precioClp: "$1.500.000/mes",
    dormitorios: 0,
    banos: 2,
    superficie: 80,
    comuna: "Santiago Centro",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
  },
];

export function FavoritosList() {
  const { favoritos, clearAllFavoritos } = useFavoritos();

  // Filtrar propiedades favoritas
  const propiedadesFavoritas = mockPropiedades.filter(p => favoritos.includes(p.id));

  if (favoritos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="size-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-4">No tienes favoritos aún</h2>
        <p className="text-muted-foreground mb-8">
          Comienza a guardar propiedades que te interesen haciendo click en el corazón
        </p>
        <Button asChild>
          <Link href="/busqueda">
            Explorar propiedades
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Tus propiedades favoritas</h2>
          <p className="text-muted-foreground">
            {favoritos.length} {favoritos.length === 1 ? 'propiedad guardada' : 'propiedades guardadas'}
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={clearAllFavoritos}
          className="text-red-600 hover:bg-red-50"
        >
          Limpiar todos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propiedadesFavoritas.map((propiedad) => (
          <PropiedadCard key={propiedad.id} propiedad={propiedad} />
        ))}
      </div>
    </div>
  );
}
