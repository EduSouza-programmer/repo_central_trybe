<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 3-2: HTML & CSS - Primeiros passos em CSS - Concluído o/ o/ o/
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

Vamos continuar com a criação do seu Portfólio Web! Agora é hora de estilizar tudo que você aprendeu!

Com este exercício, você será capaz de:

-   Estilizar seu Portfólio Web usando todo o conhecimento que você construiu hoje;

-   Atualizar seu Portfólio Web no GitHub Pages.

### Estilizando seu Portfólio Web!

Antes de começar, você deve seguir as instruções abaixo e fazer o setup para o exercício de hoje:

1. Entre no diretório que você criou no dia anterior;
2. Adicione a tag <style></style>, que é onde você vai colocar suas alterações;
3. Procure uma palheta de cores com que você mais se identifica e que você pode gerar nesse site.

### Requisitos

Seu Portfólio Web deve ser estilizado usando as informações a seguir:

-   Defina fontes diferentes para o seu nome e para a descrição que você criou;

-   Defina uma cor base de background do seu Portfólio Web;

-   Altere o estilo das tags que você usou para destacar algumas informações, como sua nacionalidade e a cidade/estado onde mora;

-   Coloque tamanhos diferentes para os elementos da lista de habilidades que você criou. Lembre-se de usar classes para cada um dos elementos;

#

# Entrega

## Sumário

-   <p><a href="#1">1.</a> Estilizar seu Portfólio Web usando todo o conhecimento que você construiu hoje;</p>

-   <p><a href="#2">2.</a> Essa página web descreve as estações favoritas de Olaf, um boneco de neve que ama o sol. Ambas as tags "h2" têm ids, mas não há regras CSS para estilizá-las. Adicione 2 regras que atribuam cor aos títulos.</p>

-   <p><a href="#3">3.</a> Essa página web mostra algumas citações e declarações famosas de filmes e programas de TV. Adicione uma regra CSS que
    faz com que todas as citações tenham uma fonte de estilo itálico, de forma que elas se pareçam mais com citações.
    Adicione uma regra CSS que faz com que todas as declarações tenham uma fonte destacada em negrito, assim vai parecer que elas foram ditas em voz alta.</p>

-   <p><a href="#4">4.</a> Essa página web inclui a letra de uma música sobre palavras grandes. Colocamos as classes 'big' e 'bigger' nas tags "em" que descrevem palavras grandes, mas não as estilizamos. Adicione uma propriedade às regras CSS para tornar grande o tamanho das palavras 'big', e para tornar ainda maior o tamanho das palavras 'bigger'. Use as mesmas unidades para ambas as propriedades.</p>

### **_Projetos_**

-   <p><a href="#Project_1">Projeto_1:</a> Esse projeto, você vai usar tudo o que aprendeu até agora para criar um site de viagens incentivando as pessoas a visitar um lugar exótico. Você deve ter imagens do que elas vão ver, listas de coisas para ver e lugares para ir e parágrafos de detalhes interessantes. Você também deve usar CSS para estilizar o site, usando uma mistura de seletores simples que você aprendeu.</p>

## Questões sobre os desafios [Meus códigos]

### 1°

#### Minha página web estilizada o/

-   Estilizar seu Portfólio Web usando todo o conhecimento que você construiu hoje;

<p>Link para meu portfólio web: <a href="https://edusouza-programmer.github.io/" target="_blank">Home</a>.</p>

**_PS: Conforme estou avançando nos estudos na Trybe, o código abaixo pode está desatualizado em relação ao meu aprendizado, para uma analise atual, peço que inspencione em seu navegador minha página citada acima._**

#### Código HTML:

<details>
 <summary>Resolução do meu HTML</summary>

