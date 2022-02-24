// Exercícios de interpretação de código

// 1.

// a)
// Recebe um número do usuário e teste se o resto da divisão deste 
// número por 2 é igual a 0.

// b)
// Números pares.

// c)
// Número ímpares.

// 2.

// a)
// Para o usuário escolher uma fruta e receber o preço dela no console.

// b)
// "O preço da fruta  Maçã  é  R$  2.25"

// c)
// Seria  impresso: "O preço da fruta  Pêra  é  R$  5", pois ele 
// não pararia no valor 5.5 e pegaria o valor do default.

// 3.

// a)
// Declarando uma variável "numero" e pedindo para o usuário digitar o valor
// deste número e convertendo a entrada para o tipo "Number".

// b)
// O código não retornará nenhuma mensagem em nenhum dos casos.

// c)
// Como a variável "mensagem" não é uma variável global e está dentro 
// do escopo da condicional, o "console.log" não tem acesso a ela.

// Exercícios de escrita de código

// 1.

// a) e b)

const idadeUsuario = Number(prompt("Digite sua idade"))

// c)

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

// 2.

const turno1 = prompt("Digite seu turno de estudo. (M (matutino) ou V (Vespertino) ou N (Noturno))")
const turnoMin1 = turno1.toLowerCase()

if (turnoMin1 === "m" ) {
    console.log("Bom dia!")
} else if (turnoMin1 === "v") {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// 3.

const turno2 = prompt("Digite seu turno de estudo. (M (matutino) ou V (Vespertino) ou N (Noturno))")
const turnoMin2 = turno2.toLowerCase()

switch (turnoMin2) {
    case "m" :
        console.log("Bom dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "n":
        console.log("Boa noite!")
        break;
    default:
        console.log("Olá!")
        break;
}

// 4.

const genero = prompt("Digite o gênero do filme")
const preco = Number(prompt("Digite o valor do ingresso"))
const generoMin = genero.toLowerCase()

if (generoMin === "fantasia") {
    if (preco <= 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
} else {
    console.log("Escolha outro filme :(")
}

// Desafios

// 1.

const genero = prompt("Digite o gênero do filme")
const preco = Number(prompt("Digite o valor do ingresso"))
const generoMin = genero.toLowerCase()

if (generoMin === "fantasia" && preco <= 15) {
  const snack = prompt("Qual snack que você quer comprar?")
  console.log("Bom filme!")
  console.log("Aproveite o seu", snack)
} else {
    console.log("Escolha outro filme :(")
}

// 2.

const nomeCompleto = prompt("Digite seu nome completo")
const tipoJogo = prompt("Digite o tipo de jogo (IN para internacional e DO para doméstico)")
const etapa = prompt("Digite a etapa do jogo (SF para semi-final, DT para decisão de terceiro lugar e FI para final")
const categoria = Number(prompt("Digite a categoria (1, 2, 3 ou 4)"))
const qtdIngressos = Number(prompt("Digite o número de ingressos"))
const dolar = 4.10
let valorIngresso = Number()

switch (tipoJogo) {
  case "IN":
    if (etapa === "SF" && categoria === 1) {
      valorIngresso = 1320
    } else if (etapa === "SF" && categoria === 2){
      valorIngresso = 880
    } else if (etapa === "SF" && categoria === 3){
      valorIngresso = 550
    } else if (etapa === "SF" && categoria === 4){
      valorIngresso = 220
    } else if (etapa === "DT" && categoria === 1){
      valorIngresso = 660
    } else if (etapa === "DT" && categoria === 2){
      valorIngresso = 440
    } else if (etapa === "DT" && categoria === 3){
      valorIngresso = 330
    } else if (etapa === "DT" && categoria === 4){
      valorIngresso = 170
    } else if (etapa === "FI" && categoria === 1){
      valorIngresso = 1980
    } else if (etapa === "FI" && categoria === 2){
      valorIngresso = 1320
    } else if (etapa === "FI" && categoria === 3){
      valorIngresso = 880
    } else if (etapa === "FI" && categoria === 4){
      valorIngresso = 330
    }
    console.log("---Dados da compra---")
    console.log("Nome:", nomeCompleto)
    console.log("Tipo de jogo:", tipoJogo)
    console.log("Etapa do jogo:", etapa)
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", qtdIngressos)
    console.log("---Valores---")
    console.log("Valor do ingresso:", valorIngresso)
    console.log("Valor total:", qtdIngressos * (valorIngresso * dolar))
    break;
  case "DO":
    if (etapa === "SF" && categoria === 1) {
      valorIngresso = 1320
    } else if (etapa === "SF" && categoria === 2){
      valorIngresso = 880
    } else if (etapa === "SF" && categoria === 3){
      valorIngresso = 550
    } else if (etapa === "SF" && categoria === 4){
      valorIngresso = 220
    } else if (etapa === "DT" && categoria === 1){
      valorIngresso = 660
    } else if (etapa === "DT" && categoria === 2){
      valorIngresso = 440
    } else if (etapa === "DT" && categoria === 3){
      valorIngresso = 330
    } else if (etapa === "DT" && categoria === 4){
      valorIngresso = 170
    } else if (etapa === "FI" && categoria === 1){
      valorIngresso = 1980
    } else if (etapa === "FI" && categoria === 2){
      valorIngresso = 1320
    } else if (etapa === "FI" && categoria === 3){
      valorIngresso = 880
    } else if (etapa === "FI" && categoria === 4){
      valorIngresso = 330
    }
    console.log("Nome:", nomeCompleto)
    console.log("Tipo de jogo:", tipoJogo)
    console.log("Etapa do jogo:", etapa)
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", qtdIngressos)
    console.log("Valor do ingresso:", valorIngresso)
    console.log("Valor total:", qtdIngressos * valorIngresso)
    break;

  default:
    console.log("Erro!")
    break;
}
