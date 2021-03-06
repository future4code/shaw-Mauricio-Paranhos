import React from "react"
import axios from "axios"
import styled from "styled-components"

const CadastrContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
  border-radius: 7px;
`

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
            <CadastrContainer>
                <h2>Cadastro</h2>
                <div>
                    <label>Nova playlist:</label>&nbsp;
                    <input 
                        placeholder={"Digite o nome"}
                        value={this.state.nome}
                        onChange={this.handleNome}
                    />
                </div>&nbsp;
                <Button type="submit" onClick={this.fazerCadastro}>Criar Playlist</Button>
            </CadastrContainer>
        )
    }
}