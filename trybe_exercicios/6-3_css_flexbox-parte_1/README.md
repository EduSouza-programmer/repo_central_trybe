<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 6-3: CSS Flexbox - Parte 1 - Concluído o/ o/ o/
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
Como os exercícios serão feitos na própria plataforma, crie um diretório em seu repositório para o site número 1 (problema do sapo) e outra para o site número 2 (problema das torres).

-   Faça os exercícios de 1 a 13 neste [site](https://flexboxfroggy.com/). O seu objetivo é colocar os sapos em cima de suas respectivas folhas.
-   Neste segundo [link](http://www.flexboxdefense.com/), complete os exercícios de 1 a 9. Seu objetivo aqui é posicionar as torres de defesa para que elas abatam os inimigos. Você terá de pensar qual é a melhor posição para cada torre.
    _*Ps:Exercício realizado no site conforme solicidado*_.

#

# Entrega

### Sumário

#### Parte-1

-   <p><a href="#1">1.</a> Bem-vindo ao Flexbox Froggy, um jogo onde você ajuda Froggy e seus amigos escrevendo...</p>

-   <p><a href="#2">2.</a> Use justify-contentnovamente para ajudar essas rãs a chegarem aos nenúfares...</p>

-   <p><a href="#3">3.</a> Ajude os três sapos a encontrar seus nenúfares apenas usando justify-content. Desta vez...</p>

-   <p><a href="#4">4.</a> Agora, os nenúfares nas bordas foram levados para a costa, aumentando o espaço...</p>

-   <p><a href="#5">5.</a> Agora use align-items para ajudar as rãs a chegarem ao fundo do tanque...</p>

-   <p><a href="#6">6.</a> Conduza o sapo para o centro da lagoa usando uma combinação de justify-contente align-items.</p>

-   <p><a href="#7">7.</a> Os sapos precisam cruzar o lago novamente, desta vez para alguns nenúfares...</p>

-   <p><a href="#8">8.</a> As rãs precisam ficar na mesma ordem que seus nenúfares usando flex-direction. Esta...</p>

-   <p><a href="#9">9.</a> Ajude as rãs a encontrar sua coluna de nenúfares usando flex-direction. Esta propriedade...</p>

-   <p><a href="#10">10.</a> Ajude as rãs a pegar seus próprios nenúfares. Embora pareçam próximos...</p>

-   <p><a href="#11">11.</a> Ajude as rãs a encontrar seus nenúfares usando flex-directione...</p>

-   <p><a href="#12">12.</a> Ajude as rãs a encontrar seus nenúfares usando flex-directione justify-content.</p>

-   <p><a href="#13">13.</a> Ajude as rãs encontrar seus lilypads usando flex-direction, justify-contente align-items.</p>

#

## Exercícios [Meus códigos]

### 1°

Bem-vindo ao Flexbox Froggy, um jogo onde você ajuda Froggy e seus amigos escrevendo código CSS! Guie este sapo até a vitória-régia à direita usando a justify-contentpropriedade, que alinha os itens horizontalmente e aceita os seguintes valores:

-   flex-start: Os itens são alinhados à esquerda do contêiner.
-   flex-end: Os itens são alinhados ao lado direito do contêiner.
-   center: Os itens são alinhados no centro do contêiner.
-   space-between: Os itens são exibidos com espaçamento igual entre eles.
-   space-around: Os itens são exibidos com espaçamento igual ao redor deles.

Por exemplo, justify-content: flex-end;moverá o sapo para a direita.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    justify-content: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_1°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

Use justify-contentnovamente para ajudar essas rãs a chegarem aos nenúfares. Lembre-se de que essa propriedade CSS alinha os itens horizontalmente e aceita os seguintes valores:

-   flex-start: Os itens são alinhados à esquerda do contêiner.
-   flex-end: Os itens são alinhados ao lado direito do contêiner.
-   center: Os itens são alinhados no centro do contêiner.
-   space-between: Os itens são exibidos com espaçamento igual entre eles.
-   space-around: Os itens são exibidos com espaçamento igual ao redor deles.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    justify-content: center;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_2°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

Ajude os três sapos a encontrar seus nenúfares apenas usando justify-content. Desta vez, os nenúfares têm muito espaço ao seu redor.
Se você se esquecer dos valores possíveis para uma propriedade, passe o mouse sobre o nome da propriedade para visualizá-los. Experimente pairar sobre justify-content.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    justify-content: space-around;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_3°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

Agora, os nenúfares nas bordas foram levados para a costa, aumentando o espaço entre eles. Use justify-content. Desta vez, os nenúfares têm espaçamento igual entre eles.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    justify-content: space-between;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_4°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

Agora use align-items para ajudar as rãs a chegarem ao fundo do tanque. Esta propriedade CSS alinha os itens verticalmente e aceita os seguintes valores:

-   flex-start: Os itens são alinhados ao topo do contêiner.
-   flex-end: Os itens são alinhados ao fundo do recipiente.
-   center: Os itens são alinhados no centro vertical do contêiner.
-   baseline: Os itens são exibidos na linha de base do contêiner.
-   stretch: Os itens são esticados para caber no contêiner.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    align-items: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_5°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 6°

Conduza o sapo para o centro da lagoa usando uma combinação de justify-contente align-items.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_6°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 7°

Os sapos precisam cruzar o lago novamente, desta vez para alguns nenúfares com bastante espaço ao redor deles. Usando uma combinação de justify-contente align-items.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_7°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 8°

As rãs precisam ficar na mesma ordem que seus nenúfares usando flex-direction. Esta propriedade CSS define a direção em que os itens são colocados no contêiner e aceita os seguintes valores:

-   row: Os itens são colocados da mesma forma que a direção do texto.
-   row-reverse: Os itens são posicionados opostos à direção do texto.
-   column: Os itens são colocados de cima para baixo.
-   column-reverse: Os itens são colocados de baixo para cima.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-direction: row-reverse;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_8°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 9°

Ajude as rãs a encontrar sua coluna de nenúfares usando flex-direction. Esta propriedade CSS define a direção em que os itens são colocados no contêiner e aceita os seguintes valores:

-   row: Os itens são colocados da mesma forma que a direção do texto.
-   row-reverse: Os itens são posicionados opostos à direção do texto.
-   column: Os itens são colocados de cima para baixo.
-   column-reverse: Os itens são colocados de baixo para cima.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-direction: column;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_9°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 10°

Ajude as rãs a pegar seus próprios nenúfares. Embora pareçam próximos, vai demorar tanto flex-directione justify-contentpara levá-los lá.
Observe que, ao definir a direção para uma linha ou coluna invertida, o início e o fim também são invertidos.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_10°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 11°

Ajude as rãs a encontrar seus nenúfares usando flex-directione justify-content.
Observe que quando a direção flexível é uma coluna, justify-content muda para vertical e align-items horizontal.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_11°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 12°

Ajude as rãs a encontrar seus nenúfares usando flex-directione justify-content.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_12°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 13°

Ajude as rãs encontrar seus lilypads usando flex-direction, justify-contente align-items.

#### Resposta:

<details>
 <summary>Código CSS</summary>

```css
#pond {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-end;
}
```

</details>

<p align="right">
    <a href="https://flexboxfroggy.com/">
    <img alt="Go index.html" src="https://img.shields.io/badge/link-exercise_13°-orange">
    </a>&nbsp;
    <a href="#Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
