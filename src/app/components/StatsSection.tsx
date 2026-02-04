import { Users, Headphones, Radio, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Clientes Satisfechos',
    description: 'Empresas y creadores confiando en nosotros'
  },
  {
    icon: Headphones,
    value: '200+',
    label: 'Proyectos de Audio',
    description: 'Locuciones y producciones entregadas'
  },
  {
    icon: Radio,
    value: '15+',
    label: 'Radios Online',
    description: 'Plataformas de streaming activas'
  },
  {
    icon: Award,
    value: '3+',
    label: 'Años de Experiencia',
    description: 'Innovando en economía creativa'
  }
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Cloud Music en Números
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Resultados que hablan por sí solos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <article 
                key={index}
                className="text-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
            <Award className="w-8 h-8 text-cyan-400" />
            <div className="text-left">
              <p className="font-semibold text-white">Empresa 100% Chilena</p>
              <p className="text-sm text-slate-400">Comprometidos con la economía creativa local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
