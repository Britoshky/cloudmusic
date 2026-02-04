

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo-transparent.svg" 
              alt="Cloud Music Logo - Economía Creativa Digital Chile" 
              className="h-20 md:h-24 w-auto"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Quiénes Somos
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-slate-900">Cloud Music</span> es una empresa chilena de economía creativa que combina <strong>audio profesional</strong>, tecnología y <strong>soluciones digitales</strong> para apoyar a marcas, medios, emprendedores y creadores de contenido. 
            <br/><br/>
            Creamos herramientas accesibles, modelos justos y servicios pensados para crecer en el mundo digital. Desde <strong>locución comercial</strong> y <strong>streaming de radio online</strong> hasta <strong>desarrollo web</strong> e infraestructura, ofrecemos soluciones integrales para tus proyectos creativos.
          </p>
        </div>
      </div>
    </section>
  );
}