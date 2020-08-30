let numero = 7;
let quantAsteriscos = "";
let box = [];
let contador = 1;

if (numero > 1) {
    for (let a = 1; a <= numero; a += 1) {
        quantAsteriscos = "";
        for (let b = a; b <= numero; b += 1) {
            quantAsteriscos += "0";
        }
        for (let c = 1; c <= a; c += 1) {
            if (contador == numero - 4) {
                quantAsteriscos += `${contador}\xa0`;
                continue;
            } else {
                quantAsteriscos += `*\xa0`;
            }
        }

        console.log(quantAsteriscos);
        contador++;
    }
}
