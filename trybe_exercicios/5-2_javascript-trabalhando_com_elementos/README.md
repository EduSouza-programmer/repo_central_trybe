<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 5-2: JavaScript - Trabalhando com elementos - Concluído o/ o/ o/
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

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags "script".

<details>
 <summary>HTML Completo realizado o/</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Exercício 5.2</title>
        <style>
            div {
                border-color: black;
                border-style: solid;
            }

            .title {
                text-align: center;
            }

            .main-content {
                background-color: yellow;
            }

            .main-content .center-content {
                background-color: red;
                width: 50%;
                margin-left: auto;
                margin-right: auto;
            }

            .main-content .center-content p {
                font-style: italic;
            }

            .main-content .left-content {
                background-color: green;
                width: 60%;
                margin-left: 0;
                margin-right: auto;
            }

            .main-content .left-content .small-image {
                display: block;
                margin-left: auto;
                margin-right: auto;
                border-radius: 100%;
            }

            .main-content .right-content {
                background-color: blue;
                width: 60%;
                margin-left: auto;
                margin-right: 0;
            }

            .main-content .description {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <script>
            // COLOQUE SEU CÓDIGO AQUI

            // 1° Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
            let element = document.createElement("h1");
            element.innerText = "Exercício 5.2 - Javascript DOM";
            // Bônus 1° Adicione a classe title na tag h1 criada;
            element.className = "title";
            document.body.appendChild(element);

            // 2° Adicione a tag div com a classe main-content como filho da tag body;
            element = document.createElement("div");
            element.className = "main-content";
            document.body.appendChild(element);

            // 3° Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
            let divCenterContent = document.createElement("div");
            divCenterContent.className = "center-content";
            document.querySelector(".main-content").appendChild(divCenterContent);

            // 4° Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
            let pElement = document.createElement("p");
            pElement.innerText = "Estudar e muito bom";
            document.querySelector(".center-content").appendChild(pElement);

            // 5° Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
            let divLeftContent = document.createElement("div");
            divLeftContent.className = "left-content";
            document.querySelector(".main-content").appendChild(divLeftContent);

            // 6° Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
            let divRightContent = document.createElement("div");
            divRightContent.className = "right-content";
            document.querySelector(".main-content").appendChild(divRightContent);

            // 7° Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
            let imgSmallImage = document.createElement("img");
            imgSmallImage.className = "small-image";
            imgSmallImage.src = "https://picsum.photos/200";
            imgSmallImage.alt = "Uma imagem para o exercício";
            document.querySelector(".left-content").appendChild(imgSmallImage);

            // 8° Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
            let ulList = document.createElement("ul");
            for (let i = 1; i <= 10; i += 1) {
                let liElement = document.createElement("li");
                liElement.innerText = `${i}`;
                ulList.appendChild(liElement);
            }
            document.querySelector(".right-content").appendChild(ulList);

            // 9° Adicione 3 tags h3, todas sendo filhas do div criado no passo 2
            for (let i = 1; i <= 3; i += 1) {
                let h3Element = document.querySelector(".main-content").appendChild(document.createElement("h3"));
                // Bônus 2° Adicione a classe description nas 3 tags h3 criadas;
                h3Element.className = "description";
            }

            // Bônus 3° Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
            document.querySelector(".main-content").removeChild(divLeftContent);

            // Bônus 4° Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;
            divRightContent.style.marginRight = "auto";

            // Bônus 5° Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
            divCenterContent.style.backgroundColor = "green";

            // Bônus 6° Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
            let liLists = document.querySelectorAll("li");
            for (let i in liLists) {
                if (liLists[i].innerText.includes("9") || liLists[i].innerText.includes("10")) {
                    document.querySelector("ul").removeChild(liLists[i]);
                }
            }
        </script>
    </body>
</html>
```

</details>

#

# Entrega

### Sumário

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

-   <p><a href="#1">1.</a> Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;</p>

-   <p><a href="#2">2.</a> Adicione a tag div com a classe main-content como filho da tag body;</p>

-   <p><a href="#3">3.</a> Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;</p>

-   <p><a href="#4">4.</a> Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;</p>

-   <p><a href="#5">5.</a> Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;</p>

-   <p><a href="#6">6.</a> Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;</p>

-   <p><a href="#7">7.</a> Adicione uma imagem com src configurado para o valor "https://picsum.photos/200" e classe small-image. Esse elemento deve ser filho do div criado no passo 5;</p>

-   <p><a href="#8">8.</a> Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;</p>

-   <p><a href="#9">9.</a> Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.</p>

### Bônus

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

-   <p><a href="#Bônus-1">Bônus 1:</a> Adicione a classe title na tag h1 criada;</p>

-   <p><a href="#Bônus-2">Bônus 2:</a> Adicione a classe description nas 3 tags h3 criadas;</p>

-   <p><a href="#Bônus-3">Bônus 3:</a> Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();</p>

-   <p><a href="#Bônus-4">Bônus 4:</a> Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;</p>

-   <p><a href="#Bônus-5">Bônus 5:</a> Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;</p>

-   <p><a href="#Bônus-6">Bônus 6:</a> Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.</p>

#

## Exercícios [Meus códigos]

### 1°

-   Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let element = document.createElement("h1");
element.innerText = "Exercício 5.2 - Javascript DOM";
document.body.appendChild(element);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

-   Adicione a tag div com a classe main-content como filho da tag body;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
element = document.createElement("div");
element.className = "main-content";
document.body.appendChild(element);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

-   Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let divCenterContent = document.createElement("div");
divCenterContent.className = "center-content";
document.querySelector(".main-content").appendChild(divCenterContent);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

-   Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let pElement = document.createElement("p");
pElement.innerText = "Estudar e muito bom";
document.querySelector(".center-content").appendChild(pElement);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

-   Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let divLeftContent = document.createElement("div");
divLeftContent.className = "left-content";
document.querySelector(".main-content").appendChild(divLeftContent);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 6°

-   Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let divRightContent = document.createElement("div");
divRightContent.className = "right-content";
document.querySelector(".main-content").appendChild(divRightContent);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 7°

-   Adicione uma imagem com "src" configurado para o valor "https://picsum.photos/200" e classe small-image. Esse elemento deve ser filho do "div" criado no passo 5;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let imgSmallImage = document.createElement("img");
imgSmallImage.className = "small-image";
imgSmallImage.src = "https://picsum.photos/200";
imgSmallImage.alt = "Uma imagem para o exercício";
document.querySelector(".left-content").appendChild(imgSmallImage);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 8°

-   Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do "div" criado no passo 6;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let ulList = document.createElement("ul");
for (let i = 1; i <= 10; i += 1) {
    let liElement = document.createElement("li");
    liElement.innerText = `${i}`;
    ulList.appendChild(liElement);
}
document.querySelector(".right-content").appendChild(ulList);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 9°

-   Adicione 3 tags "h3", todas sendo filhas do div criado no passo 2.

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
for (let i = 1; i <= 3; i += 1) {
    document.querySelector(".main-content").appendChild(document.createElement("h3"));
}
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

# Bônus

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

### Bônus 1°

-   Adicione a classe title na tag h1 criada;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let element = document.createElement("h1");
element.innerText = "Exercício 5.2 - Javascript DOM";
element.className = "title";
document.body.appendChild(element);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus 2°

-   Adicione a classe description nas 3 tags h3 criadas;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
for (let i = 1; i <= 3; i += 1) {
    let h3Element = document.querySelector(".main-content").appendChild(document.createElement("h3"));
    h3Element.className = "description";
}
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus 3°

-   Remova o div criado no passo 5 "aquele que possui a classe left-content". Utilize a função ".removeChild";

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
document.querySelector(".main-content").removeChild(divLeftContent);
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus 4°

-   Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
divRightContent.style.marginRight = "auto";
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus 5°

-   Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
divCenterContent.style.backgroundColor = "green";
```

</details>

<p align="right">
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus 6°

-   Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

#### Resposta:

<details>
 <summary>Código Javascript</summary>

```js
let liLists = document.querySelectorAll("li");
for (let i in liLists) {
    if (liLists[i].innerText.includes("9") || liLists[i].innerText.includes("10")) {
        document.querySelector("ul").removeChild(liLists[i]);
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

## Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
