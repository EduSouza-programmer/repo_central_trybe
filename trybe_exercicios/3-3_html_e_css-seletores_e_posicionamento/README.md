<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 3-3: HTML & CSS - Seletores e posicionamento - Concluído o/ o/ o/
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

Hoje vamos finalizar a primeira versão do seu Portfólio Web adicionando seletores e CSS de layout.
Com este exercício, você será capaz de:

-   Aplicar layout mais consistente usando elementos de bloco e inline aplicando todo o conhecimento que você construiu hoje;

-   Salvar todas as alterações dentro de um arquivo externo style.css;

-   Usar Box Model para organizar melhor os elementos no seu Portfólio Web!;

-   Atualizar seu Portfólio Web no GitHub Pages.

### Layout e Box Model no seu Portfólio Web

Antes de começar, você deve seguir estas instruções e fazer o setup para o exercício de hoje:

1. Entre no diretório que você criou no dia anterior;
2. Procure a tag <style></style>, onde você fez as alterações ontem. Mova todo o conteúdo da tag style e coloque em um arquivo style.css;
3. Adicione as novas alterações dentro do arquivo style.css;
4. Não se esqueça de importar esse arquivo na sua página;
5. Depois de importar o arquivo style.css, você já pode remover a tag style do seu documento.

### Requisitos

Seu Portfólio Web deve ter ter um layout usando Box Model com as informações a seguir:

-   Coloque seu nome, sua foto e a descrição que você escreveu sobre você dentro de blocos;

-   A descrição deve ficar ao lado da foto;

-   Centralize seu nome na página;

-   Use padding e coloque uma cor de fundo na sua foto que seja diferente da cor de fundo do resto da página;

-   Adicione margin e padding nos elementos com pelo menos 35px de distância;

-   Coloque espaçamento entre os elementos para que você se sinta mais confortável com o que você fez;

-   Coloque estilo somente nos ítens ímpares da lista das suas habilidades.

#

# Entrega

### Sumário

-   <p><a href="#1">1.</a> Desafio: O modelo boxer - Adicione bordas, Margem e Espaçamento;</p>

-   <p><a href="#2">2.</a> Desafio: Posicionamento do planeta - Posicione a criatura, Posicione a saudação, Ordene-os ;</p>

-   <p><a href="#3">3.</a> Desafio: Nuvens flutuantes - Torne a imagem flutuante, Torne a barra lateral flutuante, Adicione margens;</p>

-   <p><a href="#4">4.</a> Desafio: Descendentes de Khan - Adicione regras descendentes;</p>

### **_Projetos_**

-   <p><a href="#Project_1">Projeto_1:</a> Convite de evento;</p>

#

## Questões sobre os desafios [Meus códigos]

### 1°

### O modelo boxer

#### Adicione bordas

-   Essa página web mostra uma galeria de fotos de cachorros da raça boxer. Nesse primeiro passo, adicione uma borda a todas as fotos. Se puder , tent fazer com que elas pareçam a moldura das fotos.

#### Adicione margem

-   As fotos parecem estar muito próximas uma das outras. Adicione margem a elas, de todos os lados, ou apenas nos lados que as separam.

#### Adicione espaçamento

-   As fotos estão muito próximas ao lado da div que represnta a galeria, e isso parece estranho. Adicione espaçamento em torno de todos os lados da div da galeria, para que a aparência fique melhor.

#### Resposta:

<details>
 <summary>Código HTML</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Challenge: The boxer model</title>
        <style>
            body {
                font-family: cursive;
            }

            .photo-gallery {
                background: rgb(255, 254, 217);
                padding: 100px;
            }

            .photo {
                width: 200px;
                border: 10px ridge gray;
                margin: 7px 7px;
            }
        </style>
    </head>

    <body>
        <h1>Boxers are beautiful?</h1>

        <div class="photo-gallery">
            <img class="photo" src="https://www.kasandbox.org/programming-images/animals/boxer-getting-tan.png" />

            <img class="photo" src="https://www.kasandbox.org/programming-images/animals/boxer-laying-down.png" />

            <img class="photo" src="https://www.kasandbox.org/programming-images/animals/boxer-wagging-tongue.png" />
        </div>
    </body>
