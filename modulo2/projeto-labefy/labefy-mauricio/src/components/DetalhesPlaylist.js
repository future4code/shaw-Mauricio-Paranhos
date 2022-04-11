import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardTracks = styled.div`
    display: flex;
    border: 1px solid black;
    background-color: #1DB954;
    padding: 10px;
    margin: 10px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
`

export default class DetalhesPlaylist extends React.Component {
    state = {
        musicas: []
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


    render(){

        const componentTracks = 
        this.state.musicas.map((musica) => {
            return <CardTracks key={musica.id}>
                <div>
                    <li>{musica.artist}</li>
                    <li>{musica.name}</li>
                    <li>{musica.url}</li>
                </div>
            </CardTracks>
        })
        return(
            <div>
                <h1>Lista de Músicas</h1>
                <ul>{componentTracks}</ul>
            </div>
        )
    }
}