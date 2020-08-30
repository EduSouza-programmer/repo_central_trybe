let numero = 5;
let quantAsteriscos = "";

if (numero > 1) {
    for (let a = 1; a <= numero; a += 1) {
        quantAsteriscos = "";
        for (let b = a; b <= numero; b += 1) {
            quantAsteriscos += "\xa0";
        }
        for (let c = 1; c <= a; c += 1) {
            quantAsteriscos += "*\xa0";
        }
        console.log(quantAsteriscos);
    }
}
