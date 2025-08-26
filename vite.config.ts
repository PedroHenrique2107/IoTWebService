import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Permite acesso de qualquer IP
    port: 2730,
    strictPort: false, // Permite que o Vite use uma porta alternativa se 2730 estiver ocupada
    open: false, // Não abre o navegador automaticamente
    cors: true, // Habilita CORS para requisições cross-origin
    hmr: {
      host: 'localhost', // Configuração do HMR para desenvolvimento
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
