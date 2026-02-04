'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface SearchFilters {
  operacion: string;
  tipoPropiedad: string;
  ubicacion: string;
  precioMin: string;
  precioMax: string;
  dormitorios: string;
  banos: string;
}

interface SearchHistory {
  id: string;
  filters: SearchFilters;
  timestamp: number;
  label: string;
}

interface SearchContextType {
  filters: SearchFilters;
  setFilters: (filters: Partial<SearchFilters>) => void;
  clearFilters: () => void;
  history: SearchHistory[];
  addToHistory: (filters: SearchFilters, label?: string) => void;
  clearHistory: () => void;
}

const defaultFilters: SearchFilters = {
  operacion: '',
  tipoPropiedad: '',
  ubicacion: '',
  precioMin: '',
  precioMax: '',
  dormitorios: '',
  banos: '',
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFiltersState] = useState<SearchFilters>(defaultFilters);
  const [history, setHistory] = useState<SearchHistory[]>([]);

  // Load from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFilters = localStorage.getItem('searchFilters');
      const savedHistory = localStorage.getItem('searchHistory');
      
      if (savedFilters) {
        try {
          setFiltersState(JSON.parse(savedFilters));
        } catch (e) {
          console.error('Error loading filters:', e);
        }
      }
      
      if (savedHistory) {
        try {
          setHistory(JSON.parse(savedHistory));
        } catch (e) {
          console.error('Error loading history:', e);
        }
      }
    }
  }, []);

  // Save filters to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchFilters', JSON.stringify(filters));
    }
  }, [filters]);

  // Save history to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchHistory', JSON.stringify(history));
    }
  }, [history]);

  const setFilters = (newFilters: Partial<SearchFilters>) => {
    setFiltersState(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFiltersState(defaultFilters);
  };

  const addToHistory = (searchFilters: SearchFilters, label?: string) => {
    const newHistoryItem: SearchHistory = {
      id: Date.now().toString(),
      filters: searchFilters,
      timestamp: Date.now(),
      label: label || generateLabel(searchFilters),
    };

    setHistory(prev => {
      // Add to beginning and limit to 10 items
      const updated = [newHistoryItem, ...prev].slice(0, 10);
      return updated;
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const generateLabel = (filters: SearchFilters): string => {
    const parts: string[] = [];
    
    if (filters.operacion) parts.push(filters.operacion);
    if (filters.tipoPropiedad) parts.push(filters.tipoPropiedad);
    if (filters.ubicacion) parts.push(`en ${filters.ubicacion}`);
    
    return parts.length > 0 ? parts.join(' ') : 'Búsqueda sin filtros';
  };

  return (
    <SearchContext.Provider value={{
      filters,
      setFilters,
      clearFilters,
      history,
      addToHistory,
      clearHistory,
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
