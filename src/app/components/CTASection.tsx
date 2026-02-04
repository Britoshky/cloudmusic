import { Mail, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1764162051353-0d3aef372c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBkaWdpdGFsJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3Njk1MjY4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Digital technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-cyan-950/95 to-slate-950/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Impulsa tu proyecto con soluciones digitales y creativas
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Hablemos de cómo podemos ayudarte a alcanzar tus objetivos
          </p>

          <div className="pt-4">
            <a 
              href="https://wa.me/56956197415"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Mail className="w-5 h-5" />
              Contáctanos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Additional Contact Info */}
          <div className="pt-8 text-slate-400">
            <p className="text-sm">
              Escríbenos y te responderemos a la brevedad
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}