import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-4">
        {/* Número 404 */}
        <div className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          404
        </div>
        
        {/* Título */}
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Página não encontrada
        </h1>
        
        {/* Descrição */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Oops! A página que você está procurando não existe ou foi movida.
          Que tal voltar para a página inicial?
        </p>
        
        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-glass-border bg-glass backdrop-blur-md hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          
          <a href="/">
            <Button className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Página Inicial
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
