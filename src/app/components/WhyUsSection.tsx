import { Check, Sparkles, Headphones, Rocket, Globe2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const reasons = [
  {
    icon: Sparkles,
    text: 'Economía creativa'
  },
  {
    icon: Headphones,
    text: 'Experiencia en audio y medios'
  },
  {
    icon: Rocket,
    text: 'Visión digital de largo plazo'
  },
  {
    icon: Globe2,
    text: 'Enfoque local con proyección global'
  }
];

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1745847768382-816bfc32e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjB3b3Jrc3BhY2UlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2OTUyNjg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Chilena</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Por Qué Cloud Music
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              <p className="text-lg text-slate-600">
                Una empresa comprometida con la innovación, la creatividad y el desarrollo digital
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-medium text-slate-900">
                      {reason.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}