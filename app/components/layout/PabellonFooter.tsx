import { Home, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function PabellonFooter() {
  return (
    <footer id="contacto" className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Pabellón</div>
                <div className="text-xs text-slate-400">de la Construcción</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              El portal inmobiliario más completo de Chile. Encuentra propiedades, proyectos, subsidios y toda la información que necesitas para tu decisión.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Enlaces - Comprar */}
          <div>
            <h4 className="font-semibold mb-4">Comprar</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/busqueda?operacion=venta&tipoPropiedad=casa" className="hover:text-white transition-colors">Casas en venta</Link></li>
              <li><Link href="/busqueda?operacion=venta&tipoPropiedad=departamento" className="hover:text-white transition-colors">Departamentos</Link></li>
              <li><Link href="/busqueda?operacion=venta&tipoPropiedad=terreno" className="hover:text-white transition-colors">Terrenos</Link></li>
              <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos nuevos</Link></li>
            </ul>
          </div>

          {/* Enlaces - Recursos */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/subsidios" className="hover:text-white transition-colors">Subsidios habitacionales</Link></li>
              <li><Link href="/calculadora" className="hover:text-white transition-colors">Calculadora hipotecaria</Link></li>
              <li><Link href="/guias" className="hover:text-white transition-colors">Guía del comprador</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog inmobiliario</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+56 2 2345 6789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@pabellon.cl</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <div>© 2026 Pabellón de la Construcción. Todos los derechos reservados.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
