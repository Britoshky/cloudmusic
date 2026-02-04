'use client';

import { MapPin, Bed, Bath, Maximize2, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useFavoritos } from "@/app/contexts/FavoritosContext";

export interface PropiedadCardData {
  id: number;
  titulo: string;
  tipo: string;
  operacion: "Venta" | "Arriendo";
  precio: string;
  precioClp?: string;
  dormitorios: number;
  banos: number;
  superficie: number;
  comuna: string;
  region: string;
  imagen: string;
  destacada?: boolean;
  nueva?: boolean;
}

interface PropiedadCardProps {
  propiedad: PropiedadCardData;
}

export function PropiedadCard({ propiedad }: PropiedadCardProps) {
  const { favoritos, toggleFavorito } = useFavoritos();
  const isFavorite = favoritos.includes(propiedad.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorito(propiedad.id);
  };

  return (
    <Link href={`/propiedades/${propiedad.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        {/* Imagen */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={propiedad.imagen}
            alt={propiedad.titulo}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge variant={propiedad.operacion === "Venta" ? "default" : "secondary"}>
              {propiedad.operacion}
            </Badge>
            {propiedad.destacada && (
              <Badge className="bg-yellow-500 text-white">Destacada</Badge>
            )}
            {propiedad.nueva && (
              <Badge className="bg-green-500 text-white">Nueva</Badge>
            )}
          </div>

          {/* Botón de Favorito */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 right-3 size-9 rounded-full bg-white/90 hover:bg-white p-0 ${
              isFavorite ? 'text-red-500' : 'text-slate-600'
            }`}
            onClick={handleFavoriteClick}
          >
            <Heart className={`size-4 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Contenido */}
        <CardHeader className="pb-2">
          <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {propiedad.titulo}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Precio */}
          <div className="mb-3">
            <p className="text-2xl font-bold text-primary">{propiedad.precio}</p>
            {propiedad.precioClp && (
              <p className="text-sm text-muted-foreground">{propiedad.precioClp}</p>
            )}
          </div>

          {/* Características */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Bed className="size-4" />
              <span>{propiedad.dormitorios}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="size-4" />
              <span>{propiedad.banos}</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize2 className="size-4" />
              <span>{propiedad.superficie}m²</span>
            </div>
          </div>

          {/* Ubicación */}
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="size-4 text-primary" />
            <span className="text-muted-foreground">{propiedad.comuna}, {propiedad.region}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}