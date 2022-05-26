
const operacao = process.argv[2]

const primNum = Number(process.argv[3])

const segunNum = Number(process.argv[4])


let resultado = "Resultado: "

switch (operacao) {
  case "somar":
    resultado += primNum + segunNum
    break
  case "subtrair":
    resultado += primNum - segunNum
    break
  case "multiplicar":
    resultado += primNum * segunNum
    break
  case "dividir":
    resultado += (primNum / segunNum).toFixed(1)
    break
  default:
    resultado += "operação inválida"
}


console.log(resultado)