```html
<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Eduardo Souza</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <header>
            <div class="links">
                <a href="#">Sobre</a>
                <a href="/Exercícios_HTML/projeto_Livro-de-receitas.html" target="_blank">Projeto</a>
            </div>
        </header>
        <main>
            <div id="wrapper">
                <a
                    href="https://avatars0.githubusercontent.com/u/23068430?s=400&u=fdf94a10158b5f9e4a694c98c48c2dd192eba4e0&v=4"
                    target="_blank"
                >
                    <img
                        src="https://avatars0.githubusercontent.com/u/23068430?s=400&u=fdf94a10158b5f9e4a694c98c48c2dd192eba4e0&v=4"
                        alt="A foto de um acar muito gente fina chamando:Eduardo Souza"
                    />
                </a>
                <h1>Eduardo Souza</h1>
                <h2>Estudante turma 7 - Trybe</h2>
                <p>
                    Olá tudo bem?! Sou web developer júnior, brasileiro, morando no estado do <em>Rio de janeiro</em>,
                    estou focado nos estudos para alcançar os objetivos da profissão, apredendo com a
                    <a href="https://www.betrybe.com/" target="_blank">Trybe</a>.
                </p>
            </div>
            <div class="skill">
                <h2>Habilidades (soft skills)</h2>
                <ul>
                    <li><strong>Perseverante</strong></li>
                    <li>Proatividade</li>
                    <li><strong>Comunicação</strong></li>
                    <li>Resiliência</li>
                    <li><em>Ambição</em></li>
                    <li><strong>Adaptabilidade</strong></li>
                </ul>
            </div>
        </main>
        <section class="social">
            <div class="links">
                <a href="https://github.com/EduSouza-programmer?tab=repositories" target="_blank">GitHub</a>
                <a href="https://www.facebook.com/profile.php?id=100003755834780" target="_blank">Facebook</a>
                <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/" target="_blank">Linkedin</a>
            </div>
        </section>
        <footer class="footer">
            <div class="footer-conteiner">
                <p>
                    Feito com &hearts; por
                    <em><a href="https://www.linkedin.com/in/eduardosouzaprogrammer/"> Edu Souza</a></em>
                </p>
            </div>
        </footer>
    </body>
</html>
```

</details>

#### Código CSS:

<details>

 <summary>Resolução do meu CSS</summary>

