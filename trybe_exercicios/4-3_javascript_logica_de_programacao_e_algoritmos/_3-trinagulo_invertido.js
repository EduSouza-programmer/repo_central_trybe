let numero = 5;
let asteriscoFormatado = "";

if (numero > 1) {
    for (let a = 1; a <= numero; a += 1) {
        asteriscoFormatado = "";

        for (let b = a; b <= numero; b += 1) {
            asteriscoFormatado += "\xa0";
        }
        for (let c = 1; c <= a; c += 1) {
            asteriscoFormatado += "*";
        }
        console.log(asteriscoFormatado);
    }
}

// Ou podemos realizar outra lógica também o/

/*

let quantAsteriscos = [];

if (numero > 1) {
    for (let a = 1; a <= numero; a += 1) {
        quantAsteriscos.push("*");
        for (let b = a + 1; b <= numero; b += 1) {
            quantAsteriscos.push("\xa0");
        }
        asteriscoFormatado = quantAsteriscos.join("");
        console.log(asteriscoFormatado.split("").reverse().join(""));
        for (let i = quantAsteriscos.length; i > a; i--) {
            quantAsteriscos.pop();
        }
    }
}
*/
