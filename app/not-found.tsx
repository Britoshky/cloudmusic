import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mb-4">
            <h1 className="text-8xl font-bold text-primary">404</h1>
          </div>
          <CardTitle className="text-2xl">Página no encontrada</CardTitle>
          <CardDescription>
            Lo sentimos, no pudimos encontrar la página que buscas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="outline" className="w-full">
              <Link href="javascript:history.back()">
                <ArrowLeft className="size-4 mr-2" />
                Volver
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="size-4 mr-2" />
                Ir al inicio
              </Link>
            </Button>
          </div>

          <div className="pt-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/busqueda">
                <Search className="size-4 mr-2" />
                Buscar propiedades
              </Link>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-2">
            ¿Crees que esto es un error? Contáctanos
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
