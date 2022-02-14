/* 
Interpretações:

1. Será impresso: 

    10
    10 5

2. Será Ipresso:

    10 10 10

3. Nomes para variáveis:

    p <- jornadaDiaria
    t <- remuneracaoDiaria
*/

// Escrita de código:
// Exercício 1

let nome
let idade
console.log (typeof idade, nome)
nome = prompt ("Escreva o seu nome")
idade = prompt ("Escreva o sua idade")
console.log (typeof idade, nome)
console.log ("Olá", nome, "você tem", idade, "anos." )
/*

d) Foi impresso "undefined" pois não foi atribuído nenhum valor ou 
tipo para as variáveis.
f) Agora o comando "typeof" apresentou os tipos corretamente.

*/

// Exercício 2

let roupaAzul = true
console.log ("Você esta usando uma roupa azul hoje?", roupaAzul)
let chapeu = false
console.log ("Você esta usando um chapéu?", chapeu)
let tenis = true
console.log ("Você esta usando tênis?", tenis)

// Exercício 3

let a = 10
let b = 25

console.log("O valor de a é", a)
console.log("O valor de b é", b)

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

