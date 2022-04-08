import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardPlaylist = styled.div`
    display: flex;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    justify-content: space-between;
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
            this.setState({playlists: res.data})
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
        const listaplaylists = this.state.playlists.map((list) => {
            return <CardPlaylist key={list.id}>
                {list.name}
                <button onClick={() => this.deletarPlaylist(list.id)}>X</button>
                </CardPlaylist>
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Playlists</h2>
                {listaplaylists}
            </div>
        )
    }
}