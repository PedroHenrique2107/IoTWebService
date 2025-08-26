/**
 * ===========================================
 * CONTACT SECTION - AIOT SOLUTION
 * ===========================================
 * 
 * Seção de contato moderna com:
 * - Formulário de contato responsivo
 * - Informações de contato direto
 * - Mapa interativo (placeholder)
 * - CTAs claros e eficazes
 */

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  Building, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

/**
 * Interface para dados do formulário
 */
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Interface para informações de contato
 */
interface ContactInfo {
  icon: React.ElementType;
  title: string;
  description: string;
  action?: string;
  color: 'primary' | 'secondary' | 'accent';
}

/**
 * Informações de contato direto
 */
const contactInfos: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    description: 'pedrohenrique@aiotsolution.com',
    action: 'mailto:pedrohenrique@aiotsolution.com',
    color: 'primary',
  },
  {
    icon: Phone,
    title: 'Telefone',
    description: '+55 (11) 99999-9999',
    action: 'tel:+5511999999999',
    color: 'secondary',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    description: 'São Paulo, SP - Brasil',
    color: 'accent',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    description: 'Seg-Sex: 8h às 18h',
    color: 'primary',
  },
];

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  // Estado do formulário
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Estado de loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Função para atualizar dados do formulário
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Validação simples do formulário
   */
  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({
        title: 'Campo obrigatório',
        description: 'Por favor, informe seu nome.',
        variant: 'destructive',
      });
      return false;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast({
        title: 'Email inválido',
        description: 'Por favor, informe um email válido.',
        variant: 'destructive',
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: 'Campo obrigatório',
        description: 'Por favor, escreva uma mensagem.',
        variant: 'destructive',
      });
      return false;
    }

    return true;
  };

  /**
   * Submissão do formulário
   * Em uma aplicação real, enviaria para uma API
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulação de envio (delay de 2 segundos)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Log dos dados do formulário (em produção, enviar para API)
      console.log('Dados do formulário:', formData);

      // Toast de sucesso
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Entraremos em contato em breve. Obrigado pelo interesse!',
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Tente novamente ou entre em contato direto por email/telefone.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Função para obter classes de cor
   */
  const getColorClasses = (color: ContactInfo['color']) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      accent: 'bg-accent/10 text-accent border-accent/20',
    };
    return colorMap[color];
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background-secondary relative overflow-hidden">
      {/* === BACKGROUND DECORATIVO === */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-128 h-128 bg-gradient-to-r from-accent/5 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* === CABEÇALHO === */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-6">
            Entre em{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua operação com nossas soluções IoT? 
            Entre em contato conosco e descubra como podemos ajudar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* === INFORMAÇÕES DE CONTATO === */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              Informações de Contato
            </h3>
            
            {contactInfos.map((info, index) => (
              <div
                key={info.title}
                className={`
                  glass-card group hover-lift
                  ${info.action ? 'cursor-pointer' : ''}
                `}
                onClick={() => info.action && window.open(info.action)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`
                    p-3 rounded-lg border
                    ${getColorClasses(info.color)}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-card-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* === CTA ADICIONAL === */}
            <div className="glass-card mt-8">
              <h4 className="font-semibold text-card-foreground mb-3">
                Precisa de ajuda imediata?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Nossa equipe está pronta para atendê-lo e esclarecer todas suas dúvidas.
              </p>
              <Button
                onClick={() => window.open('tel:+5511999999999')}
                variant="outline"
                size="sm"
                className="w-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>

          {/* === FORMULÁRIO DE CONTATO === */}
          <div className="lg:col-span-2">
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Primeira linha - Nome e Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Segunda linha - Empresa e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="company"
                        type="text"
                        placeholder="Nome da sua empresa"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Assunto
                  </label>
                  <Input
                    name="subject"
                    type="text"
                    placeholder="Como podemos ajudá-lo?"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Mensagem *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      name="message"
                      placeholder="Descreva seu projeto ou necessidade. Quanto mais detalhes, melhor poderemos ajudá-lo."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 min-h-[120px] resize-none"
                      required
                    />
                  </div>
                </div>

                {/* Botão de envio */}
                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-muted-foreground">
                    * Campos obrigatórios
                  </p>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      bg-gradient-primary text-white font-semibold px-8
                      hover:shadow-glow hover:scale-105 transition-all duration-300
                      disabled:opacity-50 disabled:hover:scale-100
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* === CTA FINAL === */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block max-w-2xl">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Transforme sua operação hoje mesmo
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a centenas de empresas que já confiam nas nossas soluções IoT 
              para proteger seus ativos e otimizar suas operações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('mailto:contato@aiotsolution.com')}
                className="bg-gradient-secondary text-white hover:shadow-glow-secondary transition-all duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Enviar Email Direto
              </Button>
              <Button
                onClick={() => window.open('tel:+5511999999999')}
                variant="outline"
                className="border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;