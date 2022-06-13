import express from "express"
import cors from "cors"
import createUser from "./endpoints/createUser"
import getUserById from "./endpoints/getUserById"
import editUser from "./endpoints/editUser"
import createTask from "./endpoints/createTask"
import getTaskById from "./endpoints/getTaskById"

const app = express()

app.use(express.json())
app.use(cors())

app.put('/user',createUser)
app.get('/user/:id',getUserById)
app.post('/user/edit/:id',editUser)
app.put('/task',createTask)
app.get('/task/:id',getTaskById)

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})