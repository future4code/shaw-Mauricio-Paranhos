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

// b)

const novaPessoa = {
    ...pessoa,
    apelidos: ['Duda', 'Duds', 'Wardo']
}

imprime(novaPessoa.nome, novaPessoa.apelidos)

//2.

//a)

// const usuario1 = {
//     nome: "João",
//     idade: 35,
//     profissao: "Médico"
// }

// const usuario2 = {
//     nome: "Maria",
//     idade: 30,
//     profissao: "Professora"
// }

// function minhaFuncao() {
//     const resultado = [usuario1.nome, usuario1.nome.length, usuario1.idade, usuario1.profissao, usuario1.profissao.length]
//       // desenvolver sua logica
//       return resultado
//   }
  
//    console.log(minhaFuncao(usuario1))
//    console.log(minhaFuncao(usuario2))

  // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
