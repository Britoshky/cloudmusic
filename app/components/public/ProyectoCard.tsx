'use client';

import { MapPin, Building2, Calendar, Home, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export interface ProyectoCardData {
  id: number;
  nombre: string;
  constructora: string;
  etapa: "Pre-venta" | "En construcción" | "Entrega inmediata";
  entregas: string;
  unidades: number;
  disponibles: number;
  precioDesde: string;
  comuna: string;
  region: string;
  imagen: string;
  tendencia?: string;
}

interface ProyectoCardProps {
  proyecto: ProyectoCardData;
}

export function ProyectoCard({ proyecto }: ProyectoCardProps) {
  const getEtapaBadgeVariant = () => {
    switch (proyecto.etapa) {
      case "Pre-venta":
        return "secondary";
      case "En construcción":
        return "default";
      case "Entrega inmediata":
        return "default";
      default:
        return "default";
    }
  };

  const getEtapaBadgeClass = () => {
    switch (proyecto.etapa) {
      case "Pre-venta":
        return "bg-purple-500 text-white hover:bg-purple-600";
      case "En construcción":
        return "bg-blue-500 text-white hover:bg-blue-600";
      case "Entrega inmediata":
        return "bg-green-500 text-white hover:bg-green-600";
      default:
        return "";
    }
  };

  return (
    <Link href={`/proyectos/${proyecto.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        {/* Imagen */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={proyecto.imagen}
            alt={proyecto.nombre}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge de etapa */}
          <div className="absolute top-3 left-3">
            <Badge className={getEtapaBadgeClass()}>
              {proyecto.etapa}
            </Badge>
          </div>

          {/* Tendencia si existe */}
          {proyecto.tendencia && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-white text-green-600 font-bold">
                <TrendingUp className="size-3 mr-1" />
                {proyecto.tendencia}
              </Badge>
            </div>
          )}

          {/* Nombre del proyecto en la imagen */}
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
              {proyecto.nombre}
            </h3>
            <p className="text-white/90 text-sm">{proyecto.constructora}</p>
          </div>
        </div>

        {/* Contenido */}
        <CardContent className="pt-4">
          {/* Precio */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-1">Desde</p>
            <p className="text-2xl font-bold text-primary">{proyecto.precioDesde}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Home className="size-4 text-primary" />
              <div>
                <div className="font-semibold">{proyecto.unidades}</div>
                <div className="text-xs text-muted-foreground">Unidades</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Building2 className="size-4 text-green-600" />
              <div>
                <div className="font-semibold">{proyecto.disponibles}</div>
                <div className="text-xs text-muted-foreground">Disponibles</div>
              </div>
            </div>
          </div>

          {/* Entrega */}
          <div className="flex items-center gap-2 text-sm mb-3 pb-3 border-b">
            <Calendar className="size-4 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Entrega</div>
              <div className="font-semibold">{proyecto.entregas}</div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="size-4 text-primary" />
            <span className="text-muted-foreground">
              {proyecto.comuna}, {proyecto.region}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
