//Exercícios de interpretação de código:

/*

1)
a. false
b. false
c. true
d. boolean

2)
Será impresso primeiroNumero ao lado de segundoNumero
pois todo retorno de um prompt é uma string a não ser
que se declare o contrário antes. Teria que se utilizar
o comando Number para solucionar.

    let primeiroNumero
    let segundoNumero

    primeiroNumero = Number(prompt("Digite um numero!"))
    segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

*/

//Exercícios de escrita de código:

//1. Faça um programa que:
/*
    let idadeUsuario = Number(prompt("Digite sua idade"))
    let idadeAmig = Number(prompt("Digite a idade do seu melhor amigo ou da sua melhor amiga"))
    let diferenca = idadeUsuario - idadeAmig
    let maior = idadeUsuario > idadeAmig

    console.log("Sua idade é maior do que a do seu melhor amigo/amiga?",maior )
    console.log("A diferença de idade de vocês é:", diferenca)
*/

//2.Faça um programa que:

/*
    let numeroPar = Number(prompt("Digite um número par"))

    console.log("Resto da divisão por 2", numeroPar %2)
*/


/*

c) O resto sempre é igual a zero
d) Quando inserido um número ímpar sempre teremos resto na divisão por 2

*/

//3. Faça um programa que pergunte ao usuário sua idade em anos.
//   Depois, imprima no console:

/*
    let idadeUsuario = Number(prompt("Digite sua idade"))
    let idadeMeses = Number(idadeUsuario * 12)
    let idadeDias = Number(idadeMeses * 30)
    let idadeHoras = Number(idadeDias * 24)

    console.log("Esta é sua idade meses:", idadeMeses)
    console.log("Esta é sua idade dias:", idadeDias)
    console.log("Esta é sua idade horas:", idadeHoras)
*/

//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as
//operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

/*
    let primeiro = Number(prompt("Digite o primeiro número"))
    let segundo = Number(prompt("Digite o segundo número"))
    let a = primeiro % segundo === 0
    let b = segundo % primeiro === 0

    console.log("O primeiro numero é maior que o segundo?", primeiro > segundo)
    console.log("O primeiro numero é igual ao segundo?", primeiro = segundo)
    console.log("O primeiro numero é divisível pelo segundo?", a)
    console.log("O segundo numero é divisível pelo primeiro?", b)
*/