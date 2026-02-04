'use client';

import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Separator } from "@/app/components/ui/separator";
import { Upload, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function PublicarWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipo: '',
    operacion: '',
    region: '',
    comuna: '',
    direccion: '',
    titulo: '',
    descripcion: '',
    precio: '',
    dormitorios: '',
    banos: '',
    superficie: '',
    terreno: '',
    estacionamientos: '',
    bodegas: '',
    caracteristicas: [] as string[],
    nombreContacto: '',
    emailContacto: '',
    telefonoContacto: '',
    acceptTerms: false,
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('Publicar propiedad:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tipo de propiedad</h2>
              <p className="text-muted-foreground">Selecciona el tipo y operación</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Tipo de propiedad</Label>
                <Select 
                  value={formData.tipo}
                  onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="departamento">Departamento</SelectItem>
                    <SelectItem value="oficina">Oficina</SelectItem>
                    <SelectItem value="local">Local comercial</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="bodega">Bodega</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Operación</Label>
                <Select 
                  value={formData.operacion}
                  onValueChange={(value) => setFormData({ ...formData, operacion: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Venta o arriendo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venta">Venta</SelectItem>
                    <SelectItem value="arriendo">Arriendo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ubicación</h2>
              <p className="text-muted-foreground">¿Dónde se encuentra la propiedad?</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Región</Label>
                <Select 
                  value={formData.region}
                  onValueChange={(value) => setFormData({ ...formData, region: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la región" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rm">Región Metropolitana</SelectItem>
                    <SelectItem value="valparaiso">Valparaíso</SelectItem>
                    <SelectItem value="biobio">Biobío</SelectItem>
                    <SelectItem value="maule">Maule</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Comuna</Label>
                <Input
                  placeholder="Ej: Las Condes"
                  value={formData.comuna}
                  onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Dirección</Label>
                <Input
                  placeholder="Ej: Av. Apoquindo 7500"
                  value={formData.direccion}
                  onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Características</h2>
              <p className="text-muted-foreground">Detalles de la propiedad</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Título del anuncio</Label>
                <Input
                  placeholder="Ej: Hermosa casa en Las Condes"
                  value={formData.titulo}
                  onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Descripción</Label>
                <Textarea
                  placeholder="Describe la propiedad en detalle..."
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Precio (UF o CLP)</Label>
                  <Input
                    placeholder="Ej: UF 8,500"
                    value={formData.precio}
                    onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Dormitorios</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.dormitorios}
                    onChange={(e) => setFormData({ ...formData, dormitorios: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Baños</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.banos}
                    onChange={(e) => setFormData({ ...formData, banos: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Superficie (m²)</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.superficie}
                    onChange={(e) => setFormData({ ...formData, superficie: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Terreno (m²)</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.terreno}
                    onChange={(e) => setFormData({ ...formData, terreno: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Estacionamientos</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.estacionamientos}
                    onChange={(e) => setFormData({ ...formData, estacionamientos: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Fotos</h2>
              <p className="text-muted-foreground">Agrega imágenes de la propiedad</p>
            </div>

            <div className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer">
              <ImageIcon className="size-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Arrastra imágenes aquí</h3>
              <p className="text-sm text-muted-foreground mb-4">o haz clic para seleccionar</p>
              <Button variant="outline">
                <Upload className="size-4 mr-2" />
                Seleccionar archivos
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Formatos aceptados: JPG, PNG. Máximo 10 imágenes de 5MB cada una.
            </p>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Datos de contacto</h2>
              <p className="text-muted-foreground">¿Cómo pueden contactarte los interesados?</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Nombre completo</Label>
                <Input
                  placeholder="Juan Pérez"
                  value={formData.nombreContacto}
                  onChange={(e) => setFormData({ ...formData, nombreContacto: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Correo electrónico</Label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.emailContacto}
                  onChange={(e) => setFormData({ ...formData, emailContacto: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Teléfono</Label>
                <Input
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.telefonoContacto}
                  onChange={(e) => setFormData({ ...formData, telefonoContacto: e.target.value })}
                />
              </div>

              <Separator />

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                />
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal cursor-pointer leading-tight"
                >
                  Acepto los términos y condiciones y autorizo la publicación de esta propiedad
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Paso {step} de {totalSteps}</span>
          <span className="text-sm text-muted-foreground">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardContent className="pt-6">
          {renderStep()}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                Anterior
              </Button>
            )}
            
            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                className="flex-1"
              >
                Siguiente
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="flex-1"
                disabled={!formData.acceptTerms}
              >
                <CheckCircle2 className="size-4 mr-2" />
                Publicar propiedad
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
