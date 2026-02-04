import { useState } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare, Briefcase } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `*Nuevo contacto desde Cloud Music*
    
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Empresa:* ${formData.company || 'No especificada'}
*Servicio de interés:* ${formData.service}
*Mensaje:* ${formData.message}`;

    const phoneNumber = '56956197415';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(url, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-slate-600">
          Nos pondremos en contacto contigo a la brevedad. Revisa WhatsApp para continuar la conversación.
        </p>
      </div>
    );
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Hablemos de Tu Proyecto
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor solución digital para tu proyecto. Sin compromisos, solo conversación.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/56956197415" 
                    className="text-cyan-600 hover:text-cyan-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +56 9 5619 7415
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Respuesta inmediata</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a 
                    href="mailto:contacto@cloudmusic.cl" 
                    className="text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    contacto@cloudmusic.cl
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
              <h4 className="font-semibold text-slate-900 mb-3">¿Qué puedes esperar?</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  Respuesta rápida y personalizada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  Asesoría sin compromiso
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  Propuesta adaptada a tu presupuesto
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre completo *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Empresa u Organización
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                  Servicio de interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Audio y Locución">Audio y Locución Digital</option>
                  <option value="Streaming">Streaming y Radios Online</option>
                  <option value="Desarrollo Web">Desarrollo Web</option>
                  <option value="Infraestructura">Infraestructura y Servidores</option>
                  <option value="Consultoría">Consultoría Digital</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe brevemente qué necesitas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-slate-500 text-center">
                Al enviar, serás redirigido a WhatsApp para continuar la conversación
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
