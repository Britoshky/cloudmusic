'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FavoritosContextType {
  favoritos: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorito: (id: number) => void;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
  clearAllFavoritos: () => void;
  count: number;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  // Cargar favoritos desde localStorage al montar
  useEffect(() => {
    const storedFavoritos = localStorage.getItem('pabellon_favoritos');
    if (storedFavoritos) {
      try {
        setFavoritos(JSON.parse(storedFavoritos));
      } catch (error) {
        console.error('Error parsing stored favoritos:', error);
        localStorage.removeItem('pabellon_favoritos');
      }
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('pabellon_favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const isFavorite = (id: number): boolean => {
    return favoritos.includes(id);
  };

  const toggleFavorito = (id: number) => {
    setFavoritos(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const addFavorite = (id: number) => {
    setFavoritos(prev => 
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  const removeFavorite = (id: number) => {
    setFavoritos(prev => prev.filter(fav => fav !== id));
  };

  const clearFavorites = () => {
    setFavoritos([]);
  };

  const clearAllFavoritos = () => {
    setFavoritos([]);
  };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        isFavorite,
        toggleFavorito,
        addFavorite,
        removeFavorite,
        clearFavorites,
        clearAllFavoritos,
        count: favoritos.length,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (context === undefined) {
    throw new Error('useFavoritos must be used within a FavoritosProvider');
  }
  return context;
}