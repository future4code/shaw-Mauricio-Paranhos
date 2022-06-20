import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

//####

// a) O construtor serve para criar e inicializar um objeto criado em uma classe.
//    Para chamá-lo nesse caso seria const userAccount = new UserAccount("123456789-00", "Paulo", 32)
// b) Foi impressa uma vez.
// c) Somente de dentro da classe em si, utilizando um método público que nos dê acesso.

type Transaction = {
   description: string,
   value: number,
   date: string
 }

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
 
 }

 const userAccount = new UserAccount("123456789-00", "Paulo", 32)

//####

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});