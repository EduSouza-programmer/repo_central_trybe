#!/bin/bash

read -p "É diretório ou arquivo? digite: " FILE

if [ -f "$FILE" ]
then
    echo "$FILE é um arquivo comum"
    echo "Lendo o arquivo"
    sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
    echo "Aqui está a lista do arquivo"
    echo ""
    ls -halF $FILE
    

elif [ -d "$FILE" ]
then
    echo "$FILE é um diretório"
    echo "Lendo o diretório"
    sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
    echo "Aqui está a lista do diretório"
    echo ""
    ls -halF $FILE

else
    echo "$FILE Hummm...isto é alguma outra coisa"
    echo "Lendo o (...)"
    sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
    echo "Aqui está a resolução"
    echo ""
    ls -halF $FILE

fi
