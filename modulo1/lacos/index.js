// Exercícios de interpretação de código

// 1.

// O código esta incrementando "+1" a variável "i" e somando esse 
// valor a variável "valor" enquanto "i" seja menor do que 5.
// somente então imprimi o valor da variável "valor".

// 2. 

// Serão impressos todos os número maiores que 18.
//  19, 21, 23, 25, 27, 30

// 3. 

// Resultado:
// *
// **
// ***
// ****

// Exercícios de escrita de código

// 1. 

let bichosDeEstimacao = Number(prompt("Digiote quanto animais de estimacao você tem"))

// a) b) e c)

if (bichosDeEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")    
} else {
    let qtdNomes = bichosDeEstimacao
    let arrayNomes = []
    for (let index = 0; index < qtdNomes; index++) {
        arrayNomes.push(prompt("Digite o nome do pet"))
    }
console.log(arrayNomes)
}

//2.  

let arrayOriginal = [8, 12, 37, 15, 50, 20, 47, 158, 199, 202]

//a) 

console.log(arrayOriginal)

// b) 

for (let index = 0; index < arrayOriginal.length; index++) {
    console.log(arrayOriginal[index] / 10)    
}

// c) 
let arrayNovo = []
for (let index = 0; index < arrayOriginal.length; index++) {
    if (arrayOriginal[index] % 2 == 0) {
        arrayNovo.push(arrayOriginal[index])
    }
}
console.log(arrayNovo)

// d) 

let i = 0
for (let numero of arrayOriginal){
    console.log("O elemento do índex", i,"é:", numero);
    i = i+1
}

// e) 

let valorMaximo = 10
for (let numero of arrayOriginal) {
    if (valorMaximo < numero) {
        valorMaximo = numero
    }
}

let valorMinimo = 16
for (let numero of arrayOriginal) {
    if (valorMinimo > numero) {
        valorMinimo = numero
    }
}

console.log("O maior número é", valorMaximo, "e o menor número é", valorMinimo)
