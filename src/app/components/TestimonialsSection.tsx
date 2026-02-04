import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Directora de Marketing',
    company: 'Radio Metropolitana',
    content: 'Cloud Music transformó completamente nuestra presencia digital. El servicio de streaming es impecable y el soporte técnico es excepcional. Altamente recomendados.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    name: 'Carlos Ramírez',
    role: 'Fundador',
    company: 'Podcast Emprende Chile',
    content: 'El equipo de Cloud Music nos ayudó a profesionalizar nuestro audio y lanzar nuestra plataforma web. Son rápidos, creativos y entienden las necesidades de los creadores de contenido.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  },
  {
    name: 'Andrea Silva',
    role: 'Locutora Profesional',
    company: 'Independiente',
    content: 'Gracias a Cloud Music he podido expandir mi trabajo como locutora. La plataforma es confiable y el modelo de colaboración es justo para todos. Una excelente oportunidad para profesionales creativos.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    name: 'Roberto Torres',
    role: 'CEO',
    company: 'Estudio Creativo Sur',
    content: 'Llevamos más de un año trabajando con Cloud Music en proyectos de audio y desarrollo web. Su visión digital y atención al detalle nos han permitido crecer significativamente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    name: 'Valentina Morales',
    role: 'Productora',
    company: 'Medios Digitales VLC',
    content: 'La infraestructura que nos implementaron es sólida y escalable. Cloud Music entiende las necesidades del mercado chileno y ofrece soluciones de nivel internacional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
  },
  {
    name: 'Javier Núñez',
    role: 'Director',
    company: 'Radio Comunitaria Maipú',
    content: 'Accesible, profesional y comprometido. Cloud Music nos dio las herramientas para llevar nuestra radio al mundo digital sin complicaciones técnicas. Excelente servicio.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            La confianza de marcas, medios y creadores que ya están creciendo con Cloud Music
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-cyan-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} - ${testimonial.role}`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-cyan-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-4 rounded-full border border-cyan-200">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, i) => (
                <img 
                  key={i}
                  src={testimonial.image} 
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">+50 clientes satisfechos</p>
              <p className="text-sm text-slate-600">Confían en Cloud Music</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
