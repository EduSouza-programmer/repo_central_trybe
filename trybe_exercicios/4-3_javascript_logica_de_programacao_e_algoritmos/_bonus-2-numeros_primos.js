function buscaNumeroPrimos(n) {
    let numerosPrimos = [];
    let indexNumeros = [];
    let contadora = 0;

    for (let i = 2; i < n; i++) {
        //Organizando a lista de números a partir do 2
        indexNumeros[i] = i;
        //console.log("aqui esta o conteudo da array " + indexNumeros[i]);
    }

    //console.log("Verificando tamanho da array indexNumeros, têm : " + indexNumeros.length);
    //console.log("Valor da minha entrada" + n);
    for (let i = 0; i < indexNumeros.length; i++) {
        contadora = 0;
        for (let cal = 0; cal < indexNumeros.length; cal++) {
            if (indexNumeros[i] % cal === 0) {
                console.log("Sendo : " + indexNumeros[i] + " / " + cal + " então resta 0");
                contadora++;
            }
        }

        console.log("O número " + indexNumeros[i] + " foi dividido " + contadora + " vezes");
        if (contadora === 2) {
            numerosPrimos.push(indexNumeros[i]);
            console.log("Então o número: " + indexNumeros[i] + " ,é um número primo");
        } else {
            console.log("O número: " + indexNumeros[i] + " não é um número primo");
        }
    }

    for (let i = 0; i < numerosPrimos.length; i++) {
        console.log(
            "Este são os números primos conforme solicitado de 0 a " +
                n +
                " na array numerosPrimos: " +
                numerosPrimos[i]
        );
    }

    return numerosPrimos;
}

buscaNumeroPrimos(20);
