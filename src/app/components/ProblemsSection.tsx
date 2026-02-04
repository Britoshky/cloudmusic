import { XCircle } from 'lucide-react';

const problems = [
  {
    title: 'Dificultad para acceder a audio profesional',
    description: 'Muchos proyectos necesitan contenido de audio de calidad pero no saben dónde conseguirlo'
  },
  {
    title: 'Falta de soluciones digitales integrales',
    description: 'Los servicios están fragmentados y no hay una visión completa para proyectos digitales'
  },
  {
    title: 'Procesos lentos y poco flexibles',
    description: 'Las metodologías tradicionales no se adaptan a la velocidad del mundo digital'
  },
  {
    title: 'Escasas oportunidades digitales para talentos creativos',
    description: 'Los profesionales creativos no encuentran plataformas justas para ofrecer sus servicios'
  }
];

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Qué Problema Resolvemos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}