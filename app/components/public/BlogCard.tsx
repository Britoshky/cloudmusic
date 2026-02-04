'use client';

import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export interface BlogCardData {
  id: number;
  slug: string;
  titulo: string;
  extracto: string;
  categoria: string;
  autor: string;
  fecha: string;
  tiempoLectura: string;
  imagen: string;
  destacado?: boolean;
}

interface BlogCardProps {
  articulo: BlogCardData;
}

export function BlogCard({ articulo }: BlogCardProps) {
  return (
    <Link href={`/blog/${articulo.slug}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        {/* Imagen */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={articulo.imagen}
            alt={articulo.titulo}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge de categoría */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white text-slate-900 hover:bg-white">
              {articulo.categoria}
            </Badge>
          </div>

          {/* Badge destacado */}
          {articulo.destacado && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-yellow-500 text-white">Destacado</Badge>
            </div>
          )}
        </div>

        {/* Contenido */}
        <CardHeader className="pb-3">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {articulo.titulo}
          </h3>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Extracto */}
          <p className="text-muted-foreground text-sm line-clamp-3">
            {articulo.extracto}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-3 border-t">
            <div className="flex items-center gap-1">
              <User className="size-3" />
              <span>{articulo.autor}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="size-3" />
              <span>{articulo.fecha}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="size-3" />
              <span>{articulo.tiempoLectura}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
            Leer más
            <ArrowRight className="size-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
