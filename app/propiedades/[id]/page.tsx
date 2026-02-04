import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { Home, Bed, Bath, Maximize2, MapPin, Calendar, Heart, Share2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Propiedad ${params.id} | Pabellón.cl`,
    description: 'Detalle de la propiedad',
  };
}

export default function PropiedadDetallePage({ params }: { params: { id: string } }) {
  // Mock data - en producción vendría de una API
  const propiedad = {
    id: params.id,
    titulo: "Casa moderna en Las Condes",
    tipo: "Casa",
    operacion: "Venta",
    precio: "UF 8,500",
    precioClp: "$305.000.000",
    dormitorios: 4,
    banos: 3,
    superficie: 320,
    terreno: 450,
    comuna: "Las Condes",
    region: "Región Metropolitana",
    direccion: "Av. Apoquindo 7500",
    descripcion: "Hermosa casa moderna ubicada en el corazón de Las Condes. Cuenta con amplios espacios, excelente orientación y acabados de primera calidad.",
    caracteristicas: [
      "Cocina equipada",
      "Calefacción central",
      "Terraza",
      "Jardín",
      "Estacionamientos: 2",
      "Bodegas: 1",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
    fechaPublicacion: "15 Enero 2026",
  };

  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-primary">Inicio</a>
          <span>/</span>
          <a href="/busqueda" className="hover:text-primary">Propiedades</a>
          <span>/</span>
          <span className="text-foreground">{propiedad.titulo}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-2">
            {/* Galería de Imágenes */}
            <div className="mb-6">
              <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                <Image
                  src={propiedad.imagenes[0]}
                  alt={propiedad.titulo}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4">{propiedad.operacion}</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {propiedad.imagenes.slice(1).map((img, i) => (
                  <div key={i} className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80">
                    <Image src={img} alt={`Imagen ${i + 2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Información Principal */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">{propiedad.titulo}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="size-4" />
                      <span>{propiedad.direccion}, {propiedad.comuna}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{propiedad.precio}</div>
                    <div className="text-sm text-muted-foreground">{propiedad.precioClp}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Características rápidas */}
                <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
                  <div className="text-center">
                    <Bed className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold">{propiedad.dormitorios}</div>
                    <div className="text-xs text-muted-foreground">Dormitorios</div>
                  </div>
                  <div className="text-center">
                    <Bath className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold">{propiedad.banos}</div>
                    <div className="text-xs text-muted-foreground">Baños</div>
                  </div>
                  <div className="text-center">
                    <Maximize2 className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold">{propiedad.superficie}m²</div>
                    <div className="text-xs text-muted-foreground">Construidos</div>
                  </div>
                  <div className="text-center">
                    <Home className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold">{propiedad.terreno}m²</div>
                    <div className="text-xs text-muted-foreground">Terreno</div>
                  </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="descripcion">
                  <TabsList>
                    <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                    <TabsTrigger value="caracteristicas">Características</TabsTrigger>
                    <TabsTrigger value="ubicacion">Ubicación</TabsTrigger>
                  </TabsList>
                  <TabsContent value="descripcion" className="mt-4">
                    <p className="text-muted-foreground">{propiedad.descripcion}</p>
                  </TabsContent>
                  <TabsContent value="caracteristicas" className="mt-4">
                    <ul className="grid grid-cols-2 gap-2">
                      {propiedad.caracteristicas.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="size-2 bg-primary rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="ubicacion" className="mt-4">
                    <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                      <MapPin className="size-12 text-muted-foreground" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Columna Lateral */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Contacta al vendedor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Solicitar información
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  Agendar visita
                </Button>
                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline">
                    <Heart className="size-4 mr-2" />
                    Guardar
                  </Button>
                  <Button className="flex-1" variant="outline">
                    <Share2 className="size-4 mr-2" />
                    Compartir
                  </Button>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4" />
                    <span>Publicado: {propiedad.fechaPublicacion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Home className="size-4" />
                    <span>ID: #{propiedad.id}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
