// Exercícios de interpretação de código

// 1.

// a) O que vai ser impresso no console?
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2.

// a) O que vai ser impresso no console?
// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Copia um objeto ou array para que possamos alterar ou adicionar propriedades a ele.

// 3.

// a) O que vai ser impresso no console?
// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Aconteceu por que no objeto não existe a propriedade "altura"

// Exercícios de escrita de código

// 1.

// a)

const pessoa = {
    nome: "Eduardo",
    apelidos: ['Du','Dudu', 'Edu']
}

function imprime(nome, apelidos) {
    //console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
    console.log('Eu sou ' + nome , 'mas pode me chamar de: ' + apelidos[0], ', ' + apelidos[1], 'ou ' + apelidos[2])
}

imprime(pessoa.nome, pessoa.apelidos)

// // b)

const novaPessoa = {
    ...pessoa,
    apelidos: ['Duda', 'Duds', 'Wardo']
}

imprime(novaPessoa.nome, novaPessoa.apelidos)

// 2.

// a)

const usuario1 = {
    nome: "João",
    idade: 35,
    profissao: "Médico"
}

const usuario2 = {
    nome: "Maria",
    idade: 30,
    profissao: "Professora"
}

// b)

function minhaFuncao(nome, idade, profissao) {
    const resultado = [nome, nome.length, idade, profissao, profissao.length]
      // desenvolver sua logica
      return resultado
  }
  
   console.log(minhaFuncao(usuario1.nome, usuario1.idade, usuario1.profissao))
   console.log(minhaFuncao(usuario2.nome, usuario2.idade, usuario2.profissao))

// 3.

// a)

const carrinho = []

// b)

const fruta1 = {
    nome: 'laranja',
    disponibilidade: true
}

const fruta2 = {
    nome: 'pêssego',
    disponibilidade: true
}

const fruta3 = {
    nome: 'abacaxi',
    disponibilidade: true
}

// c)

function pegarFruta(item1, item2, item3) {
    carrinho.push(item1)
    carrinho.push(item2)
    carrinho.push(item3)
    return carrinho
}

pegarFruta(fruta1, fruta2, fruta3)
console.log(carrinho)

// Desafios:

// 1.

function user() {
    const userName = prompt('Digite seu nome')
    const userAge = prompt('Digite sua idade')
    const userProfession = prompt('Digite sua profissão')
    const userObject = {
        nome: userName,
        idade: userAge,
        profissao: userProfession
    }
    return userObject
}
const resposta = user()
console.log(resposta)
console.log(typeof resposta)

// 2.

const filme1 = {
    nome: 'Amnésia',
    anoLancamento: 2001
}

const filme2 = {
    nome: 'A Origem',
    anoLancamento: 2010
}
 function movies(ano1, ano2) {
    console.log('O primeiro filme foi lançado antes do segundo?', ano1<ano2)
    console.log('O primeiro filme foi lançado no mesmo ano do segundo?', ano1==ano2)
 }
 movies(filme1.anoLancamento, filme2.anoLancamento)

 // 3.

 function atualizaFruta(produto1, produto2, produto3) {
    produto1 = {
        ...fruta1,
        disponibilidade: !true
    }
    produto2 = {
        ...fruta2,
        disponibilidade: !true
    }
    produto3 = {
        ...fruta3,
        disponibilidade: !true
    }
    console.log(produto1, produto2, produto3)
}

atualizaFruta(fruta1, fruta2, fruta3)
