#!/bin/bash

if [ -d "$1 ]
then
    FILE =`ls -halF $1 | wc -l`
    echo "O diretório $1 têm $FILE arquivos"
else
    echo "O argumento $1 não é um diretório, tente novamente"
fi
