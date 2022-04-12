import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardPlaylist = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #1DB954;
    padding: 10px;
    margin: 10px;
    width: 25vw;
    height: 5vh;
    align-items: center;
    justify-content: space-between;
`
const ListaDePlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
  border-radius: 7px;
`

export default class TelaPlaylists extends React.Component{
    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegarPlaylists()
    }

    pegarPlaylists = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "mauricio-paranhos-shaw"
            }
        })
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "mauricio-paranhos-shaw"
            }
        })
        .then((res) => {
            alert("Playlist deletada com sucesso!")
            this.pegarPlaylists()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")
        })
    }

    render(){
        const listaPlaylists = this.state.playlists.map((playlist) => {
            return <CardPlaylist key={playlist.id}>
                <strong>Nome:</strong> <i>{playlist.name}</i>
                <div>
                    <Button onClick={() => this.deletarPlaylist(playlist.id)}>Excluir</Button>&nbsp;
                    <Button onClick={() => this.props.vaiParaDetalhes(playlist.id)}>Detalhes</Button>
                </div>
                </CardPlaylist>
        })

        return(
            <ListaDePlaylistsContainer>
                <h1>Lista de Playlists</h1>
                <h3>{listaPlaylists}</h3>
            </ListaDePlaylistsContainer>
        )
    }
}