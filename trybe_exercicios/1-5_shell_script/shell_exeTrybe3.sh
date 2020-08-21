#!/bin/bash



if [ -f "$1" ]
then
    echo "$1 é um arquivo comum"
    echo "Lendo o arquivo"
    sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
    echo "Aqui está a lista do arquivo"
    echo ""
    ls -halF $1
    

elif [ -d "$1" ]
then
    echo "$1 é um diretório"
    echo "Lendo o diretório"
    sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
    echo "Aqui está a lista do diretório"
    echo ""
    ls -halF $1

else
    echo "$1 Hummm...isto é alguma outra coisa"
    echo "Lendo o (...)"
    sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
    echo "Aqui está a resolução"
    echo ""
    ls -halF $1

fi