</html>
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-3_Edu_Souza//parte-1/challenge_1-o_modelo_boxer.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

### Posicionamento do planeta

#### Posicione a criatura

-   Essa página web contém uma imagem de um planeta, uma imagem de uma criatura, e uma div com uma saudação. Seu trabalho é fazer com que a criatura pareça estar sentada no planeta e dizendo a saudação. Nessa primeira etapa, use posicionamento absoluto para colocar a criatura em algum lugar em cima do planeta.

#### Posicione a saudação

-   Nessa segunda etapa, também posicione a saudação em cima do planeta.

#### Ordene-os

-   Agora, use uma propriedade z-index para garantir que a saudação sempre apareça em cima da criatura, e não atrás.

#### Resposta:

<details>
<summary>Código HTML</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Challenge: Position planet</title>
        <style>
            #greeting {
                background: rgb(255, 255, 0);
                border: 2px solid black;
                font-family: "Comic Sans MS", fantasy;
                padding: 5px;
                width: 262px;
                position: absolute;
                top: 50px;
                left: 150px;
                z-index: 2;
            }

            #creature {
                position: absolute;
                left: 10px;
                top: 10px;
                z-index: 1;
            }
            #planet {
                position: absolute;
                left: 10px;
            }
        </style>
    </head>
    <body>
        <img id="planet" src="https://www.kasandbox.org/programming-images/space/planet.png" width="300" />

        <div id="greeting">
            <p>Hello! Welcome to position planet!</p>
        </div>

        <img id="creature" src="https://www.kasandbox.org/programming-images/avatars/mr-pink.png" />
    </body>
</html>
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-3_Edu_Souza/parte-1/challenge_2-posicionamento_do_planeta.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

### Nuvens flutuantes

#### Torne a imagem flutuante

-   Essa página web contém informações em nuvens mais uma foto de nuvens. Na primeira etapa, faça a foto flutuar à esquerda do texto, de forma que o texto fique em torno dela.

#### Torne a barra lateral flutuante

-   Há uma div amarela de informação. Faça essa div flutuar para a direita do texto, de forma que a foto fique do lado esquerdo do texto, e a div amarela fique do lado direito do texto.

#### Adicione margens

-   Agora que temos os elementos flutuando um ao lado do outro, devemos nos lembrar de separá-los com algum espaço em branco. Adicione margens apropriadas à foto e à barra lateral.

#### Resposta:

<details>
<summary>Código HTML</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Challenge: Floating clouds</title>
        <style>
            body {
                font-family: sans-serif;
            }
            h1 {
                font-family: fantasy;
            }
            #cloud-pic {
                width: 100px;
                float: left;
                margin: 0 10px;
            }
            #cloud-sidebar {
                background: rgb(255, 255, 219);
                float: right;
                width: 30%;
                margin: 0 10px;
            }
        </style>
    </head>
    <body>
        <h1>What are clouds?</h1>

        <img id="cloud-pic" src="https://www.kasandbox.org/programming-images/landscapes/clouds-from-plane.png" />

        <div id="cloud-sidebar">
            <h5>Why are some clouds yellow?</h5>
            <p>
                Yellowish clouds may occur in the late spring through early fall months during forest fire season. The
                yellow color is due to the presence of pollutants in the smoke. Yellowish clouds caused by the presence
                of nitrogen dioxide are sometimes seen in urban areas with high air pollution levels.
            </p>
        </div>

        <p>
            In meteorology, a cloud is a visible mass of liquid droplets or frozen crystals made of water or various
            chemicals suspended in the atmosphere above the surface of a planetary body. These suspended particles are
            also known as aerosols and are studied in the cloud physics branch of meteorology.
        </p>

        <p>
            Terrestrial cloud formation is the result of air in Earth's atmosphere becoming saturated due to either or
            both of two processes: cooling of the air and adding water vapor. With sufficient saturation, precipitation
            will fall to the surface.
        </p>

        <p><a href="http://en.wikipedia.org/wiki/Cloud">Read more on Wikipedia</a></p>
    </body>
</html>
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-3_Edu_Souza/parte-1/challenge_3-nuvens_flutuantes.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

### Descendentes de Khan

#### Adicione regras descendentes

