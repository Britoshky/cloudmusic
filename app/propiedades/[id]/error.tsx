'use client';

import { useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { AlertCircle, Home, RefreshCw, Search } from 'lucide-react';
import Link from 'next/link';

export default function PropiedadError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error cargando propiedad:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="size-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="size-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Error al cargar propiedad</CardTitle>
          <CardDescription>
            No pudimos cargar los detalles de esta propiedad
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button onClick={reset} variant="outline" className="w-full">
              <RefreshCw className="size-4 mr-2" />
              Reintentar
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/busqueda">
                <Search className="size-4 mr-2" />
                Buscar
              </Link>
            </Button>
          </div>

          <Button asChild className="w-full">
            <Link href="/">
              <Home className="size-4 mr-2" />
              Ir al inicio
            </Link>
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            La propiedad puede haber sido eliminada o no estar disponible
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
