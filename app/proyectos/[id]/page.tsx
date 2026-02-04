import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { Building2, MapPin, Calendar, Users, Home } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Proyecto ${params.id} | Pabellón.cl`,
    description: 'Detalle del proyecto inmobiliario',
  };
}

export default function ProyectoDetallePage({ params }: { params: { id: string } }) {
  // Mock data
  const proyecto = {
    id: params.id,
    nombre: "Edificio Vista Cordillera",
    constructora: "Constructora Premium",
    etapa: "En construcción",
    entregas: "Diciembre 2026",
    unidades: 48,
    disponibles: 12,
    precioDesde: "UF 3,200",
    comuna: "Providencia",
    region: "Región Metropolitana",
    descripcion: "Moderno proyecto residencial con vista a la cordillera. Incluye áreas verdes, quincho y estacionamientos.",
    amenidades: [
      "Quincho",
      "Sala de juegos",
      "Gimnasio",
      "Áreas verdes",
      "Estacionamiento visitas",
      "Bodegas",
    ],
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
  };

  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <Image src={proyecto.imagen} alt={proyecto.nombre} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <Badge className="mb-4">{proyecto.etapa}</Badge>
            <h1 className="text-4xl font-bold mb-2">{proyecto.nombre}</h1>
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{proyecto.comuna}, {proyecto.region}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sobre el Proyecto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{proyecto.descripcion}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Home className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold">{proyecto.unidades}</div>
                    <div className="text-xs text-muted-foreground">Unidades totales</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Building2 className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold">{proyecto.disponibles}</div>
                    <div className="text-xs text-muted-foreground">Disponibles</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Calendar className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-sm">{proyecto.entregas}</div>
                    <div className="text-xs text-muted-foreground">Entrega</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Users className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-sm">{proyecto.constructora}</div>
                    <div className="text-xs text-muted-foreground">Constructora</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Amenidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-3">
                  {proyecto.amenidades.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="size-2 bg-primary rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Precio desde</div>
                  <div className="text-3xl font-bold text-primary">{proyecto.precioDesde}</div>
                </div>
                <Button className="w-full" size="lg">
                  Solicitar información
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  Ver unidades disponibles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