```css
@import "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap";

:root {
    --color-green: #50fa7b;
    --color-green-hover: #248d43;
    --color-rocket: #7159c1
}

*   {
    margin: 0;
    padding: 0;
    border: 0;
}

body {
    color: #f1eeee;
    /_ background-color: #282a36; _/
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #2c2d3b;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%2313141a' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%232c2d3b' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%232a2b39' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23282a36' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23272834' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23252631' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2323252f' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2321232d' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2320212a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%231e2028' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%231c1e26' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%231b1c24' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23191b21' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2318191f' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2316171d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2315161b' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23131419' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23111216' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230f1014' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

header {
    border-bottom: 1px solid #333333;
    background-color: #0000003f;
    padding: 25px 0;
}

.links {
    text-align: center;
}

.links a {
    color: #fff;
    font-weight: bold;
    font-size: 21px;
    line-height: 28px;
    margin: 0 15px;
    text-decoration: none;
}

.links a:hover {
    color: var(--color-green);
    transition: color 500ms;
    text-decoration: underline;
}

#wrapper {
    text-align: center;
    padding: 60px;
}

#wrapper img {

    border-radius: 50%;
    border: 5px solid var(--color-green);
    width: 200px;
    height: 200px;
    transition: border-color 500ms;

}

#wrapper img:hover {
    border-color: var(--color-green-hover);
    transition: border-color 500ms;
}

#wrapper h1 {
    margin-top: 15px;
    font-size: 48px;
    line-height: 52px;
    font-weight: bold;
}

#wrapper h2 {
    font-size: 24px;
    font-weight: normal;
    line-height: 34px;
    margin-top: 8px;
    opacity: 0.9;
}

#wrapper p {
    font-size: 21px;
    line-height: 34px;
    max-width: 600px;
    margin: 15px auto 0;
    font-weight: lighter;

}

#wrapper p a {
    color: var(--color-green);
}

#wrapper p a:hover {
    color: var(--color-green-hover);
    transition: color 500ms;

}

.social {
    padding: 60px 0;
}

.skill {

    text-align: center;

}

.skill ul {
    margin-top: 10px;
}

.skill li {
    text-emphasis: none;
}

.footer {
    border-top: 1px solid #333333;
    background-color: #00000060;
    padding: 16px;
}

.footer-conteiner {
    text-align: center;
}

.footer-conteiner a {
    text-decoration: none;
    color: #50fa7b;
}
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

### Pinte o título inverno

-   Essa página web descreve as estações favoritas de Olaf, um boneco de neve que ama o sol. Ambas as tags "h2" têm ids, mas não há regras CSS para estilizá-las. Adicione 2 regras que atribuam cor aos títulos.

#### Resposta:

<details>
<summary>Código HTML</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Challenge: Seasonal ids</title>
        <style>
            #summer {
                color: orange;
            }

            #winter {
                color: blue;
            }
        </style>
    </head>

    <body>
        <h1>Olaf's favorite seasons</h1>

        <h2 id="summer">Summer</h2>
        <p>He's a happy snowman, doing what frozen things do in summer.</p>

        <h2 id="winter">Winter</h2>
        <p>He likes to stay in and cuddle</p>
    </body>
</html>
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-2_Edu_Souza/parte-1/challenge-ids_sazonais.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

#### Faça citações em itálico e Faça declarações em negrito

-   Essa página web mostra algumas citações e declarações famosas de filmes e programas de TV. Adicione uma regra CSS que
    faz com que todas as citações tenham uma fonte de estilo itálico, de forma que elas se pareçam mais com citações.
    Adicione uma regra CSS que faz com que todas as declarações tenham uma fonte destacada em negrito, assim vai parecer que elas foram ditas em voz alta.

#### Resposta:

<details>
<summary>Código HTML</summary>
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Challenge: Famous font formats</title>
        <style>
            .declaration {
                font-weight: bold;
            }

            .quote {
                font-style: italic;
            }
        </style>
    </head>

    <body>
        <h2>Famous quotes</h2>
        <p class="quote">
            "My mama always said life was like a box of chocolates. You never know what you're gonna get.".
            <br />
            - Forrest Gump
        </p>

        <p class="quote">
            "May the force be with you."
            <br />- Star Wars
        </p>

        <h2>Famous declarations</h2>

        <p class="declaration">
            I'M BATMAN.
        </p>

        <p class="declaration">
            Earth, water, fire. Together, we are CAPTAIN PLANET!
        </p>
    </body>

</html>
```
</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-2_Edu_Souza/parte-2/challenge_formatos_de_fonte_famosos.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

#### Crie tamanhos de fonte grandes

-   Essa página web inclui a letra de uma música sobre palavras grandes. Colocamos as classes 'big' e 'bigger' nas tags "em" que descrevem palavras grandes, mas não as estilizamos. Adicione uma propriedade às regras CSS para tornar grande o tamanho das palavras 'big', e para tornar ainda maior o tamanho das palavras 'bigger'. Use as mesmas unidades para ambas as propriedades.

#### Resposta:

<details>
<summary>Código HTML</summary>
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Challenge: Great big font sizes</title>
        <style>
            .big {
                font-size: 18px;
            }

            .bigger {
                font-size: 2em;
            }
        </style>
    </head>

    <body>
        <h1>Great Big Words</h1>
        <h2>by Michael Mark & Tom Chapin</h2>

        <p>
            When I was a little kid, a "<em class="big">diminutive juvenile</em>," <br />
            I liked my folks to read to me, I was an <em class="big">"eager bibliophile."</em> <br />
            Now I love words for how they sound <br />
            And how they <em class="big">"communicate."</em> <br />
            Perhaps I should explain myself, that is, <em class="big">"elucidate."</em> <br />
            Great big words, I like <em class="big">big</em> words. <br />
            Letter by letter, the <em class="bigger">bigger</em> the better <br />
            Great big words. La la la la la la la la la la!
        </p>
    </body>

