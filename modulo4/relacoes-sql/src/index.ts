import express from "express"
import cors from "cors"

const app = express()

app.use(express())
app.use(cors())

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})