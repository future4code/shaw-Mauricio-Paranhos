import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {          
    res.send("Hello from Express")
    console.log("Hello")
})

app.listen(3003, () => {
    console.log("Servidor funcionando em http://localhost:3003.")
})

type usuario = {
    id: string | number
    name: string
    phone: number
    email: string
    website:string
}