#!/bin/bash

PLACE=$1
EXTENSION=$2

DATE=$(date +%F)



if [ -d $PLACE ]
then
    
    echo "Por favor digite o prefixo, ou se preferir NÃO usar-lo aperte enter"
    read PREFIX
    echo ""    
    cd $PLACE
    echo "Diretório alvo foi: $PLACE"
    echo ""
    echo "Listando arquivos do diretório"
    sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1
    ls $PLACE

    if [ -z $PREFIX ]
    then
	
	echo ""    
        echo "Sua escolha foi optar por não inserir prefixo"
        echo "processando os arquivos"
        sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1

        for i in `ls *$EXTENSION`
        do
            mv $i ${DATE}-${i}
            echo "O aquivo: $i foi renomeado para: ${DATE}-${i}"
            echo ""
        done
        echo "Concluído com sucesso" 
        exit

    else
	echo ""    
        echo "Você optou por um prefixo de nome: $PREFIX"
        echo "processando os arquivos"
        sleep 1; echo "."; sleep 1; echo ".."; sleep 1; echo "..."; sleep 1

        for i in `ls *$EXTENSION`
        do
            mv $i ${PREFIX}_${DATE}-${i}
            echo "O aquivo: $i foi renomeado para: ${PREFIX}_${DATE}-${i}"
            echo ""
        done
        echo "Concluído com sucesso"
        exit    
    fi
            
else
        
        echo "O diretório informado : $PLACE NÃO EXISTE"
        echo "Processo cancelado"
        echo $PREFIX
        echo $PLACE
        echo $EXTENSION
        echo $DATE
        exit
fi
