/**
 * ===========================================
 * NAVBAR COMPONENT - AIOT SOLUTION
 * ===========================================
 * 
 * Navegação moderna e responsiva com:
 * - Logo animado
 * - Menu desktop e mobile
 * - Efeitos glassmorphism
 * - Scroll suave entre seções
 * 
 * Tecnologias: React, TypeScript, Tailwind CSS
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Interface para definir os itens do menu de navegação
 * Cada item tem um rótulo, link e se é um botão de ação
 */
interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

/**
 * Lista dos itens de navegação
 * Pode ser facilmente expandida ou modificada
 */
const navItems: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Soluções', href: '#solutions' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact', isAction: true },
];

const Navbar: React.FC = () => {
  // Estado para controlar se o menu mobile está aberto
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para detectar se a página foi rolada (para efeito de glassmorphism)
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Hook para detectar o scroll da página
   * Adiciona efeito visual quando a navbar não está no topo
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Função para scroll suave até uma seção específica
   * Fecha o menu mobile automaticamente após navegação
   */
  const handleNavClick = (href: string) => {
    // Remove o # do início do href para encontrar o elemento
    const element = document.getElementById(href.substring(1));
    
    if (element) {
      // Scroll suave até o elemento
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    // Fecha o menu mobile após navegação
    setIsMobileMenuOpen(false);
  };

  /**
   * Função para alternar o estado do menu mobile
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'glass backdrop-blur-md' : 'bg-transparent'}
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* === LOGO SECTION === */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            {/* Ícone animado do logo */}
            <div className="relative">
              <Zap className="h-8 w-8 text-primary group-hover:animate-pulse-glow transition-all duration-300" />
              <div className="absolute inset-0 animate-pulse-glow opacity-50">
                <Zap className="h-8 w-8 text-primary-glow" />
              </div>
            </div>
            
            {/* Nome da empresa com gradiente */}
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aiot
              </span>
              <span className="text-sm text-muted-foreground -mt-1">
                Solution
              </span>
            </div>
          </div>

          {/* === DESKTOP NAVIGATION === */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`
                  relative text-sm font-medium transition-all duration-300
                  hover:text-primary group
                  ${item.isAction ? '' : 'text-foreground/80 hover:text-foreground'}
                `}
              >
                {item.isAction ? (
                  // Botão de ação especial (Contato)
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gradient-primary text-white border-none hover:shadow-glow"
                  >
                    {item.label}
                  </Button>
                ) : (
                  <>
                    {item.label}
                    {/* Efeito de linha animada no hover */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                  </>
                )}
              </button>
            ))}
          </div>

          {/* === MOBILE MENU BUTTON === */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-foreground hover:bg-muted"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* === MOBILE NAVIGATION === */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2 border border-glass-border">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    block w-full text-left px-3 py-2 rounded-md text-base font-medium
                    transition-all duration-300
                    ${item.isAction 
                      ? 'bg-gradient-primary text-white hover:shadow-glow' 
                      : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;