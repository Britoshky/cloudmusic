'use client';

import { useState } from "react";
import { Menu, X, Home, ChevronRight, Heart, User, LogOut } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import { useFavoritos } from "@/app/contexts/FavoritosContext";

interface PabellonNavbarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export function PabellonNavbar({ isAuthenticated: propAuth, onLogout: propLogout }: PabellonNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comprarMenuOpen, setComprarMenuOpen] = useState(false);
  const [arrendarMenuOpen, setArrendarMenuOpen] = useState(false);
  const [mobileComprarOpen, setMobileComprarOpen] = useState(false);
  const [mobileArrendarOpen, setMobileArrendarOpen] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  
  // Use contexts
  const { user, logout: contextLogout } = useAuth();
  const { favoritos } = useFavoritos();
  
  // Prefer context over props
  const isAuthenticated = user !== null || propAuth;
  const handleLogout = () => {
    if (propLogout) propLogout();
    contextLogout();
  };
  
  // Get user initials
  const getUserInitials = () => {
    if (!user?.nombre) return 'U';
    const names = user.nombre.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return user.nombre[0].toUpperCase();
  };

  const handleSubMenuClick = (operacion: string, tipo: string) => {
    const searchParams = new URLSearchParams({
      operacion,
      tipoPropiedad: tipo,
    });
    router.push(`/busqueda?${searchParams.toString()}`);
    setComprarMenuOpen(false);
    setArrendarMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-slate-900">Pabellón</div>
              <div className="text-xs text-slate-600">de la Construcción</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div 
              className="relative group"
              onMouseEnter={() => setComprarMenuOpen(true)}
              onMouseLeave={() => setComprarMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Comprar
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
              {comprarMenuOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                    <button onClick={() => handleSubMenuClick("venta", "casa")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Casas</button>
                    <button onClick={() => handleSubMenuClick("venta", "departamento")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Departamentos</button>
                    <button onClick={() => handleSubMenuClick("venta", "terreno")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Parcelas</button>
                    <button onClick={() => handleSubMenuClick("venta", "terreno")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Sitios</button>
                    <button onClick={() => handleSubMenuClick("venta", "oficina")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Oficinas</button>
                  </div>
                </div>
              )}
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setArrendarMenuOpen(true)}
              onMouseLeave={() => setArrendarMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Arrendar
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
              {arrendarMenuOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                    <button onClick={() => handleSubMenuClick("arriendo", "casa")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Casas</button>
                    <button onClick={() => handleSubMenuClick("arriendo", "departamento")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Departamentos</button>
                    <button onClick={() => handleSubMenuClick("arriendo", "terreno")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Parcelas</button>
                    <button onClick={() => handleSubMenuClick("arriendo", "terreno")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Sitios</button>
                    <button onClick={() => handleSubMenuClick("arriendo", "oficina")} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Oficinas</button>
                  </div>
                </div>
              )}
            </div>
            <Link href="/proyectos" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Proyectos</Link>
            <Link href="/subsidios" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Subsidios</Link>
            <Link href="/guias" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Guías</Link>
            <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Blog</Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/favoritos">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Favoritos
                {favoritos.length > 0 && <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs">+</Badge>}
              </Button>
            </Link>
            {isAuthenticated ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-500 text-white font-bold">{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="font-normal">Cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/publicar">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Publicar Propiedad
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline">
                    <User className="w-4 h-4 mr-2" />
                    Ingresar
                  </Button>
                </Link>
                <Link href="/registro">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Publicar Gratis
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <div>
              <button 
                className="flex items-center justify-between w-full text-slate-700 py-2 font-medium" 
                onClick={() => setMobileComprarOpen(!mobileComprarOpen)}
              >
                Comprar
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileComprarOpen ? 'rotate-90' : ''}`} />
              </button>
              {mobileComprarOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("venta", "casa")}>Casas</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("venta", "departamento")}>Departamentos</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("venta", "parcela")}>Parcelas</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("venta", "sitio")}>Sitios</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("venta", "oficina")}>Oficinas</button>
                </div>
              )}
            </div>
            <div>
              <button 
                className="flex items-center justify-between w-full text-slate-700 py-2 font-medium" 
                onClick={() => setMobileArrendarOpen(!mobileArrendarOpen)}
              >
                Arrendar
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileArrendarOpen ? 'rotate-90' : ''}`} />
              </button>
              {mobileArrendarOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("arriendo", "casa")}>Casas</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("arriendo", "departamento")}>Departamentos</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("arriendo", "parcela")}>Parcelas</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("arriendo", "sitio")}>Sitios</button>
                  <button className="block w-full text-left py-2 text-slate-600 hover:text-blue-600" onClick={() => handleSubMenuClick("arriendo", "oficina")}>Oficinas</button>
                </div>
              )}
            </div>
            <Link href="/proyectos" className="block w-full text-left text-slate-700 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Proyectos</Link>
            <Link href="/subsidios" className="block w-full text-left text-slate-700 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Subsidios</Link>
            <Link href="/guias" className="block w-full text-left text-slate-700 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Guías</Link>
            <Link href="/blog" className="block w-full text-left text-slate-700 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <div className="pt-3 space-y-2">
              <Link href="/favoritos">
                <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                  <Heart className="w-4 h-4 mr-2" />
                  Favoritos
                  {favoritos.length > 0 && <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs">+</Badge>}
                </Button>
              </Link>
              {isAuthenticated ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-blue-500 text-white font-bold">{getUserInitials()}</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel className="font-normal">Cuenta</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Cerrar Sesión
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link href="/publicar">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                      Publicar Propiedad
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      Ingresar
                    </Button>
                  </Link>
                  <Link href="/registro">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                      Publicar Gratis
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}