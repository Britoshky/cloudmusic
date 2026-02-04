import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/app/contexts/AuthContext';
import { FavoritosProvider } from '@/app/contexts/FavoritosContext';
import { SearchProvider } from '@/app/contexts/SearchContext';

export const metadata: Metadata = {
  title: 'Pabellón de la Construcción - Portal Inmobiliario',
  description: 'Portal inmobiliario completo para comprar, vender y arrendar propiedades en Chile',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <FavoritosProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </FavoritosProvider>
        </AuthProvider>
      </body>
    </html>
  );
}