-   Essa página web descreve o Genghis Khan, um imperador que tinha muitos descendentes, e inclui uma tabela com apenas alguns dos imperadores que descendem dele. Adicione uma regra que atinge somente os elementos que têm a classe 'emperor' (imperador) e que estão na tabela. A regra deve alterar a cor de fundo dessas células da tabela.

-   Agora, adicione outra regra que atinja apenas os elementos que têm o nome de classe "reign" na tabela. Como na primeira etapa, a regra deve alterar a cor de fundo dessas células da tabela. Escolha uma cor diferente da que você escolheu para a outra regra!

#### Resposta:

<details>
<summary>Código HTML</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Challenge: Descendants of Khan</title>
        <style>
            .emperor {
                font-family: cursive;
            }

            .reign {
                font-family: monospace;
            }
            table .emperor {
                background-color: red;
            }
            table .reign {
                background-color: blue;
            }
        </style>
    </head>
    <body>
        <h1>Descendants of Khan</h1>

        <p>
            <strong class="emperor">Genghis Khan</strong> (<span class="reign">1206-1227</span>) was a emperor who had
            many sons and daughters, and many famous emperors are descended from him. (But not Sal Khan!)
        </p>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reign</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="emperor">Ögedei Khan</td>
                    <td class="reign">1229-1241</td>
                </tr>
                <tr>
                    <td class="emperor">Kublai Khan</td>
                    <td class="reign">1260-1294</td>
                </tr>
                <tr>
                    <td class="emperor">Temür Khan</td>
                    <td class="reign">1294-1307</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-3_Edu_Souza/parte-2/challenge_4-descendentes_de_khan.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## Projetos

### Project_1°

#### Convite de evento

-   Nesse projeto, você vai fazer um convite para um evento - uma festa, um workshop, um casamento, ou o que você quiser. Ele deve ter o título do evento, os detalhes e talvez uma lista de convidados ou um botão de confirmação.

-   Antes de começar a programar, é importante que você faça o "protótipo" - fazer o planejamento em papel ou com uma ferramenta apropriada. Esboce a visão que você tem na cabeça e faça alguns protótipos até ficar satisfeito.

-   Quando você estiver pronto, tente implementar seu convite para o evento em HTML/CSS. Se você tiver problemas com alguma coisa que é difícil de transferir do papel para o HTML, tente pesquisar na internet ou clique em "Pedir ajuda". Eu aposto que você vai aprender alguma coisa no processo.

#### Resposta:

