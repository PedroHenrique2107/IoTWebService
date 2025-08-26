# 🌐 Guia ngrok - Acesso Externo

## O que é ngrok?

O ngrok cria um túnel seguro que permite que pessoas de qualquer lugar do mundo acessem seu projeto local através de uma URL pública.

## 🚀 Como Usar (Método Fácil)

### Opção 1: Script Automático
```powershell
.\start-tunnel.ps1
```

### Opção 2: Comandos Manuais

**Terminal 1 - Iniciar servidor:**
```bash
npm run dev:network
```

**Terminal 2 - Criar túnel:**
```bash
npm run tunnel
```

## 📱 Como Compartilhar

### 1. Inicie o túnel
Execute um dos métodos acima.

### 2. Copie a URL
O ngrok vai mostrar algo como:
```
Forwarding    https://abc123.ngrok.io -> http://localhost:2730
```

### 3. Compartilhe
Envie a URL `https://abc123.ngrok.io` para qualquer pessoa!

## 🔍 Interface do ngrok

Acesse `http://localhost:4040` para ver:
- Status do túnel
- Logs de requisições
- Estatísticas de uso

## ⚠️ Limitações da Versão Gratuita

- **URLs temporárias:** Mudam a cada reinicialização
- **Limite de conexões:** Máximo de 40 conexões/minuto
- **Sem domínios fixos:** URLs sempre mudam

## 💡 Dicas

### Para Demonstrações:
1. Inicie o túnel
2. Copie a URL
3. Compartilhe imediatamente
4. Mantenha o terminal aberto

### Para Desenvolvimento:
- Use acesso local (`http://172.16.6.2:2730`) para testes rápidos
- Use ngrok apenas para demonstrações

## 🚨 Solução de Problemas

### Se o ngrok não iniciar:
```bash
# Verifique se está instalado
ngrok version

# Reinstale se necessário
npm install -g ngrok
```

### Se a URL não funcionar:
1. Verifique se o servidor está rodando
2. Confirme que a porta 2730 está livre
3. Tente reiniciar o ngrok

### Se der erro de conexão:
1. Verifique seu firewall
2. Confirme que o servidor está acessível localmente
3. Tente usar `http://localhost:2730` primeiro

## 🔐 Versão Paga (Recomendada para Uso Profissional)

### Benefícios:
- URLs fixas (não mudam)
- Mais conexões simultâneas
- Domínios personalizados
- Melhor performance

### Como configurar:
1. Crie conta em https://ngrok.com
2. Obtenha seu authtoken
3. Configure: `ngrok config add-authtoken SEU_TOKEN`
4. Use: `ngrok http 2730 --subdomain=meu-projeto`

## 📞 Exemplo Prático

**Cenário:** Você na faculdade, amigo em casa

1. **Você (faculdade):**
   ```bash
   npm run dev:network
   # Em outro terminal:
   ngrok http 2730
   ```

2. **Resultado:**
   ```
   Forwarding    https://abc123.ngrok.io -> http://localhost:2730
   ```

3. **Seu amigo (casa):**
   - Abre: `https://abc123.ngrok.io`
   - Vê seu projeto funcionando!

## 🎯 Comandos Úteis

```bash
# Ver status do ngrok
ngrok status

# Listar túneis ativos
ngrok list

# Parar todos os túneis
ngrok stop

# Ver logs detalhados
ngrok http 2730 --log=stdout
```
