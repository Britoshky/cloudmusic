'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import { Search, X } from "lucide-react";
import { useSearch } from "@/app/contexts/SearchContext";

export function BusquedaFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setFilters, clearFilters, addToHistory } = useSearch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const params = new URLSearchParams();
    const ubicacion = formData.get('ubicacion') as string;
    const tipo = formData.get('tipo') as string;
    const operacion = formData.get('operacion') as string;
    const precioMin = formData.get('precioMin') as string;
    const precioMax = formData.get('precioMax') as string;
    const dormitorios = formData.get('dormitorios') as string;
    const banos = formData.get('banos') as string;

    if (ubicacion) params.set('ubicacion', ubicacion);
    if (tipo) params.set('tipo', tipo);
    if (operacion) params.set('operacion', operacion);
    if (precioMin) params.set('precioMin', precioMin);
    if (precioMax) params.set('precioMax', precioMax);
    if (dormitorios) params.set('dormitorios', dormitorios);
    if (banos) params.set('banos', banos);

    // Save to context
    const filters = {
      operacion: operacion || '',
      tipoPropiedad: tipo || '',
      ubicacion: ubicacion || '',
      precioMin: precioMin || '',
      precioMax: precioMax || '',
      dormitorios: dormitorios || '',
      banos: banos || '',
    };
    
    setFilters(filters);
    addToHistory(filters);

    router.push(`/busqueda?${params.toString()}`);
  };

  const handleClearFilters = () => {
    clearFilters();
    router.push('/busqueda');
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <Input
            name="ubicacion"
            placeholder="Ciudad o comuna..."
            defaultValue={searchParams.get('ubicacion') || ''}
          />
        </div>
        <Select name="tipo" defaultValue={searchParams.get('tipo') || ''}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="casa">Casa</SelectItem>
            <SelectItem value="departamento">Departamento</SelectItem>
            <SelectItem value="oficina">Oficina</SelectItem>
            <SelectItem value="terreno">Terreno</SelectItem>
          </SelectContent>
        </Select>
        <Select name="operacion" defaultValue={searchParams.get('operacion') || ''}>
          <SelectTrigger>
            <SelectValue placeholder="Operación" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Venta">Venta</SelectItem>
            <SelectItem value="Arriendo">Arriendo</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">
          <Search className="size-4 mr-2" />
          Buscar
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <Input
          name="precioMin"
          type="number"
          placeholder="Precio mín (UF)"
          defaultValue={searchParams.get('precioMin') || ''}
        />
        <Input
          name="precioMax"
          type="number"
          placeholder="Precio máx (UF)"
          defaultValue={searchParams.get('precioMax') || ''}
        />
        <Select name="dormitorios" defaultValue={searchParams.get('dormitorios') || ''}>
          <SelectTrigger>
            <SelectValue placeholder="Dormitorios" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>
        <Select name="banos" defaultValue={searchParams.get('banos') || ''}>
          <SelectTrigger>
            <SelectValue placeholder="Baños" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <Button
          type="button"
          onClick={handleClearFilters}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          <X className="size-4 mr-2" />
          Limpiar filtros
        </Button>
      </div>
    </form>
  );
}