<details>
<Summary>Código HTML & CSS</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Project: Event invite</title>
        <style>
            .header-conteiner {
                text-align: center;
            }

            main {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin: 0 auto;
            }

            main p {
                margin-bottom: 1px;
                line-height: 10px;
            }

            main ul {
                text-align: center;

                list-style: none;
            }

            main a {
                text-decoration: none;
            }

            .button {
                background-color: rgb(180, 66, 66);
                padding: 10px;
                color: antiquewhite;
                border-radius: 7px;
                font-weight: bold;
            }

            .convite-1 {
                position: absolute;
                top: 370px;
                left: 400px;
                background-color: rgb(230, 229, 227);
                width: 400px;
                height: 272px;
                border-radius: 0 30px 30px 0;
                transform: rotate(5deg);
                margin-bottom: 180px;
            }

            .convite-2 {
                position: absolute;
                top: 570px;
                left: 380px;
                background-color: rgb(230, 229, 227);
                width: 400px;
                height: 272px;
                border-radius: 0 30px 30px 0;
                transform: rotate(-25deg);
                margin-bottom: 180px;
                z-index: -1;
                filter: saturate(-10);
            }

            .convite-icon-left {
                transform: rotate(90deg);
                width: 30px;
                height: 30px;
            }

            .borda-left {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                background-color: rgb(202, 73, 40);
                width: 240px;
                height: 20px;
                top: 110px;
                right: 260px;
                transform: rotate(-90deg);
                position: absolute;
                border-radius: 10px 10px 0 0;
                color: rgb(227, 227, 228);
            }

            .center {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                /* background-color: rgb(114, 102, 124); */
                width: 370px;
                height: 270px;
                left: 30px;
            }

            .center-main-1 {
                position: absolute;
                background-color: rgb(230, 229, 227);
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 16px;
                width: 270px;
                top: 20px;
            }

            .center-main-2 {
                position: absolute;
                background-color: rgb(230, 229, 227);
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 1px;
                width: 340px;
                top: 110px;
            }

            .center-main-3 {
                position: absolute;
                background-color: rgb(230, 229, 227);
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 1px;
                width: 340px;
                top: 180px;
            }

            .convite-icon-center {
                width: 70px;
                height: 70px;
            }

            .borda-right {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgb(230, 229, 227);
                width: 150px;
                height: 270px;
                border-left: 4px dashed black;
                border-radius: 30px 10px 10px 30px;
                left: 400px;
                top: 1px;
            }

            .conteiner-icon-right {
                padding: 10px;
                background-color: rgb(201, 200, 200);
                margin-top: 150px;
            }

            .convite-icon-right {
                width: 70px;
                height: 70px;
            }

            .boder-right-content {
                background-color: rgb(230, 229, 227);
                position: absolute;
                line-height: 1px;
                width: 120px;
                transform: rotate(-90deg);
                top: 25px;
            }

            .boder-right-content div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        </style>
    </head>

    <body>
        <header>
            <div class="header-conteiner">
                <h1>Você foi convidado!</h1>
                <h2>O melhor evento do ano!</h2>
            </div>
        </header>

        <main>
            <h1>Edu's Palooza</h1>
            <p>Teremos:</p>
            <p>Drinks diversos</p>
            <p>Guarnições Brasileiras</p>
            <p>e muito mais ...</p>
            <a href="#">
                <p class="button">Aceitar!</p>
            </a>
        </main>

        <div class="convite-1">
            <div class="borda-left">
                <svg class="convite-icon-left" viewBox="0 0 511.971 511.971" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M418.736 168.802H93.235L.069 217.92v28.207l255.916 171.249 255.917-171.249V217.92z"
                        fill="#ffbe46"
                    />
                    <path d="M511.902 217.92l-93.166-49.118H255.998v248.566l255.904-171.241z" fill="#ffa725" />
                    <path d="M81.947 0v289.77l174.039 116.459L430.024 289.77V0z" fill="#ad2666" />
                    <path d="M430.024 0H255.998v406.221L430.024 289.77z" fill="#5b3364" />
                    <path
                        d="M352.508 148.313l-66.636-9.76-29.874-60.359-29.874 60.359-66.635 9.76 48.172 47.063-11.309 66.39 59.646-31.27 59.646 31.27-11.308-66.39z"
                        fill="#ffd567"
                    />
                    <path
                        d="M343.388 326.016l-87.403 55.263-87.396-55.259L.069 470.058v41.913h511.833v-41.913z"
                        fill="#ffe7ad"
                    />
                    <g fill="#ffd567">
                        <path
                            d="M511.902 470.058L343.388 326.016l-87.39 55.255v130.7h255.904zM.069 217.92v294.05l196.683-168.143z"
                        />
                        <path d="M315.195 343.842l196.707 168.129V217.92z" />
                    </g>
                    <path
                        d="M315.195 343.842l196.707 168.129V217.92zM352.508 148.313l-66.636-9.76-29.874-60.359v152.302l59.646 31.27-11.308-66.39z"
                        fill="#ffbe46"
                    />
                </svg>
                <h3>CONVITE</h3>
                <p>Edu Souza</p>
            </div>
            <div class="center">
                <div class="center-main-1">
                    <h1>EDU</h1>
                    <svg class="convite-icon-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M366.39 125.45L86.5 126v336c0 22.09 17.91 40 40 40h200c22.09 0 40-17.91 40-40V125.65l-.11-.2z"
                            fill="#95e7ee"
                        />
                        <path fill="#fec652" d="M366.5 462V125.65l-.11-.2L86.5 126v336z" />
                        <path
                            d="M466.5 211v171c0 22.09-17.91 40-40 40h-60v-40h60V211h-60v-40h60c22.09 0 40 17.91 40 40z"
                            fill="#95e7ee"
                        />
                        <path
                            d="M385.45 81.71c7.61 33.773-27.227 60.794-59.95 44.15v84.43c0 11.04-8.95 20-20 20s-20-8.96-20-20v-40c0-13.81.5-39.29-44-39.29-3.61 0-7.06 1.46-9.56 4.05-9.09 9.4-21.83 15.24-35.94 15.24-13.65 0-26.02-5.47-35.04-14.34-3.23-3.17-7.58-4.95-12.32-4.95-3.81 0-7.29 2.17-8.96 5.59-9.66 19.78-29.73 33.5-53.18 33.7v79.78c-.5 11.26-9.45 20.22-20.5 20.22s-20.5-8.96-20.5-20v-120c0-47.57 42.01-85.44 90.76-79.19C149.91 26.77 176.03 10 206 10c23.7 0 44.99 10.59 59.64 26.97 6.04-3.82 13.2-5.97 20.86-5.97 17.45 0 32.29 11.17 37.75 26.75 8.59-5.76 19.54-8.28 31.09-5.8 14.68 3.14 26.82 15.12 30.11 29.76z"
                            fill="#ffe5cb"
                        />
                        <path
                            d="M286 451.29c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM145.5 200.29c-5.523 0-10 4.477-10 10v191c0 5.523 4.477 10 10 10s10-4.477 10-10v-191c0-5.523-4.477-10-10-10zM225.5 200.29c-5.523 0-10 4.477-10 10v191c0 5.523 4.477 10 10 10s10-4.477 10-10v-191c0-5.523-4.477-10-10-10z"
                        />
                        <path
                            d="M126.5 512h200c27.57 0 50-22.43 50-50v-30h50c27.57 0 50-22.43 50-50V211c0-27.57-22.43-50-50-50h-50v-30.259c15.675-11.751 23.125-31.613 18.707-51.224-4.133-18.39-19.313-33.398-37.768-37.345-9.811-2.105-19.692-1.36-28.695 2.063C319.716 30.002 303.862 21 286.5 21c-6.544 0-12.939 1.269-18.852 3.711C250.91 8.922 228.843 0 206 0c-30.216 0-58.396 15.393-75.03 40.579C78.7 37.687 35.5 79.156 35.5 130.29v120c0 16.542 13.682 30 30.5 30 3.689 0 7.224-.671 10.5-1.893V462c0 27.57 22.43 50 50 50zm200-20h-200c-13.036 0-24.152-8.361-28.28-20h147.79c5.523 0 10-4.477 10-10s-4.477-10-10-10H96.5V179.506c22.463-3.391 41.914-17.538 52.14-38.505 2.086 0 3.924.722 5.309 2.081 11.286 11.098 26.22 17.209 42.051 17.209 16.408 0 31.725-6.495 43.135-18.295a3.301 3.301 0 012.365-.995c15.567 0 25.753 3.325 30.277 9.881 3.729 5.405 3.726 12.915 3.723 18.95v40.459c0 13.036 8.361 24.152 20 28.28v162.72c0 5.523 4.477 10 10 10s10-4.477 10-10V238.57c11.639-4.128 20-15.243 20-28.28v-70.464c7.005 1.398 14.154 1.407 21 .007V452h-30.51c-5.523 0-10 4.477-10 10s4.477 9.9 10 9.9h28.79c-4.128 11.639-15.244 20.1-28.28 20.1zm50-271h40v151h-40V221zm50-40c16.542 0 30 13.458 30 30v171c0 16.542-13.458 30-30 30h-50v-20h50c5.523 0 10-4.477 10-10V211c0-5.523-4.477-10-10-10h-50v-20h50zM66 260.29c-5.691 0-10.5-4.58-10.5-10v-120c0-38.596 31.582-69.852 70.407-69.852 3.017 0 6.05.192 9.081.581a10 10 0 009.993-5.026C157.437 33.792 180.818 20 206 20c19.73 0 38.752 8.615 52.187 23.637a9.998 9.998 0 0012.799 1.785C275.559 42.529 280.924 41 286.5 41c12.73 0 24.108 8.061 28.313 20.057a10 10 0 0015.006 4.999c6.816-4.57 15.134-6.107 23.429-4.327 10.8 2.31 20.03 11.428 22.446 22.179 5.692 25.264-20.205 45.988-45.661 33.039a9.999 9.999 0 00-14.534 8.913v84.43c0 5.514-4.486 10-10 10s-10-4.486-10-10v-40.452c.003-7.876.008-19.779-7.261-30.315C279.759 127.232 264.034 121 241.5 121c-6.29 0-12.396 2.589-16.749 7.099-7.602 7.862-17.813 12.191-28.751 12.191-10.553 0-20.507-4.073-28.035-11.477-5.133-5.039-11.996-7.813-19.325-7.813-7.579 0-14.623 4.397-17.946 11.202-8.382 17.164-25.35 27.927-44.28 28.089-5.489.047-9.915 4.51-9.915 10v79.525c-.352 5.889-4.931 10.474-10.499 10.474z"
                        />
                    </svg>
                    <h1>CHICO</h1>
                </div>
                <div class="center-main-2">
                    <div>
                        <p>NAME</p>
                        <h3>Chico</h3>
                    </div>
                    <div>
                        <p>CLASS</p>
                        <h3>Fera Shell Script</h3>
                    </div>
                </div>
                <div class="center-main-3">
                    <div>
                        <p>CHANCE</p>
                        <h3>99.9%</h3>
                    </div>
                    <div>
                        <p>DATE</p>
                        <h3>24 AGO.</h3>
                    </div>
                    <div>
                        <p>BOARDING TIME</p>
                        <h3>09:00 PM</h3>
                    </div>
                </div>
            </div>
            <div>
                <div class="borda-right">
                    <div class="conteiner-icon-right">
                        <svg class="convite-icon-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M0 0v170h170V0H0zm130 130H40V40h90v90z" />
                            <path d="M65 65h40v40H65zM342 0v170h170V0H342zm130 130h-90V40h90v90z" />
                            <path d="M407 65h40v40h-40zM0 342v170h170V342H0zm130 130H40v-90h90v90z" />
                            <path
                                d="M65 407h40v40H65zM40 197h40v40H40zM120 277v-40H80v40h39v40h40v-40zM280 77h40v40h-40zM200 40h40v77h-40zM240 0h40v40h-40zM240 117v40h-40v40h80v-80zM280 355v-39h-40v-79h-40v80h40v39h40v39h80v-40z"
                            />
                            <path
                                d="M280 197h40v80h-40zM472 236v-39h-73v40h-39v40h40v39h112v-80h-40zm0 40h-72v-39h72v39zM472 355h40v80h-40zM320 277h40v40h-40zM360 395h40v40h-40zM400 355h40v40h-40zM400 435v77h40v-37h32v-40zM200 356h40v76h-40zM320 472v-40h-80v80h40v-40h39v40h40v-40zM120 197h80v40h-80zM0 237h40v80H0z"
                            />
                        </svg>
                    </div>
                    <div class="boder-right-content">
                        <div>
                            <h4>NAME</h4>
                            <p>Chico</p>
                        </div>
                        <div>
                            <h4>DATE</h4>
                            <p>24 AGO.</p>
                        </div>
                        <div>
                            <h4>TIME</h4>
                            <p>09:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="convite-2">
            <div class="borda-left">
                <svg class="convite-icon-left" viewBox="0 0 511.971 511.971" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M418.736 168.802H93.235L.069 217.92v28.207l255.916 171.249 255.917-171.249V217.92z"
                        fill="#ffbe46"
                    />
                    <path d="M511.902 217.92l-93.166-49.118H255.998v248.566l255.904-171.241z" fill="#ffa725" />
                    <path d="M81.947 0v289.77l174.039 116.459L430.024 289.77V0z" fill="#ad2666" />
                    <path d="M430.024 0H255.998v406.221L430.024 289.77z" fill="#5b3364" />
                    <path
                        d="M352.508 148.313l-66.636-9.76-29.874-60.359-29.874 60.359-66.635 9.76 48.172 47.063-11.309 66.39 59.646-31.27 59.646 31.27-11.308-66.39z"
                        fill="#ffd567"
                    />
                    <path
                        d="M343.388 326.016l-87.403 55.263-87.396-55.259L.069 470.058v41.913h511.833v-41.913z"
                        fill="#ffe7ad"
                    />
                    <g fill="#ffd567">
                        <path
                            d="M511.902 470.058L343.388 326.016l-87.39 55.255v130.7h255.904zM.069 217.92v294.05l196.683-168.143z"
                        />
                        <path d="M315.195 343.842l196.707 168.129V217.92z" />
                    </g>
                    <path
                        d="M315.195 343.842l196.707 168.129V217.92zM352.508 148.313l-66.636-9.76-29.874-60.359v152.302l59.646 31.27-11.308-66.39z"
                        fill="#ffbe46"
                    />
                </svg>
                <h3>CONVITE</h3>
                <p>Edu Souza</p>
            </div>
            <div class="center">
                <div class="center-main-1">
                    <h1>EDU</h1>
                    <svg class="convite-icon-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M366.39 125.45L86.5 126v336c0 22.09 17.91 40 40 40h200c22.09 0 40-17.91 40-40V125.65l-.11-.2z"
                            fill="#95e7ee"
                        />
                        <path fill="#fec652" d="M366.5 462V125.65l-.11-.2L86.5 126v336z" />
                        <path
                            d="M466.5 211v171c0 22.09-17.91 40-40 40h-60v-40h60V211h-60v-40h60c22.09 0 40 17.91 40 40z"
                            fill="#95e7ee"
                        />
                        <path
                            d="M385.45 81.71c7.61 33.773-27.227 60.794-59.95 44.15v84.43c0 11.04-8.95 20-20 20s-20-8.96-20-20v-40c0-13.81.5-39.29-44-39.29-3.61 0-7.06 1.46-9.56 4.05-9.09 9.4-21.83 15.24-35.94 15.24-13.65 0-26.02-5.47-35.04-14.34-3.23-3.17-7.58-4.95-12.32-4.95-3.81 0-7.29 2.17-8.96 5.59-9.66 19.78-29.73 33.5-53.18 33.7v79.78c-.5 11.26-9.45 20.22-20.5 20.22s-20.5-8.96-20.5-20v-120c0-47.57 42.01-85.44 90.76-79.19C149.91 26.77 176.03 10 206 10c23.7 0 44.99 10.59 59.64 26.97 6.04-3.82 13.2-5.97 20.86-5.97 17.45 0 32.29 11.17 37.75 26.75 8.59-5.76 19.54-8.28 31.09-5.8 14.68 3.14 26.82 15.12 30.11 29.76z"
                            fill="#ffe5cb"
                        />
                        <path
                            d="M286 451.29c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM145.5 200.29c-5.523 0-10 4.477-10 10v191c0 5.523 4.477 10 10 10s10-4.477 10-10v-191c0-5.523-4.477-10-10-10zM225.5 200.29c-5.523 0-10 4.477-10 10v191c0 5.523 4.477 10 10 10s10-4.477 10-10v-191c0-5.523-4.477-10-10-10z"
                        />
                        <path
                            d="M126.5 512h200c27.57 0 50-22.43 50-50v-30h50c27.57 0 50-22.43 50-50V211c0-27.57-22.43-50-50-50h-50v-30.259c15.675-11.751 23.125-31.613 18.707-51.224-4.133-18.39-19.313-33.398-37.768-37.345-9.811-2.105-19.692-1.36-28.695 2.063C319.716 30.002 303.862 21 286.5 21c-6.544 0-12.939 1.269-18.852 3.711C250.91 8.922 228.843 0 206 0c-30.216 0-58.396 15.393-75.03 40.579C78.7 37.687 35.5 79.156 35.5 130.29v120c0 16.542 13.682 30 30.5 30 3.689 0 7.224-.671 10.5-1.893V462c0 27.57 22.43 50 50 50zm200-20h-200c-13.036 0-24.152-8.361-28.28-20h147.79c5.523 0 10-4.477 10-10s-4.477-10-10-10H96.5V179.506c22.463-3.391 41.914-17.538 52.14-38.505 2.086 0 3.924.722 5.309 2.081 11.286 11.098 26.22 17.209 42.051 17.209 16.408 0 31.725-6.495 43.135-18.295a3.301 3.301 0 012.365-.995c15.567 0 25.753 3.325 30.277 9.881 3.729 5.405 3.726 12.915 3.723 18.95v40.459c0 13.036 8.361 24.152 20 28.28v162.72c0 5.523 4.477 10 10 10s10-4.477 10-10V238.57c11.639-4.128 20-15.243 20-28.28v-70.464c7.005 1.398 14.154 1.407 21 .007V452h-30.51c-5.523 0-10 4.477-10 10s4.477 9.9 10 9.9h28.79c-4.128 11.639-15.244 20.1-28.28 20.1zm50-271h40v151h-40V221zm50-40c16.542 0 30 13.458 30 30v171c0 16.542-13.458 30-30 30h-50v-20h50c5.523 0 10-4.477 10-10V211c0-5.523-4.477-10-10-10h-50v-20h50zM66 260.29c-5.691 0-10.5-4.58-10.5-10v-120c0-38.596 31.582-69.852 70.407-69.852 3.017 0 6.05.192 9.081.581a10 10 0 009.993-5.026C157.437 33.792 180.818 20 206 20c19.73 0 38.752 8.615 52.187 23.637a9.998 9.998 0 0012.799 1.785C275.559 42.529 280.924 41 286.5 41c12.73 0 24.108 8.061 28.313 20.057a10 10 0 0015.006 4.999c6.816-4.57 15.134-6.107 23.429-4.327 10.8 2.31 20.03 11.428 22.446 22.179 5.692 25.264-20.205 45.988-45.661 33.039a9.999 9.999 0 00-14.534 8.913v84.43c0 5.514-4.486 10-10 10s-10-4.486-10-10v-40.452c.003-7.876.008-19.779-7.261-30.315C279.759 127.232 264.034 121 241.5 121c-6.29 0-12.396 2.589-16.749 7.099-7.602 7.862-17.813 12.191-28.751 12.191-10.553 0-20.507-4.073-28.035-11.477-5.133-5.039-11.996-7.813-19.325-7.813-7.579 0-14.623 4.397-17.946 11.202-8.382 17.164-25.35 27.927-44.28 28.089-5.489.047-9.915 4.51-9.915 10v79.525c-.352 5.889-4.931 10.474-10.499 10.474z"
                        />
                    </svg>
                    <h1>CHICO</h1>
                </div>
                <div class="center-main-2">
                    <div>
                        <p>NAME</p>
                        <h3>Chico</h3>
                    </div>
                    <div>
                        <p>CLASS</p>
                        <h3>Fera Shell Script</h3>
                    </div>
                </div>
                <div class="center-main-3">
                    <div>
                        <p>CHANCE</p>
                        <h3>99.9%</h3>
                    </div>
                    <div>
                        <p>DATE</p>
                        <h3>24 AGO.</h3>
                    </div>
                    <div>
                        <p>BOARDING TIME</p>
                        <h3>09:00 PM</h3>
                    </div>
                </div>
            </div>
            <div>
                <div class="borda-right">
                    <div class="conteiner-icon-right">
                        <svg class="convite-icon-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M0 0v170h170V0H0zm130 130H40V40h90v90z" />
                            <path d="M65 65h40v40H65zM342 0v170h170V0H342zm130 130h-90V40h90v90z" />
                            <path d="M407 65h40v40h-40zM0 342v170h170V342H0zm130 130H40v-90h90v90z" />
                            <path
                                d="M65 407h40v40H65zM40 197h40v40H40zM120 277v-40H80v40h39v40h40v-40zM280 77h40v40h-40zM200 40h40v77h-40zM240 0h40v40h-40zM240 117v40h-40v40h80v-80zM280 355v-39h-40v-79h-40v80h40v39h40v39h80v-40z"
                            />
                            <path
                                d="M280 197h40v80h-40zM472 236v-39h-73v40h-39v40h40v39h112v-80h-40zm0 40h-72v-39h72v39zM472 355h40v80h-40zM320 277h40v40h-40zM360 395h40v40h-40zM400 355h40v40h-40zM400 435v77h40v-37h32v-40zM200 356h40v76h-40zM320 472v-40h-80v80h40v-40h39v40h40v-40zM120 197h80v40h-80zM0 237h40v80H0z"
                            />
                        </svg>
                    </div>
                    <div class="boder-right-content">
                        <div>
                            <h4>NAME</h4>
                            <p>Chico</p>
                        </div>
                        <div>
                            <h4>DATE</h4>
                            <p>24 AGO.</p>
                        </div>
                        <div>
                            <h4>TIME</h4>
                            <p>09:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-3_Edu_Souza/parte-1/challenge_projeto-convite_de_evento.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