</html>
```
</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-2_Edu_Souza/parte-2/challenge_tamanhos_de_fonte_enormes.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## Projetos

### Project_1°

#### Página web sobre viagens

-   Esse projeto, você vai usar tudo o que aprendeu até agora para criar um site de viagens incentivando as pessoas a visitar um lugar exótico. Você deve ter imagens do que elas vão ver, listas de coisas para ver e lugares para ir e parágrafos de detalhes interessantes. Você também deve usar CSS para estilizar o site, usando uma mistura de seletores simples que você aprendeu.

#### Resposta:

<details>
<Summary>Código HTML & CSS</summary>

```html
<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>Projeto: Viagem Edu</title>
        <style>
            /* reset */

            :root {
                --varPreto: #252525;
            }
            * {
                margin: 0;
                padding: 0;
                border: 0;
            }
            body {
                font-family: Georgia, serif;
                color: var(--varPreto);
            }

            /* header */

            .header {
                background-color: var(--varPreto);
                padding: 20px 0;
            }
            .menu-container {
                max-width: 1180px;
                margin: 0 auto;
            }
            .menu-container::after,
            .menu-container::before {
                content: "";
                display: table;
                clear: both;
            }
            .menu-logo {
                font-size: 32px;
                font-weight: bold;
                display: block;
                float: left;
                margin-left: 10px;
                text-decoration: none;
                color: white;
            }
            .menu-nav {
                float: right;
                margin-right: 10px;
            }
            .menu-nav-link {
                display: inline-block;
            }
            .menu-nav-link > a {
                display: block;
                padding: 10px;
                text-decoration: none;
                color: #fff;
                font-size: 18px;
                font-weight: bold;
            }

            /* intro */

            .intro {
                background: url("https://upload.wikimedia.org/wikipedia/commons/2/2b/Johny_Cay.jpg") no-repeat center
                    center;
                background-size: cover;
                padding: 200px 0;
                text-align: center;
                color: var(--varPreto);
            }
            .intro h1 {
                text-transform: uppercase;
                font-size: 48px;
                margin-top: 200px;
            }
            .intro h1::after {
                content: "";
                display: block;
                width: 20px;
                height: 4px;
                background-color: var(--varPreto);
                margin: 10px auto;
            }
            .intro p {
                font-style: italic;
                font-size: 18px;
            }

            /* sobre */

            .sobre {
                padding: 60px 0;
            }

            .sobre h2 {
                text-align: center;
                font-size: 36px;
                margin-bottom: 60px;
            }
            .sobre > p {
                font-size: 18px;
                line-height: 1.4em;
                font-style: italic;
                text-align: center;
                max-width: 590px;
                margin: 20px auto;
            }
            .sobre-container {
                max-width: 1180px;
                margin: 0 auto;
            }
            .sobre-container::after,
            .sobre-container::before {
                content: "";
                display: table;
                clear: both;
            }
            .sobre-item {
                width: 570px;
                float: left;
                margin: 0 10px;
            }
            .sobre-item img {
                width: 570px;
                height: 370px;
                display: block;
                max-width: 100%;
            }
            .sobre-item h3 {
                font-size: 42px;
                line-height: 1em;
                font-weight: normal;
                font-style: italic;
                background-color: var(--varPreto);
                color: #fff;
                width: 220px;
                text-align: center;
                padding: 5px 0 10px 0px;
                top: -25px;
                position: relative;
            }
            .produtos {
                background: url("https://upload.wikimedia.org/wikipedia/commons/b/b1/Bacia_do_Pina_-_Recife%2C_Pernambuco%2C_Brasil.jpg")
                    no-repeat center center;
                background-size: cover;
                padding: 150px 0;
                border-top: #d6d3c8 solid 3px;
            }
            .produtos-conteiner {
                max-width: 700px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .list-produtos h3 {
                margin-bottom: 30px;
                font-size: 40px;
                color: var(--varPreto);
            }
            .list-produtos ul {
                line-height: 24px;
            }
            .list-produtos li {
                list-style-type: none;
                font-size: 18px;
                color: var(--varPreto);
                margin-left: 16px;
            }
            .projeto {
                padding: 60px 0;
            }
            .contatos {
                background-color: var(--varPreto);
                padding: 25px 0;
            }
            .contatos p {
                color: #fff;
                text-align: center;
                font-size: 18px;
            }
            .contatos a {
                color: #50fa7b;
                text-decoration: none;
            }
            .contatos a:hover {
                color: #fff;
                text-decoration: underline;
                transition: color 300ms;
            }
        </style>
    </head>
    <body>
        <header class="header">
            <div class="menu-container">
                <a class="menu-logo" href="https://i.ibb.co/g4n9tLG/Edu-Sky.png">Edu's Sky</a>
                <nav class=" menu-nav">
                    <ul>
                        <li class="menu-nav-link"><a href="#sobre">Sobre</a></li>
                        <li class="menu-nav-link"><a href="#produtos">Produtos</a></li>
                        <li class="menu-nav-link"><a href="#contatos">Contatos</a></li>
                        <li class="menu-nav-link"><a href="#projeto">Projeto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main class="intro">
            <h1>A SUA VIAGEM<br />COMEÇA AGORA</h1>
        </main>
        <section class="sobre" id="sobre">
            <h2>Ferias maravilhosas com:</h2>
            <div class="sobre-container">
                <div class="sobre-item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/31/Air_traffic_controller_schiphol_tower.jpg"
                        alt="Homem focado no trabalho"
                    />
                    <h3>Segurança</h3>
                </div>
                <div class="sobre-item">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/568d7ccb25981d9e06ac4bf2/1455141958022-VKCTKCOP2JM2D9JKN7C4/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Pilatus+PC-12+Interior.jpg"
                        alt="Interior da aeronave com muito luxo e conforto"
                    />
                    <h3>Conforto</h3>
                </div>
            </div>
            <p>
                Com agente você encontra os <strong>melhores roteiros</strong> de viagens,<br />
                diversas opções de passeios, percorrendo os pontos turísticos de sua escolha numa
                <strong>experiência unica</strong>, não espere mais,você encontrou o que precisa! Agende hoje mesmo sua
                viagem com <br /><strong>Edu's Sky</strong>.
            </p>
        </section>
        <section id="produtos" class="produtos">
            <div class="produtos-conteiner">
                <div class="list-produtos">
                    <h3>Verdadeiros Tours</h3>
                    <ul>
                        <li><strong>Brasil</strong></li>
                        <li>Bolívia</li>
                        <li><em>Argentina</em></li>
                        <li>Peru</li>
                    </ul>
                </div>
                <div class="list-produtos">
                    <h3>Conheça lugares</h3>
                    <ul>
                        <li><strong>Terra Ronca - Brasil</strong></li>
                        <li>Uyuni - Bolívia</li>
                        <li>El Chaltén - Argentina</li>
                        <li><em>Huaraz - Peru</em></li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="projeto" class="projeto"></section>
        <footer id="contatos" class="contatos">
            <div>
                <p>
                    Feito com ♥ por
                    <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/" target="_blank"><em>Edu Souza</em></a>
                </p>
            </div>
        </footer>
    </body>
</html>
```

</details>

<p align="right">
    <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_3-2_Edu_Souza/parte-1/challenge_projeto-_pagina_web_sobre_viagens.html">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-index.html-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
