var professor1 = 'Vitor'
var professor2 = 'David'
let idade = 39
// console.log(professor1 + ' e ' + professor2 + ' - ' + idade)

// var will return

// console.log('A idade de uma pessoa que tem ' + idade + ' anos atualmente, daqui ha ' + anos + ' anos sera de ' + (idade + anos))

// Uma função ela nasce podendo ter um nome
// Uma função ela pode ter parametros (que ficam entre parenteses)
// Um função ela tem seu proprio escopo

idade = 5
// qual eh o valor da idade?
function somarIdade(anos) {
  return anos + idade
}


// arrow function
// () => {}
var somarIdade = (anos) => {
  return anos + idade
}

// const imprimeTotal = () => {
//   const texto1 = 'A idade de uma pessoa que tem '
//   const texto2 = ' anos atualmente, daqui ha '
//   const texto3 = ' anos sera de '
//   const idadeFutura = 12
//   const somatorio = somarIdade(idadeFutura)

//   return [texto1, idade, texto2, idadeFutura, texto3, somatorio].join("")
// }

// console.log(imprimeTotal())

// string = texto '', "", ``
// number = números 2, 1.3, -5
// object = conjunto de chaves e valores

const aluno1 = {
  nome: "Leandro",
  veiculo: "Carro",
  frequencia: 2
}

const aluno2 = {
  nome: "Kaio",
  veiculo: "Bike",
  frequencia: 2
}

const aluno3 = {
  nome: "Sergio",
  veiculo: "Motoca",
  frequencia: 2
}

const aluno4 = {
  nome: "Snaymi",
  veiculo: "Metro",
  frequencia: 2
}

const aluno5 = {
  nome: "Jorge",
  veiculo: "Metro",
  frequencia: 2
}

// template string: Uma maneira de concatenar texto com dados em javascript
// console.log(`O nome do aluno eh ${aluno.nome}. O veículo do aluno eh ${aluno.veiculo}`)

// console.log(typeof aluno)

// const alunos = ['Kaio', 'Sergio']
const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5]
// console.log(alunos[0]["veiculo"])
// console.log(alunos[0].veiculo)


// parametro lista = tem q receber uma lista
// parametro posicao = tem q receber um numero
// parametro chave = tem q receber um texto

// = -> significa RECEBE
// == -> significa IGUALDE (se o valor da esquerda eh igual ao da direita)
// === -> significa IGUALDE (se o valor E O TIPO da esquerda eh igual ao da direita)
// ! -> significa INVERSO
// != -> significa IGUALDE (se o valor da esquerda eh DIFERENTE ao da direita)
// !== -> significa IGUALDE (se o valor E O TIPO da esquerda eh DIFERENTE ao da direita)
// && -> operador lógico AND (E). Ele é utilizado para combinar duas ou mais expressões, retornando true (verdadeiro) apenas se todas as expressões avaliadas forem verdadeiras. Se qualquer uma das partes for falsa, o operador retorna false
// || -> operador lógico OR (OU). Ele é utilizado para combinar duas ou mais expressões, retornando true (verdadeiro) se uma das expressões avaliadas forem verdadeiras. Se ambas as partes forem falsas, o operador retorna false

// const numero1 = 2
// const numero2 = '2'

// console.log(true || false)

// boolean
// console.log(numero1 != numero2)

// const coletarDados = (lista, posicao, chave) => {
//   // se lista nao for um object, retorne null
//   // lista.length verifica quantas posicoes existem na lista (length == TAMANHO)
//   // console.log(lista.length)
//   if(typeof lista !== 'object' || typeof lista.length !== 'number') {
//     console.error('O parametro lista devera ser uma lista')
//     return
//   }

//   if(typeof posicao !== 'number') {
//     console.error('O parametro posicao devera ser um numero')
//     return
//   }

//   if(typeof chave !== 'string') {
//     console.error('O parametro chave devera ser um texto')
//     return
//   }

//   console.log(lista[posicao][chave])
// }

// uma lista no JS eh reconhecida como OBJECT
// const teste = ['Vitor', 'Jade']
// console.log(typeof teste)

// coletarDados(alunos, 0, 'veiculo')

// console.log(alunos[1])

// const temp = ['Texto', 2000, { id: 123}, () => console.log('Ola mundo'), 3.14, null, undefined, [1, 'teste']]

// console.log(temp[3])

// const lista = ["Vitor", "Kaio", "Leandro"]
// .push() = adiciona valores no FINAL da lista
// lista.push("Sergio")

// .pop() = remove o ultimo valor da lista
// lista.pop()

// console.log(lista)
// console.log(lista.length)

// Eu quero imprimir o nome de todos os alunos
// console.log(alunos.length)

// loop - laço
// alunos.forEach((aluno) => {
//   console.log(aluno.nome)
// })

// for(let i = 0; i < alunos.length; i++) {
//   console.log(alunos[i].nome)
// }


// TRANSFORMAR
// const alunosTransformados = alunos.map((aluno) => {
//   return {
//     ...aluno, // spread operator
//     texto: `O aluno ${aluno.nome} tem o veiculo ${aluno.veiculo}`
//   }
// })

// console.log(alunosTransformados)
// console.log(alunos)

// const alunoAlterado = {
//   ...aluno1,
//   nomes: 'Joana',
// }

// console.log(alunoAlterado)

// const informacoesDosAlunos = (param) => {
//   const nomeTransformado = `O nome do meu aluno é ${param.nome}`
//   const veiculoTransformado = `O veiculo do meu aluno é ${param.veiculo}`
//   const frequenciaTransformada = `A frequencia do meu aluno é ${param.frequencia}`

//   return [
//     nomeTransformado,
//     veiculoTransformado,
//     frequenciaTransformada,
//     "Ola mundo"
//   ]
// }

// const texto1 = informacoesDosAlunos(aluno1)[0]
// const texto2 = informacoesDosAlunos(aluno1)[1]
// const texto3 = informacoesDosAlunos(aluno1)[2]

// destructuring
// const [naoimportaonomedavariavel, texto2, texto3, texto4] = informacoesDosAlunos(aluno1)
// const [nome, setNome] = useState("")

// console.log(naoimportaonomedavariavel)

const dadoDoAluno = (param) => {

  return {
    nomeAlterado: `O nome do meu aluno é ${param.nome}`,
    veiculoAlterado: `O veiculo do meu aluno é ${param.veiculo}`,
    frequenciaAlterada: `A frequencia do meu aluno é ${param.frequencia}`
  }
}

// const texto1 = dadoDoAluno(aluno2).nomeAlterado
// const texto2 = dadoDoAluno(aluno2).veiculoAlterado
// const texto3 = dadoDoAluno(aluno2).frequenciaAlterada

// const { nomeAlterado, veiculoAlterado, frequenciaAlterada } = dadoDoAluno(aluno2)

// console.log(texto1)

// const {
//   frequencia,
//   nome
// } = aluno3

const frequencia = aluno3.frequencia
const nome = aluno3.nome

console.log(nome)
