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
  let numerosPares = array3.reduce(function(total, item) {
    if(item % 2 === 0) {
    total.push(item)
    }
    return total
    }, [])
  return numerosPares
}

// EXERCÍCIO 05
let array4 = [1, 2, 3, 4, 5, 6]
function retornaNumerosParesElevadosADois(array4) {
  // let numerosPares2 = array4.reduce(function(total2, item2) {
  //   if(item2 % 2 === 0) {
  //     total2.push(item2)
  //   }
  //   return total2
  //   }, [])
  // let elevados = numerosPares2.filter((item3, total3) => {
  //   total3 = item3 * item3
    
  // })
  // return elevados
}

// EXERCÍCIO 
let array5 = [1, 5, 3, 7, 5, 2]
function retornaMaiorNumero(array5) {
  let i = 0
  let maiorNumero = -Infinity
  while (i < array5.length) {
    if (array5[i] > maiorNumero) {
      maiorNumero = array5[i]
    }
    i++
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const numeros = {}
  function maior(num1, num2) {
    if (num1 > num2) {
      return num1
    } else {
      return num2
    }
  }
  function divisivel(num1, num2) {
    if (num1 > num2) {
      if (num1 % num2 == 0) {
        return true 
      }
      return false
    } else {
      if (num2 % num1 == 0) {
        return true
      }
      return false
    }
  }
  function dife(num1, num2) {
    if (num1 > num2) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }
  numeros.maiorNumero = maior(num1, num2)
  numeros.maiorDivisivelPorMenor = divisivel(num1, num2)
  numeros.diferenca = dife(num1, num2)
  return numeros
}

// EXERCÍCIO 08
let array6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function retornaNPrimeirosPares(n) {
  let numerosPares2 = array6.reduce(function(total4, item4) {
    if(item4 % 2 === 0) {
    total4.push(item4)
    }
    return total4
    }, [])
  return numerosPares2.splice(n, numerosPares2.length())

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