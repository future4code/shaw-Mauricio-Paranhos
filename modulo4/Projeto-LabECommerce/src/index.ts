import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import { AddressInfo } from "net";
import getAllUsers from "./endpoints/getAllUsers";
import createUser from "./endpoints/createUser";
import deleteUser from "./endpoints/deleteUser";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/users", getAllUsers)
app.post("/users/create", createUser)
app.delete("/users/:id", deleteUser)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});