import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({ //estabelece conexão com banco de dados
   client: "mysql",
   connection: {
      host: "35.226.146.116",
      port: 3306,
      user: "21815125-paranhos",
      password: "6DVdgyxO5B9wY4d5wuE/",
      database: "shaw-21815125-paranhos",
      multipleStatements: true
   },
});

export default connection