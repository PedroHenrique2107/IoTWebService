/**
 * ===========================================
 * FOOTER COMPONENT - AIOT SOLUTION
 * ===========================================
 * 
 * Footer moderno e informativo com:
 * - Informações da empresa
 * - Links de navegação
 * - Contatos e redes sociais
 * - Design responsivo
 * - Gradientes e efeitos visuais
 */

import React from 'react';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Interface para links do footer
 */
interface FooterLink {
  label: string;
  href: string;
}

/**
 * Interface para seções do footer
 */
interface FooterSection {
  title: string;
  links: FooterLink[];
}

/**
 * Links organizados por seção
 */
const footerSections: FooterSection[] = [
  {
    title: 'Soluções',
    links: [
      { label: 'Proteção de Perímetro', href: '#solutions' },
      { label: 'Automação Operacional', href: '#solutions' },
      { label: 'Proteção de Pessoas', href: '#solutions' },
      { label: 'Consultoria IoT', href: '#contact' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nós', href: '#about' },
      { label: 'Nossos Benefícios', href: '#benefits' },
      { label: 'Casos de Sucesso', href: '#contact' },
      { label: 'Carreiras', href: '#contact' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de Ajuda', href: '#contact' },
      { label: 'Documentação', href: '#contact' },
      { label: 'Treinamentos', href: '#contact' },
      { label: 'Parcerias', href: '#contact' },
    ],
  },
];

/**
 * Informações de contato
 */
const contactInfo = {
  email: 'contato@aiotsolution.com',
  phone: '+55 (11) 99999-9999',
  address: 'São Paulo, SP - Brasil',
};

/**
 * Redes sociais
 */
const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer: React.FC = () => {

  /**
   * Função para scroll até o topo da página
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  /**
   * Função para navegação suave entre seções
   */
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  /**
   * Função para lidar com cliques em contatos
   */
  const handleContactClick = (type: 'email' | 'phone') => {
    if (type === 'email') {
      window.location.href = `mailto:${contactInfo.email}`;
    } else if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone}`;
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-background-secondary to-muted overflow-hidden">
      {/* === BACKGROUND DECORATIVO === */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-128 h-128 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* === CONTEÚDO PRINCIPAL DO FOOTER === */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* === INFORMAÇÕES DA EMPRESA === */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Zap className="h-8 w-8 text-primary animate-pulse-glow" />
                  <div className="absolute inset-0 animate-pulse-glow opacity-50">
                    <Zap className="h-8 w-8 text-primary-glow" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Aiot
                  </span>
                  <span className="text-sm text-muted-foreground -mt-1">
                    Solution
                  </span>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transformando o futuro com soluções IoT inteligentes. 
                Especializados em proteção de perímetro, automação operacional 
                e proteção de pessoas com tecnologia de ponta.
              </p>

              {/* Informações de contato */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <Mail className="h-4 w-4 mr-3 group-hover:animate-pulse" />
                  <span>{contactInfo.email}</span>
                </button>
                
                <button
                  onClick={() => handleContactClick('phone')}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <Phone className="h-4 w-4 mr-3 group-hover:animate-pulse" />
                  <span>{contactInfo.phone}</span>
                </button>
                
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* === LINKS DE NAVEGAÇÃO === */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* === REDES SOCIAIS === */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between">
              
              {/* Redes sociais */}
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-sm text-muted-foreground mr-2">
                  Siga-nos:
                </span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="
                      p-2 rounded-lg bg-glass border border-glass-border
                      text-muted-foreground hover:text-primary hover:border-primary/50
                      transition-all duration-300 hover:scale-110
                    "
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              {/* Botão voltar ao topo */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="
                  border-glass-border bg-glass backdrop-blur-md
                  hover:bg-primary hover:text-white hover:border-transparent
                  transition-all duration-300 group
                "
              >
                <span>Voltar ao Topo</span>
                <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-border bg-background-secondary/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
              
              {/* Copyright */}
              <div className="mb-4 md:mb-0">
                <p>
                  © {new Date().getFullYear()} Aiot Solution. Todos os direitos reservados.
                </p>
              </div>

              {/* Links legais */}
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => handleLinkClick('#contact')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  Política de Privacidade
                </button>
                <button 
                  onClick={() => handleLinkClick('#contact')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  Termos de Uso
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;