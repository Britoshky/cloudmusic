import { PabellonNavbar } from "@/app/components/layout/PabellonNavbar";
import { PabellonFooter } from "@/app/components/layout/PabellonFooter";
import { ContactForm } from "@/app/components/public/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

export const metadata = {
  title: 'Contacto | Pabellón.cl',
  description: 'Contáctanos para cualquier consulta sobre propiedades',
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <PabellonNavbar isAuthenticated={false} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">¿Necesitas ayuda?</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para responder tus preguntas sobre propiedades, proyectos y servicios
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <div>
              <ContactForm variant="default" />
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              {/* Horarios */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Horario de atención</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Lunes a Viernes: 9:00 - 19:00</p>
                        <p>Sábados: 10:00 - 14:00</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Teléfono */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Teléfono</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <a href="tel:+56912345678" className="text-primary hover:underline">
                            +56 9 1234 5678
                          </a>
                        </p>
                        <p className="text-muted-foreground">Llamadas y WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="size-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Correo electrónico</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <a href="mailto:contacto@pabellon.cl" className="text-primary hover:underline">
                            contacto@pabellon.cl
                          </a>
                        </p>
                        <p className="text-muted-foreground">Respuesta en 24 horas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ubicación */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="size-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Oficina principal</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Av. Providencia 2653, Piso 10</p>
                        <p>Providencia, Santiago</p>
                        <p>Región Metropolitana</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mapa placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-slate-200 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="size-12 mx-auto mb-2" />
                    <p className="text-sm">Mapa interactivo</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <PabellonFooter />
    </div>
  );
}
