import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué servicios ofrece Cloud Music?',
    answer: 'Ofrecemos una amplia gama de servicios digitales incluyendo audio profesional y locución, streaming y radios online, desarrollo web personalizado, e infraestructura de servidores. Todos nuestros servicios están diseñados para ser accesibles, escalables y adaptados a las necesidades del mercado chileno.'
  },
  {
    question: '¿Trabajan solo con empresas grandes o también con emprendedores?',
    answer: 'Trabajamos con todo tipo de clientes: desde emprendedores individuales y creadores de contenido hasta medianas y grandes empresas. Creemos en la democratización de los servicios digitales de calidad y ofrecemos soluciones escalables para cada etapa de crecimiento.'
  },
  {
    question: '¿Cómo funciona el modelo de trabajo con locutores?',
    answer: 'Tenemos un modelo justo y transparente. Trabajamos con una red de locutores profesionales chilenos, ofreciendo oportunidades digitales equitativas. Los proyectos se asignan según las necesidades del cliente y el perfil de voz requerido, garantizando calidad y profesionalismo.'
  },
  {
    question: '¿Ofrecen soporte técnico después de implementar una solución?',
    answer: 'Sí, todos nuestros servicios incluyen soporte técnico continuo. Creemos en relaciones de largo plazo con nuestros clientes. Nuestro equipo está disponible para resolver dudas, realizar actualizaciones y asegurar que tu proyecto siga creciendo sin interrupciones.'
  },
  {
    question: '¿Cuánto tiempo toma implementar un proyecto?',
    answer: 'El tiempo varía según la complejidad del proyecto. Un servicio de streaming básico puede estar listo en 1-2 semanas, mientras que desarrollos web personalizados pueden tomar 4-8 semanas. Siempre trabajamos con plazos claros y comunicación constante para cumplir tus expectativas.'
  },
  {
    question: '¿Necesito conocimientos técnicos para usar sus servicios?',
    answer: 'No necesitas ser experto en tecnología. Nuestra filosofía es "tecnología al servicio de las personas". Diseñamos soluciones intuitivas y te acompañamos en cada paso, desde la implementación hasta el uso diario, con capacitación y documentación clara.'
  },
  {
    question: '¿Cómo puedo solicitar un presupuesto?',
    answer: 'Puedes contactarnos directamente por WhatsApp al +56 9 5619 7415, por email, o a través del formulario de contacto en esta página. Te responderemos en un plazo máximo de 24 horas con una propuesta personalizada según tus necesidades específicas.'
  },
  {
    question: '¿Trabajan con clientes fuera de Chile?',
    answer: 'Aunque nuestro enfoque principal es el mercado chileno, también trabajamos con clientes en otros países de Latinoamérica. Nuestra infraestructura digital y modelo de trabajo remoto nos permite ofrecer servicios de calidad sin importar la ubicación geográfica.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold text-slate-900 text-lg pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Below FAQ */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
          <p className="text-slate-700 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="https://wa.me/56956197415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contáctanos directamente
          </a>
        </div>
      </div>
    </section>
  );
}
