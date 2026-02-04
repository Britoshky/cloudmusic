import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { SlidersHorizontal } from "lucide-react";
import { PropiedadCard, PropiedadCardData } from "@/app/components/public/PropiedadCard";
import { Button } from "@/app/components/ui/button";
import { BusquedaFilters } from "@/app/components/public/BusquedaFilters";

// Mock data
const mockPropiedades: PropiedadCardData[] = [
  {
    id: 1,
    titulo: "Casa moderna en Las Condes",
    tipo: "Casa",
    operacion: "Venta",
    precio: "UF 8,500",
    precioClp: "$305.000.000",
    dormitorios: 4,
    banos: 3,
    superficie: 320,
    comuna: "Las Condes",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    destacada: true,
  },
  {
    id: 2,
    titulo: "Departamento céntrico en Providencia",
    tipo: "Departamento",
    operacion: "Arriendo",
    precio: "UF 28",
    precioClp: "$1.000.000",
    dormitorios: 2,
    banos: 2,
    superficie: 85,
    comuna: "Providencia",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    nueva: true,
  },
  {
    id: 3,
    titulo: "Amplia casa en Vitacura",
    tipo: "Casa",
    operacion: "Venta",
    precio: "UF 12,000",
    precioClp: "$432.000.000",
    dormitorios: 5,
    banos: 4,
    superficie: 450,
    comuna: "Vitacura",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  },
  {
    id: 4,
    titulo: "Departamento con vista al mar",
    tipo: "Departamento",
    operacion: "Venta",
    precio: "UF 6,200",
    precioClp: "$223.000.000",
    dormitorios: 3,
    banos: 2,
    superficie: 110,
    comuna: "Viña del Mar",
    region: "Valparaíso",
    imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    destacada: true,
  },
  {
    id: 5,
    titulo: "Casa en condominio cerrado",
    tipo: "Casa",
    operacion: "Venta",
    precio: "UF 9,800",
    precioClp: "$353.000.000",
    dormitorios: 4,
    banos: 3,
    superficie: 280,
    comuna: "Lo Barnechea",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
  },
  {
    id: 6,
    titulo: "Departamento luminoso en Ñuñoa",
    tipo: "Departamento",
    operacion: "Arriendo",
    precio: "UF 22",
    precioClp: "$790.000",
    dormitorios: 2,
    banos: 1,
    superficie: 65,
    comuna: "Ñuñoa",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    nueva: true,
  },
];

interface BusquedaPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function BusquedaPage({ searchParams }: BusquedaPageProps) {
  const operacion = searchParams.operacion;
  const tipoPropiedad = searchParams.tipoPropiedad;
  const region = searchParams.region;
  
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header y Filtros */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resultados de Búsqueda</h1>
          {(operacion || tipoPropiedad || region) && (
            <p className="text-muted-foreground mb-6">
              {operacion && `${operacion} `}
              {tipoPropiedad && `de ${tipoPropiedad} `}
              {region && `en ${region}`}
            </p>
          )}

          {/* Barra de búsqueda y filtros */}
          <div className="bg-card rounded-lg border p-4 mb-6">
            <BusquedaFilters />
            <div className="mt-4 flex justify-between items-center">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="size-4 mr-2" />
                Filtros avanzados
              </Button>
              <p className="text-sm text-muted-foreground">
                {mockPropiedades.length} propiedades encontradas
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Propiedades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPropiedades.map((propiedad) => (
            <PropiedadCard 
              key={propiedad.id} 
              propiedad={propiedad}
            />
          ))}
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
