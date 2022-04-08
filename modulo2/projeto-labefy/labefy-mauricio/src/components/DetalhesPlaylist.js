import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardDetalhe = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: #1DB954;
    padding: 10px;
    margin: 10px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
`

export default class DetalhesPlaylist extends React.Component{
    
    state = {
        musicas: []
    }

    componentDidMount() {
        this.pegarDetalhes()
    }

    pegarDetalhes = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        axios.get(url, {
            headers: {
                Authorization: "mauricio-paranhos-shaw"
            }
        })
        .then((res) => {
            this.setState({musicas: res.data.result.tracks})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }

    render(){
        const detalhaPlaylists = this.state.musicas.map((tracks) => {
            return <CardDetalhe key={tracks.id}>
                <p>Nome da música:{tracks.name}</p>
                <p>Artista:{tracks.artist}</p>
                <p>Link:{tracks.url}</p>
                </CardDetalhe>
        })

        return(
            <div>
                <button onClick={this.props.irParaPlaylists}>Voltar para Playlists</button>
                <h1>Lista de Músicas</h1>
                <h3>{detalhaPlaylists}</h3>
            </div>
        )
    }
}