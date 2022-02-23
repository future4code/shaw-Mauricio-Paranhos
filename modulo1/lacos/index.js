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



