import { MessageCircle, ArrowRight } from 'lucide-react';

interface MiniCTAProps {
  title?: string;
  description?: string;
}

export function MiniCTA({ 
  title = "¿Listo para comenzar?",
  description = "Hablemos de tu proyecto y encontremos la mejor solución"
}: MiniCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            {title}
          </h3>
          <p className="text-lg text-slate-600">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56956197415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full border-2 border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-300"
            >
              Enviar mensaje
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
