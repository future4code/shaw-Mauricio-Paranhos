
const tarefas = [
  "estudar",
  "trabalhar",
  "ler livro"
]

const tarefa = process.argv[2]


if (!tarefa) {
  return console.log(`É preciso adicionar pelo menos uma tarefa`)
}

tarefas.push(tarefa)


console.log(`Tarefa adicionada com sucesso: ${tarefa}`)

console.log("Tarefas:", tarefas.toString())
