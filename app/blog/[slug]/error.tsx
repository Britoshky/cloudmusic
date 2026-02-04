'use client';

import { useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { AlertCircle, Home, RefreshCw, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function ArticuloError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error cargando artículo:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="size-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="size-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Error al cargar artículo</CardTitle>
          <CardDescription>
            No pudimos cargar este artículo del blog
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button onClick={reset} variant="outline" className="w-full">
              <RefreshCw className="size-4 mr-2" />
              Reintentar
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog">
                <BookOpen className="size-4 mr-2" />
                Blog
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
            El artículo puede haber sido eliminado o no estar disponible
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
