import express from "express"
import cors from "cors"
import { afazeres } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

type afazer = {
  userId: string,
  id: string,
  title: string,
  completed: boolean
}

app.get('/afazeres', (req, res) => {

  const dos = afazeres.map((afazer) => {
      return afazer
  }).flat(1)

  res.send(dos)
});

app.get("/afazeres/:completed", (req, res) => {          
  const completado = req.params.completed

  const userCompleted = afazeres.map((afazer) => {
    return afazer.completed === completado
  })

res.send(userCompleted)
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})