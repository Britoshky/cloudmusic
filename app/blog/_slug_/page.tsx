import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { Calendar, User, Tag } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${params.slug} | Blog Pabellón.cl`,
    description: 'Artículo del blog inmobiliario',
  };
}

export default function BlogDetallePage({ params }: { params: { slug: string } }) {
  // Mock data
  const articulo = {
    slug: params.slug,
    titulo: "Guía completa para comprar tu primera vivienda en 2026",
    autor: "María González",
    fecha: "20 Enero 2026",
    categoria: "Guías",
    imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    contenido: `
      <p>Comprar tu primera vivienda es uno de los pasos más importantes en la vida. En esta guía completa, te explicamos todo lo que necesitas saber para hacer una compra inteligente e informada.</p>
      
      <h2>1. Define tu presupuesto</h2>
      <p>Lo primero es determinar cuánto puedes invertir. Considera tu ahorro inicial, tu capacidad de endeudamiento y los gastos asociados a la compra.</p>
      
      <h2>2. Investiga las opciones de financiamiento</h2>
      <p>Existen diversos créditos hipotecarios disponibles en el mercado. Compara tasas de interés, plazos y condiciones.</p>
      
      <h2>3. Conoce los subsidios disponibles</h2>
      <p>El gobierno ofrece diversos subsidios habitacionales que pueden ayudarte a financiar tu vivienda.</p>
      
      <h2>4. Elige la ubicación correcta</h2>
      <p>La ubicación es fundamental. Considera cercanía a tu trabajo, transporte, servicios y plusvalía del sector.</p>
    `,
    tags: ["Primera vivienda", "Subsidios", "Crédito hipotecario"],
  };

  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">{articulo.categoria}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{articulo.titulo}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="size-4" />
              <span>{articulo.autor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{articulo.fecha}</span>
            </div>
          </div>
        </div>

        {/* Imagen destacada */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={articulo.imagen}
            alt={articulo.titulo}
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido */}
        <div 
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: articulo.contenido }}
        />

        {/* Tags */}
        <div className="flex items-center gap-2 pt-8 border-t">
          <Tag className="size-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {articulo.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </article>
      
      <PabellonFooter />
    </div>
  );
}
