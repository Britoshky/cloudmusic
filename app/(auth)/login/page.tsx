import { Home } from "lucide-react";
import Link from "next/link";
import { LoginForm } from "@/app/components/auth/LoginForm";

export const metadata = {
  title: 'Iniciar Sesión | Pabellón.cl',
  description: 'Inicia sesión en tu cuenta de Pabellón.cl',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="size-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
            <Home className="size-7 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">Pabellón</div>
            <div className="text-xs text-slate-600">de la Construcción</div>
          </div>
        </Link>

        <LoginForm />

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Al continuar, aceptas nuestros{' '}
          <Link href="/terminos" className="underline hover:text-foreground">
            Términos de Servicio
          </Link>{' '}
          y{' '}
          <Link href="/privacidad" className="underline hover:text-foreground">
            Política de Privacidad
          </Link>
        </p>
      </div>
    </div>
  );
}
