'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  avatar?: string;
  tipo: 'particular' | 'inmobiliaria' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

interface RegisterData {
  nombre: string;
  email: string;
  telefono: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar usuario desde localStorage al montar
  useEffect(() => {
    const storedUser = localStorage.getItem('pabellon_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('pabellon_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Guardar usuario en localStorage cuando cambie
  useEffect(() => {
    if (user) {
      localStorage.setItem('pabellon_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pabellon_user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simular llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user
    const mockUser: User = {
      id: 1,
      nombre: 'Juan Pérez',
      email: email,
      telefono: '+56912345678',
      tipo: 'particular',
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    
    // Simular llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user
    const mockUser: User = {
      id: Date.now(),
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      tipo: 'particular',
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
