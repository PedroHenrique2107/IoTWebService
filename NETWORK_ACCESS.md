# Acesso em Rede Local e Externa

Este projeto está configurado para ser acessível em redes locais e externas.

## 🏠 Acesso Local (Mesma Rede WiFi)

### Como Iniciar o Servidor

#### Opção 1: Usando o script dedicado (Recomendado)
```bash
npm run dev:network
```

#### Opção 2: Usando o comando padrão
```bash
npm run dev
```

### Como Acessar de Outros Dispositivos na Mesma Rede

1. **Descobrir o IP do seu computador:**
   ```cmd
   ipconfig
   ```
   Procure por "Endereço IPv4" na seção da sua rede WiFi.

2. **Acessar o projeto:**
   ```
   http://SEU_IP:2730
   ```
   **Exemplo:** `http://172.16.6.2:2730`

## 🌐 Acesso Externo (De Qualquer Lugar)

### Opção 1: ngrok (Recomendado)

#### Instalação (já feita):
```bash
npm install -g ngrok
```

#### Como usar:

**Passo 1:** Inicie o servidor local
```bash
npm run dev:network
```

**Passo 2:** Em outro terminal, crie o túnel
```bash
npm run tunnel
```

**Ou use o comando combinado:**
```bash
npm run dev:tunnel
```

#### Resultado:
O ngrok vai gerar uma URL como:
```
https://abc123.ngrok.io
```

Compartilhe essa URL com qualquer pessoa, de qualquer lugar!

### Opção 2: Cloudflare Tunnel (Alternativa Gratuita)

1. **Instale o cloudflared:**
   - Baixe de: https://github.com/cloudflare/cloudflared/releases

2. **Autentique-se:**
   ```bash
   cloudflared tunnel login
   ```

3. **Crie um túnel:**
   ```bash
   cloudflared tunnel create meu-projeto
   ```

4. **Configure o túnel:**
   Crie um arquivo `tunnel.yml`:
   ```yaml
   tunnel: SEU_TUNNEL_ID
   credentials-file: /caminho/para/credentials.json
   ingress:
     - hostname: seu-projeto.trycloudflare.com
       service: http://localhost:2730
     - service: http_status:404
   ```

5. **Execute:**
   ```bash
   cloudflared tunnel run meu-projeto
   ```

### Opção 3: LocalTunnel (Alternativa Simples)

1. **Instale:**
   ```bash
   npm install -g localtunnel
   ```

2. **Use:**
   ```bash
   lt --port 2730
   ```

## 🔧 Configurações de Rede

- **Porta:** 2730
- **Host:** Configurado para aceitar conexões de qualquer IP
- **CORS:** Habilitado para requisições cross-origin
- **HMR:** Configurado para desenvolvimento local

## 📱 Como Compartilhar

### Para acesso local:
- Compartilhe: `http://172.16.6.2:2730`
- Apenas funciona na mesma rede WiFi

### Para acesso externo:
- Compartilhe a URL do ngrok: `https://abc123.ngrok.io`
- Funciona de qualquer lugar do mundo

## ⚠️ Considerações de Segurança

### ngrok (Gratuito):
- URLs mudam a cada reinicialização
- Limite de conexões simultâneas
- Ideal para demonstrações e testes

### ngrok (Pago):
- URLs fixas
- Mais conexões simultâneas
- Melhor para uso profissional

### Cloudflare Tunnel:
- URLs fixas
- Mais seguro
- Melhor performance

## 🚨 Solução de Problemas

### Se o ngrok não funcionar:
1. Verifique se o servidor está rodando na porta 2730
2. Confirme que não há firewall bloqueando
3. Tente reiniciar o ngrok

### Se o acesso externo não funcionar:
1. Verifique se o túnel está ativo
2. Confirme a URL gerada
3. Teste a URL em um navegador incógnito

## 💡 Dicas

- **Para demonstrações:** Use ngrok gratuito
- **Para uso profissional:** Considere ngrok pago ou Cloudflare
- **Para desenvolvimento:** Use acesso local
- **Sempre teste:** Verifique se a URL funciona antes de compartilhar
