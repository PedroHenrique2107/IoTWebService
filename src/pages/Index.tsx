/**
 * ===========================================
 * AIOT SOLUTION - PÁGINA PRINCIPAL
 * ===========================================
 * 
 * Website moderno e inovador para soluções IoT integradas.
 * 
 * Tecnologias utilizadas:
 * - React 18 com TypeScript
 * - Vite para build otimizado
 * - Tailwind CSS com design system customizado
 * - Componentes shadcn/ui
 * - Animações CSS personalizadas
 * 
 * Estrutura:
 * - Navbar com navegação suave
 * - Hero section impactante
 * - Seção de soluções integradas
 * - Benefícios das soluções
 * - Sobre a empresa
 * - Formulário de contato
 * - Footer completo
 * 
 * Design System:
 * - Cores: Verde tecnológico, Cyan, Azul
 * - Gradientes animados
 * - Efeitos glassmorphism
 * - Microinterações elegantes
 * - Layout responsivo (mobile-first)
 * 
 * Autor: Sistema de IA - Lovable
 * Data: 2025
 */

import React from 'react';

// === IMPORTAÇÃO DOS COMPONENTES ===
// Todos os componentes principais da aplicação
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Componente principal da página Index
 * 
 * Estrutura o layout completo da landing page
 * com todos os componentes organizados em seções
 */
const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* 
        === ESTRUTURA DA PÁGINA ===
        Cada seção é um componente independente e reutilizável
      */}
      
      {/* Navegação fixa no topo */}
      <Navbar />
      
      {/* Conteúdo principal */}
      <main className="relative">
        {/* 
          === SEÇÃO HERO ===
          Primeira impressão - título, subtítulo, CTAs principais
          Inclui estatísticas e scroll indicator
        */}
        <Hero />
        
        {/* 
          === SEÇÃO SOLUÇÕES ===
          Apresenta as 3 principais soluções:
          - Proteção de Perímetro
          - Automação Operacional  
          - Proteção de Pessoas
        */}
        <Solutions />
        
        {/* 
          === SEÇÃO BENEFÍCIOS ===
          6 principais benefícios das soluções integradas
          com cards interativos e animações
        */}
        <Benefits />
        
        {/* 
          === SEÇÃO SOBRE ===
          Informações da empresa, missão, visão, valores
          Estatísticas e diferenciais competitivos
        */}
        <About />
        
        {/* 
          === SEÇÃO CONTATO ===
          Formulário funcional, informações de contato
          CTAs claros para conversão
        */}
        <Contact />
      </main>
      
      {/* 
        === FOOTER ===
        Links de navegação, redes sociais, informações legais
        Botão para voltar ao topo
      */}
      <Footer />
    </div>
  );
};

export default Index;
