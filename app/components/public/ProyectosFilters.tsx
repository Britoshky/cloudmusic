'use client';

import { Input } from "@/app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import { Search } from "lucide-react";

export function ProyectosFilters() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de búsqueda
    console.log('Buscar proyectos');
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input 
          name="busqueda"
          placeholder="Buscar proyecto..." 
          className="w-full"
        />
        <Select name="etapa">
          <SelectTrigger>
            <SelectValue placeholder="Etapa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pre-venta">Pre-venta</SelectItem>
            <SelectItem value="construccion">En construcción</SelectItem>
            <SelectItem value="inmediata">Entrega inmediata</SelectItem>
          </SelectContent>
        </Select>
        <Select name="comuna">
          <SelectTrigger>
            <SelectValue placeholder="Comuna" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="providencia">Providencia</SelectItem>
            <SelectItem value="las-condes">Las Condes</SelectItem>
            <SelectItem value="vitacura">Vitacura</SelectItem>
            <SelectItem value="nunoa">Ñuñoa</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">
          <Search className="size-4 mr-2" />
          Buscar
        </Button>
      </div>
    </form>
  );
}
