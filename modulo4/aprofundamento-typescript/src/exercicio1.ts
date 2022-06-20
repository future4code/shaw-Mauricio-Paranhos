//a)

// let minhaString:string = 2
//não aceita valor numérico

// b)

let meuNumero: number | string = 36

// c)

enum cores {
    vermelho="vermelho",
    laranja="laranja",
    amarelo="amarelo",
    verde="verde",
    azul="azul",
    anil="anil",
    violeta="violeta"
}

type Pessoa = {
    nome: string
    idade: number
    corFavorita: cores
}

const pessoa1: Pessoa = {
    nome: "José",
    idade: 42,
    corFavorita: cores.azul
}

const pessoa2: Pessoa = {
    nome: "João",
    idade: 18,
    corFavorita: cores.anil
}

const pessoa3: Pessoa = {
    nome: "Maria",
    idade: 25,
    corFavorita: cores.verde
}

