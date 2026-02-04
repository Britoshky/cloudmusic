import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { BookOpen, Search } from "lucide-react";
import { BlogCard, BlogCardData } from "@/app/components/public/BlogCard";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

// Mock data
const mockArticulos: BlogCardData[] = [
  {
    id: 1,
    slug: "guia-compra-primera-vivienda-2026",
    titulo: "Guía completa para comprar tu primera vivienda en 2026",
    extracto: "Todo lo que necesitas saber sobre subsidios, créditos hipotecarios y el proceso de compra de tu primera casa.",
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
    extracto: "Desde el trabajo remoto hasta las ciudades inteligentes, descubre qué está cambiando en el mercado inmobiliario.",
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
    extracto: "Una explicación detallada de los diferentes tipos de subsidios y cómo postular a ellos paso a paso.",
    categoria: "Subsidios",
    autor: "Patricia Silva",
    fecha: "15 Enero 2026",
    tiempoLectura: "10 min lectura",
    imagen: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    destacado: true,
  },
  {
    id: 4,
    slug: "mejores-comunas-invertir-santiago",
    titulo: "Las 5 mejores comunas para invertir en Santiago",
    extracto: "Análisis de plusvalía, conectividad y proyección de las comunas más atractivas para invertir.",
    categoria: "Inversión",
    autor: "Roberto Torres",
    fecha: "12 Enero 2026",
    tiempoLectura: "7 min lectura",
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    id: 5,
    slug: "decoracion-minimalista-departamentos",
    titulo: "Decoración minimalista para departamentos pequeños",
    extracto: "Ideas y consejos para maximizar el espacio y crear ambientes funcionales y estéticos.",
    categoria: "Decoración",
    autor: "Andrea Campos",
    fecha: "10 Enero 2026",
    tiempoLectura: "5 min lectura",
    imagen: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  },
  {
    id: 6,
    slug: "credito-hipotecario-que-necesitas-saber",
    titulo: "Crédito hipotecario: Todo lo que necesitas saber",
    extracto: "Tasas, plazos, pie, gastos operacionales y más. Una guía completa sobre financiamiento hipotecario.",
    categoria: "Finanzas",
    autor: "Diego Ramírez",
    fecha: "8 Enero 2026",
    tiempoLectura: "9 min lectura",
    imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="size-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Blog Inmobiliario</h1>
              <p className="text-muted-foreground">Guías, consejos y tendencias del mercado</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-card rounded-lg border p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input 
                  placeholder="Buscar artículos..." 
                  className="w-full"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guias">Guías</SelectItem>
                  <SelectItem value="tendencias">Tendencias</SelectItem>
                  <SelectItem value="subsidios">Subsidios</SelectItem>
                  <SelectItem value="inversion">Inversión</SelectItem>
                  <SelectItem value="decoracion">Decoración</SelectItem>
                  <SelectItem value="finanzas">Finanzas</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full">
                <Search className="size-4 mr-2" />
                Buscar
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                {mockArticulos.length} artículos publicados
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticulos.map((articulo) => (
            <BlogCard key={articulo.id} articulo={articulo} />
          ))}
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}