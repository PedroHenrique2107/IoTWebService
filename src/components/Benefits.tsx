/**
 * ===========================================
 * BENEFITS SECTION - AIOT SOLUTION
 * ===========================================
 * 
 * Seção dos benefícios das soluções integradas:
 * - Cards interativos com hover effects
 * - Ícones personalizados para cada benefício
 * - Layout responsivo em grid
 * - Animações de entrada escalonadas
 * 
 * Baseado no conteúdo do site original
 */

import React from 'react';
import { 
  Wrench, 
  Puzzle, 
  Zap, 
  DollarSign, 
  AlertTriangle, 
  Leaf 
} from 'lucide-react';

/**
 * Interface para definir cada benefício
 * Inclui ícone, número, título e descrição
 */
interface Benefit {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: 'primary' | 'secondary' | 'accent';
}

/**
 * Lista dos benefícios - extraídos do site original
 * Organizados de forma clara e com ícones apropriados
 */
const benefits: Benefit[] = [
  {
    id: 'maintenance',
    number: '01',
    title: 'Redução da manutenção',
    description: 'Menos tempo e dinheiro gastos em reparos graças à nossa tecnologia avançada e sistemas inteligentes de monitoramento.',
    icon: Wrench,
    color: 'primary',
  },
  {
    id: 'integration',
    number: '02',
    title: 'Recursos integrados',
    description: 'Tudo que você precisa em um só lugar, para uma gestão mais eficiente e menos complicada do seu sistema de segurança.',
    icon: Puzzle,
    color: 'secondary',
  },
  {
    id: 'energy',
    number: '03',
    title: 'Redução de energia',
    description: 'Contribua para um planeta mais verde com sistemas inteligentes que exigem significativamente menos energia para operar.',
    icon: Leaf,
    color: 'accent',
  },
  {
    id: 'infrastructure',
    number: '04',
    title: 'Economia de infraestrutura',
    description: 'Corte custos significativos com nossa solução otimizada que se adapta perfeitamente às suas necessidades específicas.',
    icon: DollarSign,
    color: 'primary',
  },
  {
    id: 'false-alarms',
    number: '05',
    title: 'Redução dos disparos falsos',
    description: 'Tecnologia de precisão avançada que significa menos incômodos e mais confiança no seu sistema de segurança.',
    icon: AlertTriangle,
    color: 'secondary',
  },
  {
    id: 'efficiency',
    number: '06',
    title: 'Eficiência operacional',
    description: 'Maximize a produtividade com automação inteligente e processos otimizados que trabalham 24/7 para você.',
    icon: Zap,
    color: 'accent',
  },
];

/**
 * Hook personalizado para animações de entrada baseadas em scroll
 * (Implementação simplificada - pode ser expandida com Intersection Observer)
 */
const useScrollAnimation = () => {
  // Por simplicidade, retornamos sempre true
  // Em uma implementação real, usaríamos Intersection Observer
  return true;
};

const Benefits: React.FC = () => {
  const isVisible = useScrollAnimation();

  /**
   * Função para obter as classes de cor baseadas no tipo
   */
  const getColorClasses = (color: Benefit['color']) => {
    const colorMap = {
      primary: {
        icon: 'bg-primary text-primary-foreground',
        border: 'border-primary/20',
        glow: 'group-hover:shadow-glow',
      },
      secondary: {
        icon: 'bg-secondary text-secondary-foreground',
        border: 'border-secondary/20',
        glow: 'group-hover:shadow-glow-secondary',
      },
      accent: {
        icon: 'bg-accent text-accent-foreground',
        border: 'border-accent/20',
        glow: 'group-hover:shadow-glow',
      },
    };
    
    return colorMap[color];
  };

  return (
    <section id="benefits" className="py-20 lg:py-28 relative overflow-hidden">
      {/* === BACKGROUND DECORATIVO === */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-128 h-128 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* === CABEÇALHO DA SEÇÃO === */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-6">
            Benefícios de Nossas{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Soluções Integradas
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossas tecnologias avançadas podem transformar sua operação, 
            reduzir custos e aumentar a eficiência com soluções inteligentes e sustentáveis.
          </p>
        </div>

        {/* === GRID DE BENEFÍCIOS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);
            
            return (
              <div
                key={benefit.id}
                className={`
                  glass-card group hover-lift relative overflow-hidden
                  ${colorClasses.border} ${colorClasses.glow}
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* === NÚMERO DO BENEFÍCIO === */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10 group-hover:text-muted/20 transition-colors duration-300">
                  {benefit.number}
                </div>

                {/* === ÍCONE === */}
                <div className={`
                  inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl
                  ${colorClasses.icon}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <benefit.icon className="h-6 w-6" />
                </div>

                {/* === CONTEÚDO === */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* === EFEITO DE HOVER GRADIENT === */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                  bg-gradient-to-br from-${benefit.color} to-${benefit.color}/50
                `} />

                {/* === BORDER ANIMADO === */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-primary transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* === CALL TO ACTION === */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block">
            <p className="text-body mb-4">
              Pronto para transformar sua operação?
            </p>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="
                bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold
                hover:shadow-glow hover:scale-105 transition-all duration-300
                inline-flex items-center gap-2
              "
            >
              Solicite uma Consulta
              <Zap className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;