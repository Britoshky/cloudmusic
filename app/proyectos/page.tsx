import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { Building2 } from "lucide-react";
import { ProyectoCard, ProyectoCardData } from "@/app/components/public/ProyectoCard";
import { ProyectosFilters } from "@/app/components/public/ProyectosFilters";

// Mock data
const mockProyectos: ProyectoCardData[] = [
  {
    id: 1,
    nombre: "Edificio Vista Cordillera",
    constructora: "Constructora Premium",
    etapa: "En construcción",
    entregas: "Diciembre 2026",
    unidades: 48,
    disponibles: 12,
    precioDesde: "UF 3,200",
    comuna: "Providencia",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    tendencia: "+15%",
  },
  {
    id: 2,
    nombre: "Condominio Las Araucarias",
    constructora: "Inmobiliaria Norte",
    etapa: "Pre-venta",
    entregas: "Marzo 2027",
    unidades: 24,
    disponibles: 24,
    precioDesde: "UF 4,500",
    comuna: "Las Condes",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    tendencia: "+20%",
  },
  {
    id: 3,
    nombre: "Torre Pacífico",
    constructora: "Desarrollos Costeros",
    etapa: "Entrega inmediata",
    entregas: "Inmediata",
    unidades: 36,
    disponibles: 8,
    precioDesde: "UF 5,800",
    comuna: "Viña del Mar",
    region: "Valparaíso",
    imagen: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800",
  },
  {
    id: 4,
    nombre: "Residencial El Bosque",
    constructora: "EcoHabitat",
    etapa: "En construcción",
    entregas: "Junio 2026",
    unidades: 60,
    disponibles: 18,
    precioDesde: "UF 2,850",
    comuna: "Ñuñoa",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
    tendencia: "+12%",
  },
  {
    id: 5,
    nombre: "Portal del Sol",
    constructora: "Grupo Inmobiliario Sur",
    etapa: "Pre-venta",
    entregas: "Septiembre 2027",
    unidades: 32,
    disponibles: 32,
    precioDesde: "UF 3,650",
    comuna: "La Florida",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 6,
    nombre: "Altavista Residencial",
    constructora: "Constructora Moderna",
    etapa: "Entrega inmediata",
    entregas: "Inmediata",
    unidades: 28,
    disponibles: 5,
    precioDesde: "UF 4,200",
    comuna: "Vitacura",
    region: "RM",
    imagen: "https://images.unsplash.com/photo-1531564701487-f238224b7ce3?w=800",
  },
];

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building2 className="size-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Proyectos Inmobiliarios</h1>
              <p className="text-muted-foreground">Descubre los mejores proyectos en desarrollo</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-card rounded-lg border p-4">
            <ProyectosFilters />
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                {mockProyectos.length} proyectos disponibles
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
