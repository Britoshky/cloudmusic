'use client';

import { MapPin, TrendingUp, Home, Building2 } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const regiones = [
  {
    nombre: "Región Metropolitana",
    propiedades: 1245,
    proyectos: 89,
    precioPromedio: "UF 4,850",
    imagen: "https://images.unsplash.com/photo-1555117743-3f1fd8b58fd9?w=600&h=400&fit=crop",
    tendencia: "+12%",
    color: "from-blue-600 to-blue-700"
  },
  {
    nombre: "Valparaíso",
    propiedades: 678,
    proyectos: 45,
    precioPromedio: "UF 3,200",
    imagen: "https://images.unsplash.com/photo-1581974206736-2b43bf257c83?w=600&h=400&fit=crop",
    tendencia: "+8%",
    color: "from-purple-600 to-purple-700"
  },
  {
    nombre: "Biobío",
    propiedades: 456,
    proyectos: 32,
    precioPromedio: "UF 2,800",
    imagen: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop",
    tendencia: "+15%",
    color: "from-green-600 to-green-700"
  },
  {
    nombre: "Maule",
    propiedades: 234,
    proyectos: 18,
    precioPromedio: "UF 2,100",
    imagen: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&h=400&fit=crop",
    tendencia: "+10%",
    color: "from-orange-600 to-orange-700"
  },
  {
    nombre: "Coquimbo",
    propiedades: 312,
    proyectos: 21,
    precioPromedio: "UF 2,650",
    imagen: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    tendencia: "+6%",
    color: "from-cyan-600 to-cyan-700"
  },
  {
    nombre: "La Araucanía",
    propiedades: 189,
    proyectos: 14,
    precioPromedio: "UF 1,950",
    imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    tendencia: "+11%",
    color: "from-red-600 to-red-700"
  },
  {
    nombre: "Los Lagos",
    propiedades: 267,
    proyectos: 19,
    precioPromedio: "UF 2,350",
    imagen: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    tendencia: "+9%",
    color: "from-indigo-600 to-indigo-700"
  },
  {
    nombre: "Antofagasta",
    propiedades: 198,
    proyectos: 16,
    precioPromedio: "UF 3,100",
    imagen: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=600&h=400&fit=crop",
    tendencia: "+7%",
    color: "from-yellow-600 to-yellow-700"
  },
];

export function RegionSelector() {
  const router = useRouter();

  const handleSelectRegion = (region: string | null) => {
    if (region) {
      router.push(`/busqueda?region=${encodeURIComponent(region)}`);
    } else {
      router.push('/regiones');
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Explora por Región
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Encuentra tu hogar en todo Chile
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Descubre propiedades y proyectos disponibles en las principales regiones del país
          </p>
        </div>

        {/* Mapa Visual de Chile - Destacado */}
        <div className="mb-12 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Ilustración de mapa */}
            <div className="flex-1 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">🇨🇱 Chile de Norte a Sur</h3>
              <p className="text-blue-100 mb-6">
                Desde Arica hasta Punta Arenas, conectamos a personas con sus hogares ideales en todas las regiones de Chile.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">1,500+</div>
                  <div className="text-sm text-blue-100">Propiedades</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-blue-100">Proyectos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">16</div>
                  <div className="text-sm text-blue-100">Regiones</div>
                </div>
              </div>
            </div>
            
            {/* Mapa simplificado */}
            <div className="flex-shrink-0">
              <div className="w-48 h-96 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-sm font-semibold">Mapa Interactivo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Regiones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regiones.map((region, index) => (
            <Card
              key={index}
              onClick={() => handleSelectRegion(region.nombre)}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:scale-105"
            >
              {/* Imagen de región */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={region.imagen}
                  alt={region.nombre}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${region.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                
                {/* Tendencia badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-green-600 font-bold shadow-lg">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {region.tendencia}
                  </Badge>
                </div>

                {/* Nombre de región */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{region.nombre}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>Región</span>
                  </div>
                </div>
              </div>

              {/* Información */}
              <div className="p-4 bg-white">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Home className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-bold text-slate-900">{region.propiedades}</div>
                      <div className="text-xs text-slate-600">Propiedades</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="font-bold text-slate-900">{region.proyectos}</div>
                      <div className="text-xs text-slate-600">Proyectos</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Precio Promedio</div>
                  <div className="text-lg font-bold text-blue-600">{region.precioPromedio}</div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Ver propiedades →
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">¿No encuentras tu región?</p>
          <Button
            onClick={() => handleSelectRegion(null)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
          >
            <MapPin className="w-5 h-5" />
            Ver todas las regiones
          </Button>
        </div>
      </div>
    </section>
  );
}
