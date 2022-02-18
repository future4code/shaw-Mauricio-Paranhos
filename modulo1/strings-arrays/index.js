//Exercícios de interpretação de código

/*

1.  Indique todas as mensagens impressas no console:
a.  undefined - Não foi daclarado tipo
b.  null - Foi declarado como nulo
c.  11 - Número de itens na lista
d.  3 - Pediu a posição 0 da lista que é o número 3
e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] - Trocou o número da posição 0+1(posição 1) pelo número 19
f.  9 - Pediu a posição [0+6] 6 da lista que é o número 9

2. Leia o código abaixo com atenção
Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

SUBI NUM ÔNIBUS EM MIRROCOS (27)

*/

//Exercícios de escrita de código

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima 
// no console a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")

console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + " !")

const frase = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`
console.log(frase)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
// Em seguida, siga os passos:

// a) Imprima no console o array completo:

const comidas = ["churrasco", "carreteiro", "spaguete", "lasanha", "strogonofe"]

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra:

console.log(comidas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.
//Imprima no consolea nova lista:

const comidaUser = prompt("Qual a sua comida favorita?")
comidas[4] = comidaUser
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

//3. Faça um programa, seguindo os passos:


// a)
const listaDeTarefas = []
// b)
const tarefa0 = prompt("Digite a primeira tarefa do seu dia")
listaDeTarefas[0] = tarefa0
const tarefa1 = prompt("Digite a segunda tarefa do seu dia")
listaDeTarefas[1] = tarefa1
const tarefa2 = prompt("Digite a terceira tarefa do seu dia")
listaDeTarefas[2] = tarefa2
// c)
console.log(listaDeTarefas)
// d)
let tarefaFeita = Number(prompt("Digite o número correspondente a tarefe feita 0, 1 ou 2"))
listaDeTarefas.splice(tarefaFeita, 1)
console.log(listaDeTarefas)
