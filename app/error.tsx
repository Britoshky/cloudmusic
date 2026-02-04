'use client';

import { useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="size-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="size-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Algo salió mal</CardTitle>
          <CardDescription>
            Lo sentimos, ha ocurrido un error inesperado
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Error details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm font-mono text-muted-foreground break-all">
                {error.message}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Button onClick={reset} variant="outline" className="w-full">
              <RefreshCw className="size-4 mr-2" />
              Reintentar
            </Button>
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="size-4 mr-2" />
                Ir al inicio
              </Link>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Si el problema persiste, por favor contacta a soporte
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
