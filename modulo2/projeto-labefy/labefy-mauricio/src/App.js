import React from "react"
import TelaCadastro from "./components/TelaCadastro.js"
import TelaPlaylists from "./components/TelaPlaylists"
import DetalhesPlaylist from "./components/DetalhesPlaylist.js"
import styled from "styled-components"

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  border-radius: 7px;
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
    playlistClicada: ""
  }

  vaiParaDetalhes = (id) => {
    this.setState({telaAtual:"detalhes", playlistClicada: id})
  }

 
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro />
      case "playlist":
        return <TelaPlaylists vaiParaDetalhes={this.vaiParaDetalhes}/>
      case "detalhes":
        return <DetalhesPlaylist id={this.state.playlistClicada}/>
      default:
        return <TelaCadastro />
    }
  }
  
  mudaTela = (nomeTela) => { 
    this.setState({telaAtual: nomeTela})
  }
  
  render() {
    return (
      
      <div>
        <MenuContainer>
          <Button onClick={() => this.mudaTela("cadastro")}>Cadastro</Button>&nbsp;
          <Button onClick={() => this.mudaTela("playlist")}>Playlist</Button>
        </MenuContainer>
        {this.escolheTela()}
      </div>
    )
  }
}
