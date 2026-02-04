import { Music, Instagram, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img 
                src="/Cloud-Music-Logo-FONDO-BLANCO.png" 
                alt="Cloud Music - Economía Creativa Digital" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-slate-400">
              Economía creativa y soluciones digitales
            </p>
          </div>

          {/* Center - Links */}
          <div className="text-center space-y-2">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Cloud Music
            </p>
            <p className="text-sm text-slate-500">
              Hecho con 💙 en Chile
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a 
              href="https://wa.me/56956197415" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20 group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition-colors" />
            </a>
            <a 
              href="https://instagram.com/cloudmusic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" />
            </a>
            <a 
              href="mailto:contacto@cloudmusic.cl"
              className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-500">
            Plataforma digital para audio, streaming, desarrollo web e infraestructura | Chile
          </p>
        </div>
      </div>
    </footer>
  );
}