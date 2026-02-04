import { Shield, Clock, HeadphonesIcon, Zap } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    text: 'Servicios Confiables'
  },
  {
    icon: Clock,
    text: 'Respuesta en 24hrs'
  },
  {
    icon: HeadphonesIcon,
    text: 'Soporte Continuo'
  },
  {
    icon: Zap,
    text: 'Implementación Rápida'
  }
];

export function TrustBanner() {
  return (
    <div className="bg-slate-50 py-8 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-slate-700">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
