# 🌐 IoTWebService  

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=open-source-initiative" />
  <img src="https://img.shields.io/badge/Made%20With-❤️-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Build-React%20|%20TypeScript%20|%20Vite%20|%20Tailwind-blue?style=for-the-badge" />
</p>

O **IoTWebService** é um kit de ferramentas moderno para desenvolvedores que desejam construir **aplicações web de IoT (Internet das Coisas)** com **alta performance** e **UI consistente**.  
Ele combina **React**, **TypeScript**, **Vite** e **Tailwind CSS**, além de **componentes acessíveis via Radix UI e shadcn/ui**, criando a base perfeita para **dashboards IoT, painéis em tempo real e aplicações conectadas a dispositivos**.

---

## 🚀 Demonstração

👉 [Coloque aqui o link do deploy (Netlify/Vercel)]  
📸 *(Se quiser, adicione prints de telas ou GIFs mostrando o projeto em ação.)*

---

## ✨ Funcionalidades principais

- 📦 **Componentes de UI reutilizáveis** otimizados para IoT.  
- 🎨 **Design system consistente** (Radix UI + Tailwind + shadcn/ui).  
- ⚡ **Hot Reload com Vite** para desenvolvimento instantâneo.  
- 🔒 **Configuração TypeScript e ESLint** já integrada.  
- 📊 **Pronto para integrações IoT** (ex: MQTT, WebSockets, APIs REST).  
- 🌍 **Deploy fácil** em plataformas modernas como **Vercel, Netlify ou Docker**.  

---

## 🛠️ Tecnologias utilizadas  

<p align="center">
  <!-- React -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" height="60" alt="React" />
  <!-- TypeScript -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="60" height="60" alt="TypeScript" />
  <!-- Vite -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="60" height="60" alt="Vite" />
  <!-- TailwindCSS (logo oficial corrigido) -->
  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="60" height="60" alt="TailwindCSS" />
  <!-- shadcn/ui (sem ícone oficial, usando avatar oficial do GitHub) -->
  <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" width="60" height="60" alt="shadcn/ui" />
  <!-- Radix UI (logo oficial do repositório) -->
  <img src="https://avatars.githubusercontent.com/u/75042455?s=200&v=4" width="60" height="60" alt="Radix UI" />
</p>

| Tecnologia | Descrição |
|------------|------------|
| ⚛️ **React** | Biblioteca para construção de interfaces modernas e reativas |
| 📘 **TypeScript** | Superset do JavaScript com tipagem estática |
| ⚡ **Vite** | Build tool ultrarrápida com Hot Reload |
| 🎨 **Tailwind CSS** | Framework de utilitários CSS para estilização ágil |
| 🪄 **shadcn/ui** | Coleção de componentes de UI modernos e acessíveis |
| 🎯 **Radix UI** | Primitivas de UI acessíveis e de baixo nível |

---

## ⚙️ Como rodar localmente

```bash
# 1. Clone o repositório
git clone <YOUR_GIT_URL>

# 2. Acesse a pasta do projeto
cd <YOUR_PROJECT_NAME>

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

```

---

## 📂 Estrutura básica do projeto

```plaintext
├── src/              # Código-fonte principal
│   ├── components/   # Componentes de UI reutilizáveis
│   ├── pages/        # Páginas da aplicação
│   ├── hooks/        # Custom Hooks
│   ├── styles/       # Estilos globais e Tailwind
│   └── main.tsx      # Ponto de entrada da aplicação
├── public/           # Arquivos estáticos
├── index.html        # HTML principal
├── tsconfig.json     # Configuração TypeScript
├── vite.config.ts    # Configuração do Vite
└── package.json      # Dependências e scripts

