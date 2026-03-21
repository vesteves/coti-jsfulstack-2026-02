# Coti Informática - JavaScript Essencial

## Fundamentos e ambiente

- **Introdução ao ES6+**
  - `let`, `const`, `arrow functions`, `template strings`, `destructuring`, `spread operator`.
- **Instalação do Node**
  - `baixar do site oficial e instalar`
- **Instalação do VSCode e melhores extensões**
  - `IDE que auxilia no desenvolvimento`
- **Primeiros passos com JavaScript**
  - `o famoso console.log()`

### Variáveis, tipos e operadores

- **Tipos de variáveis**
  `var`, `let`, `const`
- **Tipos de dados**
  - `string`, `number`, `boolean`, `object`, `null`, `undefined`
- **Operadores e expressões (aritméticos, lógicos)**
  - comparações `==`/`===`, `!=`/`!==` e lógicos `&&`/`||`

### Estruturas de controle

- **Condicionantes**
  - if, switch.
- **Repetição (loops)**
  - Visto em aula (`for`).
  - Veremos em módulos futuros (`while`, `for...of`, `for...in`).

### Funções

- **Funções tradicionais vs. funções anônimas**
  - função tradicional e função anônima/arrow atribuída a variável
- **Conceitos de escopo (função e bloco)**
  - escopo de função e uso de variável externa
  - Escopo de bloco (com mais exemplos) será aprofundado em módulos futuros.
- **Arrow Functions**
  - `const temp = (param) => {}`
- **Callback**
  - Veremos em módulos futuros.

### Objetos e listas

- **Objetos**
  - `const obj = {}`
- **Keys, values, entries**
  - Veremos em módulos futuros.
- **Listas (arrays)**
  - `const arr = []`
- **Métodos (concat, filter, find, map, reduce, push)**
  - `map`.
  - noções de `push`/`pop`.
  - Veremos em módulos futuros: `concat`, `filter`, `find`, `reduce`.
- **Destructuring**
  - `const { nome } = aluno`, `const [primeiro] = alunos`.
- **Spread Operator**
  - `const lista = ['Vitor']; const novaLista = [...lista, 'Jade']`.

### Strings

- **Concatenando string**
  - `const nome = 'Vitor'; const saudacao = 'Olá, ' + nome;` ou template string.

### Assíncrono e Web

- **Promises**
  - Veremos em módulos futuros.
- **Async/Await**
  - Veremos em módulos futuros.
- **Fetch API**
  - Veremos em módulos futuros.

### Direcionamentos

- **Introdução ao JS para frontend**
  - React (useEffect, useState, etc).
- **Introdução ao JS para backend**
  - Node (express, mongoose).

## Conceitos (bem resumido)

- **Variáveis**
  - `var`, `let`, `const` (diferenças de reatribuição e escopo).
- **Tipos e inspeção**
  - `string`, `number`, `boolean`, `object`, `null`, `undefined`.
  - `typeof` para checar tipos.
- **Funções**
  - Função tradicional vs arrow function.
  - Parâmetros, `return` e escopo.
- **Objetos e arrays**
  - Objeto: chave/valor (`aluno.nome` e `aluno["nome"]`).
  - Array: índice (`alunos[0]`) e `length`.
- **Template string**
  - Interpolação: `` `O aluno ${aluno.nome} ...` ``.
- **Operadores**
  - `=` (atribuição), `==`/`===`, `!=`/`!==`, `&&` e `||`.
- **Percorrer/transformar listas**
  - `for`, `forEach`, `map`.
- **Spread e destructuring**
  - `...obj` para copiar/mesclar; destructuring para extrair campos.
- **Validação simples de parâmetros**
  - Checagens com `typeof` + `console.error`.

## Exemplos de exercícios

- **1) Idade futura**
  - Faça `somarIdade(anos)` e use template string para imprimir uma frase com idade atual e futura.
- **2) Lista de alunos**
  - Crie objetos `aluno` (`nome`, `veiculo`, `frequencia`) e coloque em um array.
  - Imprima somente os nomes usando `forEach`.
- **3) Função genérica para ler dados**
  - Implemente `coletarDados(lista, posicao, chave)` validando:
    - `lista` é array, `posicao` é `number`, `chave` é `string`.
    - Retorne `lista[posicao][chave]`.
- **4) Transformação com `map`**
  - Gere um novo array que mantém os dados do aluno e adiciona `texto` com uma frase pronta.
- **5) Destructuring**
  - Dado um aluno, retorne um objeto com textos formatados e use destructuring para capturar as propriedades.

## Prompts (para estudar e buscar exercícios sozinho)

- **Variáveis e escopo**
  - "Explique `var`, `let` e `const` com exemplos e armadilhas comuns."
- **Funções**
  - "Crie exercícios de funções e arrow functions com `return` e validação de parâmetros (com respostas)."
- **Objetos e arrays**
  - "Gere 10 exercícios de arrays de objetos (CRUD simples em memória) e mostre soluções."
- **Operadores**
  - "Mostre exemplos que provem a diferença entre `==` e `===` e entre `!=` e `!==`."
- **Iteração e transformação**
  - "Crie exercícios usando `forEach` e `map` para transformar uma lista de alunos, com gabarito."
- **Spread/destructuring**
  - "Explique spread (`...`) e destructuring com 5 exercícios práticos resolvidos."
