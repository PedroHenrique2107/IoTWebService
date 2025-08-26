# Script para iniciar o servidor e criar túnel ngrok
Write-Host "🚀 Iniciando servidor e túnel ngrok..." -ForegroundColor Green

# Inicia o servidor em background
Write-Host "📡 Iniciando servidor na porta 2730..." -ForegroundColor Yellow
Start-Process -NoNewWindow -FilePath "npm" -ArgumentList "run", "dev:network"

# Aguarda 5 segundos para o servidor inicializar
Write-Host "⏳ Aguardando servidor inicializar..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Inicia o ngrok
Write-Host "🌐 Criando túnel ngrok..." -ForegroundColor Yellow
Write-Host "📋 A URL será exibida abaixo. Compartilhe com qualquer pessoa!" -ForegroundColor Cyan
Write-Host "🔗 Interface do ngrok: http://localhost:4040" -ForegroundColor Cyan
Write-Host ""

npx ngrok http 2730
