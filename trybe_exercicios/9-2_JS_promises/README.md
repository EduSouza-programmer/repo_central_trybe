<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 9-2: JavaScript - Promises - Concluído o/ o/ o/ :star:
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
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Callbacks são utilizadas em toda parte no JavaScript. A depender da complexidade do que você quer fazer, no entanto, as callbacks podem, muito rápido, ficar confusas e pouco legíveis. Para tornar o código mais compreensível, surgem as Promises, que você estudará na aula de hoje. E, com as promises, você fará uma pequena página web que colhe dados de um serviço terceiro utilizando a API dele.

# :postbox: Entrega

Como o primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos fazer juntos!
Primeiro, veja o manual da API do site icanhazdadjoke.com. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:

- Para começar, vamos fazer uma requisição via browser. Visite o site https://icanhazdadjoke.com/, e perceba que ele devolve uma página HTML com uma piada aleatória.

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros.
  
  -  O endereço para o qual a requisição será feita, ou seja, a url do serviço.
  -   Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method: e headers:
  -   A partir daí, faça a piada aparecer no DOM da sua página!</p>

- <p><a href="#2"> :pushpin: 2.</a> Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
  
  -  Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!</p>

- <p><a href="#3"> :pushpin: 3.</a> Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array;</p>

- <p><a href="#4"> :pushpin: 4.</a> Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!";</p>

- <p><a href="#5"> :pushpin: 5.</a> Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.</p>


## :books: Exercícios

### 1°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const fetchJoke = (url, config) => {
  return fetch(url, config)
    .then((resp) => resp.json())
    .then((data) => data.joke);
};

const jokeContainer = document.querySelector('#jokeContainer');

window.onload = async () => {
  jokeContainer.innerHTML = await fetchJoke(API_URL, myObject);
};
```

</details>

<p align="right">
   <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_9-2_Edu_Souza/index.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

gora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
  
  -  Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
// Minha primeira solução para números aleatórios

/* const randomNumberGeneratorForArray = (amount, rangerNumber) => {
  const outputArray = [];
  for (let index = 1; index <= amount; index++) {
    let randomNumber = Math.pow(
      Math.floor(Math.random() * rangerNumber + 1),
      2
    );
    outputArray.push(randomNumber);
  }
  return outputArray;
}; */

// const numbersRandom = randomNumberGeneratorForArray(10, 50);
// const sumTotalNumbers = numbersRandom.reduce((acc, number) => acc + number, 0);

const numbersRandomArray = Array.from({ length: 10 }, () =>
  Math.pow(Math.floor(Math.random() * 50 + 1), 2)
);
const sumTotalNumbers = numbersRandomArray.reduce(
  (acc, number) => acc + number,
  0
);

const promiseTest = (number) => {
  return new Promise((res, error) => (number < 8000 ? res() : error()))
    .then(() => console.log('O numero foi MENOR que 8000-->RESOLVIDA'))
    .catch(() => console.log('O numero foi MAIOR que 8000-->REJEITADA'));
};
promiseTest(sumTotalNumbers);
console.log(sumTotalNumbers);
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const numbersRandomArray = Array.from({ length: 10 }, () =>
  Math.pow(Math.floor(Math.random() * 50 + 1), 2)
);
const sumTotalNumbers = numbersRandomArray.reduce(
  (acc, number) => acc + number,
  0
);

const numberDividedBy = (arrNumbersDividers, number) => {
  return arrNumbersDividers.map((num) => Math.round(number / num));
};

const promiseTest = (number) => {
  return new Promise((res, error) => (number < 8000 ? res(number) : error()))
    .then((number) => console.log(numberDividedBy([2, 3, 5, 10], number)))
    .catch(() => console.log('O numero foi MAIOR que 8000-->REJEITADA'));
};
promiseTest(sumTotalNumbers);
console.log(sumTotalNumbers);
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!".

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const numbersRandomArray = Array.from({ length: 10 }, () =>
  Math.pow(Math.floor(Math.random() * 50 + 1), 2)
);
const sumTotalNumbers = numbersRandomArray.reduce(
  (acc, number) => acc + number,
  0
);

const numberDividedBy = (arrNumbersDividers, number) => {
  return arrNumbersDividers.map((num) => Math.round(number / num));
};

const promiseTest = (number) => {
  return new Promise((res, error) => (number < 8000 ? res(number) : error()))
    .then((number) => console.log(numberDividedBy([2, 3, 5, 10], number)))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};
promiseTest(sumTotalNumbers);
console.log(sumTotalNumbers);
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

#

### 5°

Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const numbersRandomArray = Array.from({ length: 10 }, () =>
  Math.pow(Math.floor(Math.random() * 50 + 1), 2)
);
const sumTotalNumbers = numbersRandomArray.reduce(
  (acc, number) => acc + number,
  0
);

const numberDividedBy = (arrNumbersDividers, number) => {
  return arrNumbersDividers.map((num) => Math.round(number / num));
};

const promiseTest = (number) => {
  return new Promise((res, error) => (number < 8000 ? res(number) : error()))
    .then((number) => numberDividedBy([2, 3, 5, 10], number))
    .then((arr) => {
      console.log(`minha array gerada é: [${arr}] e a somar é:`);
      console.log(arr.reduce((acc, num) => acc + num, 0));
    })
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};
promiseTest(sumTotalNumbers);
console.log(sumTotalNumbers);
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.


