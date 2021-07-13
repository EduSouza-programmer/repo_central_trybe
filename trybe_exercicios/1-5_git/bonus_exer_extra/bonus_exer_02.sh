#!/bin/bash

PARAMS=$@

for i in $PARAMS
do
    if [ -f "$i" ]
    then
        echo "$i é um arquivo comum"
        echo "Lendo o arquivo"
        sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
        echo "Aqui está a lista do arquivo"
        echo ""
        ls -halF $i
	echo "" ; echo ""
        
    
    elif [ -d "$i" ]
    then
        echo "$i é um diretório"
        echo "Lendo o diretório"
        sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
        echo "Aqui está a lista do diretório"
        echo ""
        ls -halF $i
	echo "" ; echo ""
    
    else
        echo "$i Hummm...isto é alguma outra coisa"
        echo "Lendo o diretório atual"
        sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
        echo "Aqui está do diretório"
        echo ""
        ls -halF $i
	echo "" ; echo ""
    
    fi

done
