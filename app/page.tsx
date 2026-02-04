import { Search, MapPin, Home, Building2, Star, ChevronRight, TrendingUp, Users, Shield, Award, Clock, Calculator } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { PropiedadCard, PropiedadCardData } from "@/app/components/public/PropiedadCard";
import { ProyectoCard, ProyectoCardData } from "@/app/components/public/ProyectoCard";
import { BlogCard, BlogCardData } from "@/app/components/public/BlogCard";

// Mock data
const propiedadesDestacadas: PropiedadCardData[] = [
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
];

const proyectosDestacados: ProyectoCardData[] = [
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
];

const articulosDestacados: BlogCardData[] = [
  {
    id: 1,
    slug: "guia-compra-primera-vivienda-2026",
    titulo: "Guía completa para comprar tu primera vivienda en 2026",
    extracto: "Todo lo que necesitas saber sobre subsidios, créditos hipotecarios y el proceso de compra.",
    categoria: "Guías",
    autor: "María González",
    fecha: "20 Enero 2026",
    tiempoLectura: "8 min lectura",
    imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    destacado: true,
  },
  {
    id: 2,
    slug: "tendencias-inmobiliarias-2026",
    titulo: "10 tendencias inmobiliarias que definirán el 2026",
    extracto: "Desde el trabajo remoto hasta las ciudades inteligentes.",
    categoria: "Tendencias",
    autor: "Carlos Muñoz",
    fecha: "18 Enero 2026",
    tiempoLectura: "6 min lectura",
    imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
  },
  {
    id: 3,
    slug: "como-funciona-subsidio-habitacional",
    titulo: "Cómo funciona el subsidio habitacional en Chile",
    extracto: "Una explicación detallada de los diferentes tipos de subsidios.",
    categoria: "Subsidios",
    autor: "Patricia Silva",
    fecha: "15 Enero 2026",
    tiempoLectura: "10 min lectura",
    imagen: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <PabellonNavbar isAuthenticated={false} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Encuentra tu hogar ideal en Chile
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Miles de propiedades, proyectos y oportunidades inmobiliarias en todo el país
            </p>

            {/* Búsqueda rápida */}
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <Input 
                    placeholder="Ciudad, comuna o dirección..." 
                    className="h-12"
                  />
                </div>
                <div>
                  <select className="h-12 w-full rounded-md border border-input bg-input-background px-3">
                    <option>Tipo de propiedad</option>
                    <option>Casa</option>
                    <option>Departamento</option>
                    <option>Oficina</option>
                  </select>
                </div>
                <Link href="/busqueda" className="w-full">
                  <Button size="lg" className="h-12 w-full">
                    <Search className="mr-2" />
                    Buscar
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Propiedades</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Usuarios</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías rápidas */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/busqueda?operacion=Venta">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="size-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Home className="size-6" />
                  </div>
                  <h3 className="font-semibold">Comprar</h3>
                  <p className="text-sm text-muted-foreground">Encuentra tu hogar</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/busqueda?operacion=Arriendo">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="size-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Building2 className="size-6" />
                  </div>
                  <h3 className="font-semibold">Arrendar</h3>
                  <p className="text-sm text-muted-foreground">Busca arriendos</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/proyectos">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="size-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="size-6" />
                  </div>
                  <h3 className="font-semibold">Proyectos</h3>
                  <p className="text-sm text-muted-foreground">Obra nueva</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/publicar">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="size-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="size-6" />
                  </div>
                  <h3 className="font-semibold">Publicar</h3>
                  <p className="text-sm text-muted-foreground">Vende o arrienda</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Propiedades Destacadas</h2>
              <p className="text-muted-foreground">Las mejores ofertas del mercado inmobiliario</p>
            </div>
            <Link href="/busqueda">
              <Button variant="outline">
                Ver todas
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propiedadesDestacadas.map((propiedad) => (
              <PropiedadCard key={propiedad.id} propiedad={propiedad} />
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Proyectos en Desarrollo</h2>
              <p className="text-muted-foreground">Invierte en los mejores proyectos nuevos</p>
            </div>
            <Link href="/proyectos">
              <Button variant="outline">
                Ver todos
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proyectosDestacados.map((proyecto) => (
              <ProyectoCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">¿Por qué elegir Pabellón.cl?</h2>
            <p className="text-muted-foreground">El portal inmobiliario más completo de Chile</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Home className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Miles de propiedades</h3>
              <p className="text-muted-foreground">
                La mayor oferta inmobiliaria de Chile en un solo lugar
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Propiedades verificadas</h3>
              <p className="text-muted-foreground">
                Todas nuestras publicaciones son revisadas y validadas
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proyectos nuevos</h3>
              <p className="text-muted-foreground">
                Accede a los mejores proyectos inmobiliarios en desarrollo
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Asesoría personalizada</h3>
              <p className="text-muted-foreground">
                Equipo de expertos listos para ayudarte en todo el proceso
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Calculadora hipotecaria</h3>
              <p className="text-muted-foreground">
                Calcula tu dividendo y conoce tu capacidad de compra
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atención 24/7</h3>
              <p className="text-muted-foreground">
                Soporte disponible en todo momento para resolver tus dudas
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog destacado */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Blog y Guías</h2>
              <p className="text-muted-foreground">Consejos y tendencias del mercado inmobiliario</p>
            </div>
            <Link href="/blog">
              <Button variant="outline">
                Ver más artículos
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articulosDestacados.map((articulo) => (
              <BlogCard key={articulo.id} articulo={articulo} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para encontrar tu propiedad ideal?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de personas que ya encontraron su hogar con nosotros
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/busqueda">
              <Button size="lg" variant="secondary">
                <Search className="mr-2" />
                Buscar propiedades
              </Button>
            </Link>
            <Link href="/publicar">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Publicar gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PabellonFooter />
    </div>
  );
}