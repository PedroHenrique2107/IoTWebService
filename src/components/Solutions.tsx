/**
 * ===========================================
 * SOLUTIONS SECTION - AIOT SOLUTION
 * ===========================================
 * 
 * Seção das principais soluções oferecidas:
 * - Proteção de perímetro
 * - Automação operacional
 * - Proteção de pessoas
 * 
 * Features:
 * - Cards com efeitos visuais avançados
 * - Hover interactions
 * - Responsive design
 * - Ícones personalizados
 */

import React from 'react';
import { 
  Shield, 
  Settings, 
  Users, 
  Camera, 
  Cpu, 
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Interface para definir cada solução
 */
interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  color: 'primary' | 'secondary' | 'accent';
  image?: string; // Para futuras imagens personalizadas
}

/**
 * Lista das soluções principais
 * Baseada no conteúdo do site original
 */
const solutions: Solution[] = [
  {
    id: 'perimeter',
    title: 'Proteção de Perímetro',
    subtitle: 'Segurança Avançada 24/7',
    description: 'Sistemas inteligentes de monitoramento e detecção que protegem sua propriedade com tecnologia de ponta e alertas em tempo real.',
    features: [
      'Detecção de intrusão inteligente',
      'Monitoramento 24/7 automatizado',
      'Alertas em tempo real',
      'Integração com sistemas existentes',
      'Análise comportamental avançada'
    ],
    icon: Shield,
    color: 'primary',
  },
  {
    id: 'automation',
    title: 'Automação Operacional',
    subtitle: 'Eficiência Inteligente',
    description: 'Automatize rotinas operacionais complexas com nossa plataforma de IoT, reduzindo custos e aumentando a produtividade significativamente.',
    features: [
      'Automação de processos complexos',
      'Dashboard de controle centralizado',
      'Relatórios e analytics avançados',
      'Integração com sistemas legados',
      'Configuração personalizada'
    ],
    icon: Settings,
    color: 'secondary',
  },
  {
    id: 'people',
    title: 'Proteção de Pessoas',
    subtitle: 'Segurança Humana Prioritária',
    description: 'Tecnologias focadas na segurança e bem-estar das pessoas, com monitoramento inteligente e sistemas de resposta rápida.',
    features: [
      'Monitoramento de saúde em tempo real',
      'Detecção de emergências automática',
      'Sistemas de localização avançados',
      'Comunicação de emergência integrada',
      'Protocolos de resposta personalizados'
    ],
    icon: Users,
    color: 'accent',
  },
];

const Solutions: React.FC = () => {

  /**
   * Função para obter as classes de estilo baseadas na cor
   */
  const getColorClasses = (color: Solution['color']) => {
    const colorMap = {
      primary: {
        gradient: 'from-primary to-primary-glow',
        icon: 'bg-primary text-primary-foreground',
        border: 'border-primary/20',
        glow: 'hover:shadow-glow',
      },
      secondary: {
        gradient: 'from-secondary to-accent',
        icon: 'bg-secondary text-secondary-foreground',
        border: 'border-secondary/20',
        glow: 'hover:shadow-glow-secondary',
      },
      accent: {
        gradient: 'from-accent to-primary',
        icon: 'bg-accent text-accent-foreground',
        border: 'border-accent/20',
        glow: 'hover:shadow-glow',
      },
    };
    
    return colorMap[color];
  };

  /**
   * Navegar para seção de contato
   */
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background-secondary relative overflow-hidden">
      {/* === BACKGROUND DECORATIVO === */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* === CABEÇALHO DA SEÇÃO === */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-6">
            Nossas{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Soluções Integradas
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-4xl mx-auto">
            Transforme sua operação com tecnologias IoT de última geração. 
            Cada solução é projetada para integrar perfeitamente com seus sistemas existentes, 
            proporcionando eficiência máxima e segurança incomparável.
          </p>
        </div>

        {/* === GRID DE SOLUÇÕES === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const colorClasses = getColorClasses(solution.color);
            
            return (
              <div
                key={solution.id}
                className={`
                  glass-card group hover-lift relative overflow-hidden h-full
                  ${colorClasses.border} ${colorClasses.glow}
                  animate-fade-in-up
                `}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* === HEADER DO CARD === */}
                <div className="relative mb-6">
                  {/* Ícone principal */}
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl
                    ${colorClasses.icon}
                    group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                  `}>
                    <solution.icon className="h-8 w-8" />
                  </div>

                  {/* Títulos */}
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4">
                    {solution.subtitle}
                  </p>
                  
                  {/* Descrição */}
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* === LISTA DE FEATURES === */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-card-foreground mb-3 uppercase tracking-wider">
                    Principais Recursos:
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* === CTA DO CARD === */}
                <div className="mt-auto">
                  <Button
                    onClick={handleContactClick}
                    variant="outline"
                    className={`
                      w-full border-glass-border bg-glass backdrop-blur-md
                      hover:bg-gradient-${solution.color} hover:text-white hover:border-transparent
                      group/btn transition-all duration-300
                    `}
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* === EFEITO DE HOVER GRADIENT === */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500
                  bg-gradient-to-br ${colorClasses.gradient}
                `} />

                {/* === DECORAÇÃO VISUAL === */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 overflow-hidden">
                  <div className={`
                    w-full h-full bg-gradient-to-bl ${colorClasses.gradient} 
                    transform rotate-45 translate-x-16 -translate-y-16
                    group-hover:translate-x-12 group-hover:-translate-y-12
                    transition-transform duration-500
                  `} />
                </div>
              </div>
            );
          })}
        </div>

        {/* === SEÇÃO DE INTEGRAÇÃO === */}
        <div className="text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Ícones representativos */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl text-muted-foreground">+</div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Cpu className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl text-muted-foreground">+</div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
              </div>

              {/* Texto explicativo */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Integração Completa
                </h3>
                <p className="text-muted-foreground mb-4">
                  Todas as nossas soluções trabalham em conjunto, criando um ecossistema 
                  inteligente e eficiente para sua organização.
                </p>
                <Button
                  onClick={handleContactClick}
                  className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
                >
                  Converse com um Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;