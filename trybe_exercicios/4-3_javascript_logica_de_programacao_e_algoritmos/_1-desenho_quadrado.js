let numero = 5;
let quantAsteriscos;

if (numero > 1) {
    for (let a = 1; a <= numero; a += 1) {
        quantAsteriscos = "";
        for (let b = 1; b <= numero; b += 1) {
            quantAsteriscos += "*";
        }
        console.log(quantAsteriscos);
    }
}
