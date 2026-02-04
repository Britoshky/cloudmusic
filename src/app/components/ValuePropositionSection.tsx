import { Zap, Scale, TrendingUp, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Soluciones rápidas y accesibles',
    description: 'Respuestas ágiles adaptadas a tus necesidades'
  },
  {
    icon: Scale,
    title: 'Modelo justo y transparente',
    description: 'Precios claros y condiciones equitativas'
  },
  {
    icon: TrendingUp,
    title: 'Servicios escalables',
    description: 'Crecemos junto a tu proyecto'
  },
  {
    icon: Heart,
    title: 'Enfoque humano y creativo',
    description: 'La creatividad al centro de todo'
  },
  {
    icon: Users,
    title: 'Tecnología al servicio de las personas',
    description: 'Herramientas pensadas para ti'
  }
];

export function ValuePropositionSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Propuesta de Valor
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Lo que nos hace diferentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-300">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}