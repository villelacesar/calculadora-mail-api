#!/usr/bin/bash
echo "Inicio de deploy para a aplicação"

echo "#####################################"

echo "Arg 1 - template raiz path: $1"
echo "Arg 2 - Java path: $2"

echo "1 de 3 - Parando serviços do PM2"

pm2 stop all
pm2 delete all

echo "2 de 3 - Template (criador de imagens) #NODE"

cd $1

pm2 start dist/main.js --name template

echo "3 de 3 - Calculadora (processador das informacoes) #JAVA"

pm2 start java -- -jar $2 --name calculadora

echo "Lista de Serviços"
pm2 ls


