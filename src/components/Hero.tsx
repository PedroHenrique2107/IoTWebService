/**
 * ===========================================
 * HERO SECTION - AIOT SOLUTION
 * ===========================================
 * 
 * Seção principal da página com:
 * - Título impactante com gradiente
 * - Subtítulo explicativo
 * - CTAs (Call to Actions) principais
 * - Efeitos visuais modernos
 * - Scroll indicator animado
 * 
 * Responsividade: Mobile-first design
 */

import React from 'react';
import { ArrowRight, ChevronDown, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Interface para os stats/estatísticas mostradas no hero
 */
interface HeroStat {
  value: string;
  label: string;
  icon: React.ElementType;
}

/**
 * Dados das estatísticas - podem ser facilmente atualizados
 */
const heroStats: HeroStat[] = [
  { value: '500+', label: 'Projetos Concluídos', icon: Zap },
  { value: '99.9%', label: 'Uptime Garantido', icon: Shield },
  { value: '200+', label: 'Clientes Satisfeitos', icon: Users },
];

const Hero: React.FC = () => {

  /**
   * Função para scroll suave até a próxima seção
   */
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('solutions');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  /**
   * Função para navegação aos CTAs
   */
  const handleCTAClick = (action: 'contact' | 'solutions') => {
    const element = document.getElementById(action);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* === BACKGROUND GRADIENTE ANIMADO === */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient-shift opacity-90" />
      
      {/* === EFEITOS VISUAIS DE FUNDO === */}
      <div className="absolute inset-0">
        {/* Círculos decorativos animados */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* === CONTEÚDO PRINCIPAL === */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* === TÍTULO PRINCIPAL === */}
          <h1 className="text-display mb-6 animate-fade-in-up">
            <span className="block">
              Descubra os 
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {' '}benefícios
              </span>
            </span>
            <span className="block mt-2">
              das soluções integradas da{' '}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Aiot Solution
              </span>
            </span>
          </h1>

          {/* === SUBTÍTULO === */}
          <p className="text-subheading text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Soluções inovadoras para{' '}
            <span className="text-secondary font-semibold">proteção de perímetro</span>,{' '}
            <span className="text-primary font-semibold">automação de rotinas operacionais</span> e{' '}
            <span className="text-accent font-semibold">proteção de pessoas</span>.
          </p>

          {/* === CALL TO ACTIONS === */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={() => handleCTAClick('contact')}
              className="
                bg-gradient-primary text-white border-none font-semibold
                hover:shadow-glow hover:scale-105 transition-all duration-300
                group relative overflow-hidden
              "
            >
              <span className="relative z-10">Fale Conosco</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              
              {/* Efeito de shimmer no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleCTAClick('solutions')}
              className="
                border-glass-border bg-glass backdrop-blur-md text-foreground
                hover:bg-muted hover:border-primary/50 hover:text-primary
                transition-all duration-300
              "
            >
              Conheça Nossas Soluções
            </Button>
          </div>

          {/* === ESTATÍSTICAS === */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card text-center group hover-lift"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                {/* Ícone com efeito de glow */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Valor da estatística */}
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                
                {/* Descrição */}
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === SCROLL INDICATOR === */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNextSection}
            className="
              flex flex-col items-center text-foreground/60 hover:text-foreground
              transition-colors duration-300 group
            "
          >
            <span className="text-sm mb-2">Descubra mais</span>
            <div className="w-8 h-8 border border-foreground/30 rounded-full flex items-center justify-center group-hover:border-primary group-hover:shadow-glow transition-all duration-300">
              <ChevronDown className="h-4 w-4 group-hover:text-primary" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;