import React from "react"
import axios, { Axios } from "axios"
import styled from "styled-components"

const CardTracks = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #1DB954;
    list-style: none;
    padding: 10px;
    margin: 10px;
    width: 25vw;
    height: 15vh;
    align-items: center;
    justify-content: space-between;
`
const DetalhesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const NovaMusicaComtainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Button = styled.button`
    display: flex;
    border-radius: 7px;
`

export default class DetalhesPlaylist extends React.Component {
    state = {
        musicas: [],
        trackName: "",
        artist: "",
        url: ""
    }

    componentDidMount(){
        this.getTracks()
    }

    getTracks = () => {
        const playlistId = this.props.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "mauricio-paranhos-shaw"
            }
        })
        .then((res) => this.setState({musicas: res.data.result.tracks}))
        .catch((err) => alert(err.response))
    }

    removeTrack = (id) => {
        const playlistId = this.props.id
        const trackId = id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`
        axios.delete(url, {
            headers: {
                Authorization: "mauricio-paranhos-shaw"
            }
        })
        .then(() => {this.getTracks()}) 
        .catch((err) => alert(err.response))
    }

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    adicionarMusica = () => {
        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }
        const playlistId = this.props.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        axios.post(url, body, {
            headers: {
                Authorization: "mauricio-paranhos-shaw"
            }
        })
        .then(() => {
            this.getTracks()
            this.setState({trackName: "", artist: "", url: ""})
        })
        .catch(err => {
            alert("Algo deu errado!")
        })

    }

    render(){

        const componentTracks = 
        this.state.musicas.map((musica) => {
            return <CardTracks key={musica.id}>
                <div>
                    <li><strong>Nome da Música: </strong><i>{musica.name}</i></li>
                    <li><strong>Artista: </strong><i>{musica.artist}</i></li>&nbsp;
                    <li>
                        <audio src={musica.url} controls />
                    </li>&nbsp;
                    <Button onClick={() => this.removeTrack(musica.id)}>Excluir</Button>
                </div>
            </CardTracks>
        })
        return(
            <DetalhesContainer>
                <h1>Lista de Músicas</h1>
                <h3>Adicionar nova música:</h3>
                <NovaMusicaComtainer>
                    <div>
                        <label><strong>Nome da música: </strong></label>
                        <input 
                        placeholder="Nome da música" 
                        name="trackName"
                        value={this.state.trackName}
                        onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label><strong>Artista: </strong></label>
                        <input 
                        placeholder="Artista" 
                        name="artist"
                        value={this.state.artist}
                        onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label><strong>Link da música: </strong></label>
                        <input 
                        placeholder="Link da música" 
                        name="url"
                        value={this.state.url}
                        onChange={this.changeInputValues}
                        />
                    </div>
                    <Button type="submit" onClick={this.adicionarMusica}>Adicionar</Button>
                </NovaMusicaComtainer>&nbsp;
                <ul>{componentTracks}</ul>
            </DetalhesContainer>
        )
    }
}