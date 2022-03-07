// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
let array = [3, 2, 1, 4, 7]
function retornaTamanhoArray(array) {
   let tamanhoArray = array.length
   return tamanhoArray
}

// EXERCÍCIO 02
let array1 = [8, 23, 16, 10]
function retornaArrayInvertido(array1) {
  let arrayInvertido = array1.reverse()
  return arrayInvertido
}

// EXERCÍCIO 03
let array2 = [3, 2, 1, 4, 7]
function retornaArrayOrdenado(array2) {
    function compararNumeros(a, b) {
        return a - b;
      }
  let arrayOrdenado = array2.sort(compararNumeros)
  return arrayOrdenado
}

// EXERCÍCIO 04
let array3 = [1, 2, 3, 4, 5, 6]
function retornaNumerosPares(array3) {
  array3.filter((numero, indice, array) => {
      if (numero %2 === 0) {
          let arrayNumerosPares = []
          arrayNumerosPares.push(numero)
      }
      return arrayNumerosPares
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}