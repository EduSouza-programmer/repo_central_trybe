#!/bin/bash

DATE=`date +%F` 

for i in `ls *.png`
do
   
    FILE="$DATE-$i"
    mv $i $FILE

done
