// Exercícios de interpretação de código

// 1. 

// a) 

// Vai ser impresso: cada item do array um por vez;
// nome: "Amanda Rangel", apelido: "Mandi"
// nome: "Laís Petra", apelido: "Laura"
// nome: "Letícia Chijo", apelido: "Chijo"

// 2. 

// a) 

// Vai ser imporesso: 
// Amanda Rangel, Laís Petra, Letícia Chijo
// O "console.log" só chamou a variável/função "novoArrayB" que retornou somente
// o nome dos itens do array original. 

// 3. 

// a) 

// Vai ser impresso: Todos os itens que tiverem apelidos diferentes de "Chijo"; 
// nome: "Amanda Rangel", apelido: "Mandi"
// nome: "Laís Petra", apelido: "Laura"

// Exercícios de escrita de código

// 1. 


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) 

 const nomesArray = pets.map((item, index, array) => {
    return item.nome
 })

 console.log(nomesArray)

 // b) 

 const salsichaArray = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
 })

 console.log(salsichaArray)

 // c) 

 const poodleArray = pets.filter((item, index, array) => {
    return item.raca == "Poodle"
 })
 
 const racaPoodle = poodleArray
 const nomePoodle = racaPoodle.map((item, index, array) => {
     return item.nome
 })

 console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", nomePoodle, "!")