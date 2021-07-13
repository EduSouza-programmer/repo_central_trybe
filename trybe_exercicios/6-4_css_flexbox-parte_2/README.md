<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 6-4: CSS Flexbox - Parte 2 - Concluído o/ o/ o/
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

Para os exercícios a seguir, utilize este playground para testar como as propriedades Flexbox influenciam a disposição dos elementos em um container. Existem outros playgrounds para Flexbox como este, e os links para eles estão nos Recursos adicionais.
Como os exercícios serão feitos na própria plataforma, crie um diretório em seu repositório para o site número 1 (problema do sapo) e outro para o site número 2 (problema das torres).

-   Faça os exercícios de 14 a 24 neste [site](https://flexboxfroggy.com/). O seu objetivo é colocar os sapos em cima de suas respectivas folhas.

-   Neste segundo [link](https://flexboxfroggy.com/), complete os exercícios de 10 a 12. Seu objetivo aqui é posicionar as torres de defesa para que elas abatam os inimigos. Você terá de pensar qual é a melhor posição para cada torre.

-   (Opcional) Para finalizar, escolha alguns exercícios antigos como, por exemplo, o portfólio ou até mesmo os projetos de HTML, CSS e JavaScript e estruture as páginas utilizando Flexbox.

#

# Entrega

### Sumário

#### Parte-1

-   <p><a href="#14">14.</a> Às vezes, inverter a ordem das linhas ou colunas de um contêiner não é suficiente...</p>

-   <p><a href="#15">15.</a> Use a orderpropriedade para enviar o sapo vermelho ao seu nenúfar.</p>

-   <p><a href="#16">16.</a> Outra propriedade que você pode aplicar a itens individuais...</p>

-   <p><a href="#17">17.</a> Combine ordercom align-selfpara ajudar as rãs a seus destinos.</p>

-   <p><a href="#18">18.</a> Os sapos são todos espremidos em uma única fileira de nenúfares...</p>

-   <p><a href="#19">19.</a> Ajude este exército de sapos a formar três colunas ordenadas usando uma combinação de flex-directione flex-wrap.</p>

-   <p><a href="#20">20.</a> As duas propriedades flex-directione flex-wrapsão utilizadas tantas vezes juntos que a propriedade estenográfica...</p>

-   <p><a href="#21">21.</a> As rãs estão espalhadas por todo o tanque, mas os nenúfares estão agrupados no topo...</p>

-   <p><a href="#22">22.</a> Agora, a correnteza amontoou os nenúfares no fundo. Use align-contentpara guiar os sapos até lá.</p>

-   <p><a href="#23">23.</a> As rãs deram uma festa, mas é hora de voltar para casa. Use uma combinação de flex-directione...</p>

-   <p><a href="#24">24.</a> Traga os sapos para casa uma última vez usando as propriedades...</p>

#

## Exercícios [Meus códigos]

### 14°

Às vezes, inverter a ordem das linhas ou colunas de um contêiner não é suficiente. Nesses casos, podemos aplicar a orderpropriedade a itens individuais. Por padrão, os itens têm um valor de 0, mas podemos usar essa propriedade para defini-la também como um valor inteiro positivo ou negativo (-2, -1, 0, 1, 2).

Use a orderpropriedade para reordenar as rãs de acordo com seus nenúfares.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
}

.amarelo {
    order: 1;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_14°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 15°

Use a orderpropriedade para enviar o sapo vermelho ao seu nenúfar.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
}

.red {
    order: -1;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_15°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 16°

Outra propriedade que você pode aplicar a itens individuais é align-self. Esta propriedade aceita os mesmos valores align-itemse seu valor para o item específico.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    align-items: flex-start;
}

.amarelo {
    align-self: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_16°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 17°

Combine ordercom align-selfpara ajudar as rãs a seus destinos.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    align-items: flex-start;
}

.amarelo {
    order: 1;
    align-self: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_17°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 18°

Ah não! Os sapos são todos espremidos em uma única fileira de nenúfares. Distribua-os usando a flex-wrappropriedade, que aceita os seguintes valores:

-   nowrap: Cada item é adequado a uma única linha.
-   wrap: Os itens são agrupados em linhas adicionais.
-   wrap-reverse: Os itens são agrupados em linhas adicionais ao contrário.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-wrap: wrap;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_18°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 19°

Ajude este exército de sapos a formar três colunas ordenadas usando uma combinação de flex-directione flex-wrap.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_19°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 20°

As duas propriedades flex-directione flex-wrapsão utilizadas tantas vezes juntos que a propriedade estenográfica flex-flowfoi criado para combiná-los. Esta propriedade abreviada aceita o valor de uma das duas propriedades separadas por um espaço.

Por exemplo, você pode usar flex-flow: row wrappara definir linhas e agrupá-las.

Tente flex-flowrepetir o nível anterior.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-flow: column wrap;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_20°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 21°

As rãs estão espalhadas por todo o tanque, mas os nenúfares estão agrupados no topo. Você pode usar align-contentpara definir como várias linhas são espaçadas umas das outras. Esta propriedade assume os seguintes valores:

-   flex-start: As linhas são embaladas na parte superior do contêiner.
-   flex-end: As linhas são embaladas no fundo do contêiner.
-   center: As linhas são embaladas no centro vertical do contêiner.
-   space-between: As linhas são exibidas com espaçamento igual entre elas.
-   space-around: As linhas são exibidas com espaçamento igual ao redor delas.
-   stretch: As linhas são esticadas para caber no contêiner.

Isso pode ser confuso, mas align-contentdetermina o espaçamento entre as linhas, enquanto align-itemsdetermina como os itens como um todo são alinhados dentro do contêiner. Quando há apenas uma linha, align-contentnão tem efeito.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_21°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 22°

Agora, a correnteza amontoou os nenúfares no fundo. Use align-contentpara guiar os sapos até lá.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_22°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 23°

As rãs deram uma festa, mas é hora de voltar para casa. Use uma combinação de flex-directione align-contentpara levá-los aos nenúfares.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-content: center;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_23°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 24°

Traga os sapos para casa uma última vez usando as propriedades CSS que você aprendeu:

-   justify-content
-   align-items
-   flex-direction
-   order
-   align-self
-   flex-wrap
-   flex-flow
-   align-content

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-flow: column-reverse wrap-reverse;
    align-content: space-between;
    justify-content: center;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_24°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
