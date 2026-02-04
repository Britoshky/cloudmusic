'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Mail, Phone, MessageSquare, Send, MapPin } from "lucide-react";

interface ContactFormProps {
  propertyId?: number;
  propertyTitle?: string;
  variant?: "default" | "compact";
}

export function ContactForm({ propertyId, propertyTitle, variant = "default" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: propertyTitle || '',
    mensaje: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Formulario enviado:', { ...formData, propertyId });
    setIsSuccess(true);
    setIsSubmitting(false);

    // Resetear después de 3 segundos
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: propertyTitle || '',
        mensaje: '',
        acceptTerms: false,
      });
      setIsSuccess(false);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="size-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="size-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
            <p className="text-muted-foreground">
              Nos pondremos en contacto contigo pronto.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="size-5" />
          Contactar
        </CardTitle>
        <CardDescription>
          {propertyTitle 
            ? `Solicita más información sobre ${propertyTitle}`
            : 'Envíanos tu consulta y te responderemos pronto'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Juan Pérez"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              <Mail className="size-3 mr-1 inline" />
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="telefono">
              <Phone className="size-3 mr-1 inline" />
              Teléfono
            </Label>
            <Input
              id="telefono"
              type="tel"
              placeholder="+56 9 1234 5678"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              required
            />
          </div>

          {/* Asunto (si no hay propiedad específica) */}
          {!propertyTitle && (
            <div className="space-y-2">
              <Label htmlFor="asunto">Asunto</Label>
              <Select 
                value={formData.asunto}
                onValueChange={(value) => setFormData({ ...formData, asunto: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un asunto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="informacion">Solicitar información</SelectItem>
                  <SelectItem value="visita">Agendar visita</SelectItem>
                  <SelectItem value="cotizacion">Solicitar cotización</SelectItem>
                  <SelectItem value="publicar">Publicar propiedad</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Mensaje */}
          <div className="space-y-2">
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea
              id="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              required
              rows={4}
            />
          </div>

          {/* Términos */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
              required
            />
            <Label
              htmlFor="terms"
              className="text-sm font-normal cursor-pointer leading-tight"
            >
              Acepto la{' '}
              <a href="/privacidad" className="text-primary hover:underline">
                Política de Privacidad
              </a>{' '}
              y autorizo el uso de mis datos
            </Label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Enviando...
              </>
            ) : (
              <>
                <Send className="size-4 mr-2" />
                Enviar mensaje
              </>
            )}
          </Button>
        </form>

        {/* Info adicional */}
        {variant === "default" && (
          <div className="mt-6 pt-6 border-t space-y-3">
            <p className="text-sm font-semibold">O contáctanos directamente:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="size-4 text-primary" />
                <a href="tel:+56912345678" className="hover:text-primary">
                  +56 9 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-4 text-primary" />
                <a href="mailto:contacto@pabellon.cl" className="hover:text-primary">
                  contacto@pabellon.cl
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
