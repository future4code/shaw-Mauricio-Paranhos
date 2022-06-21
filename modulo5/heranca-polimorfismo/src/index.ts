import { Customer } from "./Customers";
import { User } from "./Users";

// Exercício 1
const usuario = new User("1", "mm@gmail.com", "Mauricio", "senha123")

console.log(usuario)
// a) Sim, é possível imprimir a senha.

// b) A menssagem foi impressa uma vez.

// Exercício 2
const cliente = new Customer("2", "jose@gmail.com", "José", "senha456", "132321456654")

console.log(cliente)

// a) Foi impressa uma vez.
// b) Foi impressa uma vez.

console.log(cliente.getCreditCard)