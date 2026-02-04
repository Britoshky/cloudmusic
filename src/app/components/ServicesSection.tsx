import { Mic, Radio, Globe, Server } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: 'Audio y Locución Digital',
    description: 'Voces reales y soluciones de audio para proyectos comerciales y creativos.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Radio,
    title: 'Streaming y Radios Online',
    description: 'Implementación y soporte para radios, transmisiones y plataformas de audio.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Creación de páginas web modernas y funcionales para proyectos digitales.',
    color: 'from-sky-500 to-sky-600'
  },
  {
    icon: Server,
    title: 'Infraestructura y Servidores',
    description: 'Soluciones digitales confiables para alojar y escalar proyectos.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales para tus necesidades digitales y creativas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-transparent"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
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