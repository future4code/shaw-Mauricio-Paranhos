import express from "express"
import cors from "cors"
import {users} from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {          
    res.send("Hello from Express")
    console.log("Hello world")
})

type usuario = {
    id: string
    name: string
    email: string
    phone: string
    website:string
}

type posts = {
    userId:string
    id: string
    title: string
    body: string
}

app.get('/users', (req, res) => {

    const usuarios = users.map((user) => {
        return user;
    })

    const resultado = users.flat(1)

    res.send(resultado);
});

app.get('/post', (req, res) => {

    const postagens = users.map((user) => {
        return user.posts
    }).flat(1)

    res.send(postagens);
});

app.get('/post/:userId', (req, res) => {

    const userId = req.params.userId

    const userPost = users.map((user) => {
        return user.id === userId
    })

    res.send(userPost)
})

    // peguei os posts

    // const tracks = playlists.map((playlist) => {
    //     return playlist.tracks
    // }).flat(1)

    // peguei as tracks das playlists e juntei em um array

    // res.send(postagens)
// })

app.listen(3003, () => {
    console.log("Servidor tá rodando!")
})