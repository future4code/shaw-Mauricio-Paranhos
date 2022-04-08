import React from "react"
import axios from "axios"

export default class TelaCadastro extends React.Component {
    state = {
        nome: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }
        
        axios.post(url, body, {
            headers: {
                Authorization: "mauricio-paranhos-shaw"
            }
        })
        .then((res) => {
            alert("Playlist criada com sucesso!")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Playlists</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <button onClick={this.fazerCadastro}>Criar Playlist</button>
            </div>
        )
    }
}