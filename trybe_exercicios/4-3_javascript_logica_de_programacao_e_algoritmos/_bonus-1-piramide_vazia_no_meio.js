let numero = 7;
let quantAsteriscos = "";

if (numero > 1) {
    //loop pai controlando cada linha do preechimento do triangulo.
    for (let a = 1; a <= numero; a += 1) {
        quantAsteriscos = "";
        // preechendo primeiro com espaçamentos para criar a identação correta do triangulo.
        for (let b = a; b <= numero; b += 1) {
            quantAsteriscos += "\xa0";
        }
        for (let c = 1; c <= a; c += 1) {
            //verifica se não estamos na ultima interação.
            if (a != numero) {
                //se a interação do loop pai é menor ou igual a 2.
                if (a <= 2) {
                    quantAsteriscos += "*\xa0";
                }
                // faz o primeiro asterisco e o ultimo desenhando o triangulo.
                else if ((a >= 3 && c == 1) || (a >= 3 && c == a)) {
                    quantAsteriscos += "*\xa0";
                }
                // preenche com os espaçamentos.
                else {
                    quantAsteriscos += "\xa0\xa0";
                }
            }
            // preenche a base do triangulo.
            else {
                quantAsteriscos += "*\xa0";
            }
        }

        console.log(quantAsteriscos);
    }
}
