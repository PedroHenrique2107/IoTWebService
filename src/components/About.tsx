/**
 * ===========================================
 * ABOUT SECTION - AIOT SOLUTION
 * ===========================================
 * 
 * Seção sobre a empresa com:
 * - Informações da empresa
 * - Missão, visão e valores
 * - Estatísticas impressionantes
 * - Design moderno e interativo
 */

import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users2, 
  Globe, 
  Lightbulb,
  TrendingUp 
} from 'lucide-react';

/**
 * Interface para valores da empresa
 */
interface CompanyValue {
  title: string;
  description: string;
  icon: React.ElementType;
}

/**
 * Interface para estatísticas
 */
interface CompanyStat {
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

/**
 * Valores da empresa
 */
const companyValues: CompanyValue[] = [
  {
    title: 'Inovação',
    description: 'Buscamos constantemente novas tecnologias e soluções para revolucionar o mercado de IoT.',
    icon: Lightbulb,
  },
  {
    title: 'Qualidade',
    description: 'Compromisso com a excelência em cada projeto, garantindo resultados superiores.',
    icon: Award,
  },
  {
    title: 'Confiança',
    description: 'Construímos relacionamentos duradouros baseados na transparência e resultados.',
    icon: Heart,
  },
  {
    title: 'Crescimento',
    description: 'Crescemos junto com nossos clientes, evoluindo constantemente nossas soluções.',
    icon: TrendingUp,
  },
];

/**
 * Estatísticas da empresa
 */
const companyStats: CompanyStat[] = [
  {
    value: '5+',
    label: 'Anos de Experiência',
    description: 'Desenvolvendo soluções IoT inovadoras',
    icon: Globe,
  },
  {
    value: '200+',
    label: 'Projetos Entregues',
    description: 'Soluções implementadas com sucesso',
    icon: Award,
  },
  {
    value: '150+',
    label: 'Clientes Satisfeitos',
    description: 'Empresas que confiam em nossas soluções',
    icon: Users2,
  },
  {
    value: '99.9%',
    label: 'Uptime Médio',
    description: 'Confiabilidade e estabilidade garantidas',
    icon: Target,
  },
];

const About: React.FC = () => {

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* === BACKGROUND DECORATIVO === */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-128 h-128 bg-gradient-to-r from-accent/5 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* === CABEÇALHO === */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-6">
            Sobre a{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aiot Solution
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em soluções IoT inteligentes, 
            dedicada a transformar a forma como as organizações operam e protegem seus ativos.
          </p>
        </div>

        {/* === CONTEÚDO PRINCIPAL === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* === LADO ESQUERDO - INFORMAÇÕES === */}
          <div className="space-y-8">
            
            {/* Missão */}
            <div className="glass-card group hover-lift">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  Nossa Missão
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso a tecnologias IoT avançadas, oferecendo soluções 
                integradas que protegem pessoas, otimizam processos e garantem a segurança 
                de perímetros com eficiência e inovação.
              </p>
            </div>

            {/* Visão */}
            <div className="glass-card group hover-lift">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  Nossa Visão
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como líder mundial em soluções IoT integradas, 
                criando um futuro mais seguro e eficiente através de tecnologias 
                inteligentes e sustentáveis.
              </p>
            </div>

            {/* Diferencial */}
            <div className="glass-card group hover-lift">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  Nosso Diferencial
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Combinamos expertise técnica com uma abordagem consultiva, 
                desenvolvendo soluções personalizadas que se adaptam perfeitamente 
                às necessidades específicas de cada cliente.
              </p>
            </div>
          </div>

          {/* === LADO DIREITO - ESTATÍSTICAS === */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
              Nossos Números
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {companyStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card text-center group hover-lift"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Valor */}
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-medium text-card-foreground mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Descrição */}
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <div className="glass-card inline-block">
                <p className="text-muted-foreground mb-4">
                  Faça parte dessa jornada de transformação digital
                </p>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="
                    bg-gradient-secondary text-white px-6 py-3 rounded-lg font-semibold
                    hover:shadow-glow-secondary hover:scale-105 transition-all duration-300
                    inline-flex items-center gap-2
                  "
                >
                  Entre em Contato
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* === VALORES DA EMPRESA === */}
        <div>
          <h3 className="text-heading text-center mb-12">
            Nossos{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Valores
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className="glass-card text-center group hover-lift"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Ícone */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-primary group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Título */}
                <h4 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                
                {/* Descrição */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === COMPROMISSO === */}
        <div className="mt-20">
          <div className="glass-card max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Nosso Compromisso com o Futuro
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              Estamos constantemente investindo em pesquisa e desenvolvimento para 
              trazer as mais avançadas soluções IoT para o mercado. Nossa equipe 
              de especialistas trabalha incansavelmente para criar tecnologias que 
              não apenas atendam às necessidades atuais, mas antecipem as demandas 
              futuras de segurança e automação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;