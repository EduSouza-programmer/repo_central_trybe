<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 4-3: JavaScript - Lógica de Programação e Algoritmos - Concluído o/ o/ o/
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Hoje você vai aprender sobre algoritmos e lógica de programação, a base de tudo que faremos daqui pra frente.
Assim como em uma receita de bolo, na programação, devemos passo a passo utilizar comandos para resolver um problema. Essa sequência de comandos se chama algoritmo. Para criar um algoritmo, temos que desenvolver uma capacidade analítica para transformar grandes problemas em pequenos e encadeados comandos lógicos. Desenvolvemos essa forma de raciocinar com a lógica de programação.

### Requisitos

Leia atentamente os enunciados e faça o que se pede!

#

# Entrega

### Sumário

-   <p><a href="#1">1.</a> Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1... ;</p>

-   <p><a href="#2">2.</a> Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos... ;</p>

-   <p><a href="#3">3.</a> Agora inverta o lado do triângulo;</p>

-   <p><a href="#4">4.</a> Depois, faça uma pirâmide com n asteriscos de...;</p>

### **_Bônus_**

-   <p><a href="#Bônus_1">Bônus_1:</a> Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de...;</p>

-   <p><a href="#Bônus_2">Bônus_2:</a> Faça um programa que diz se um número definido numa variável é primo ou não;</p>

#

## Questões sobre os desafios [Meus códigos]

### 1°

Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

    n = 5

    *****
    *****
    *****
    *****
    *****

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

    n = 5

    *
    **
    ***
    ****
    *****

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let numero = 5;
let quantAsteriscos = "";

if (numero > 1) {
    for (let i = 1; i <= numero; i += 1) {
        quantAsteriscos += "*";
        console.log(quantAsteriscos);
    }
}
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

Agora inverta o lado do triângulo. Por exemplo:

    n = 5

        *
       **
      ***
     ****
    *****

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

Depois, faça uma pirâmide com n asteriscos de base:

    n = 5

      *
     ***
    *****

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus_1

Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

    Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
    n = 7

       *
      * *
     *   *
    *******

#### Resposta:

<details>
 <summary>Código Javascript -- em resolução</summary>

```js
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
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus_2

Faça um programa que diz se um número definido numa variável é primo ou não.

-   Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

-   Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
