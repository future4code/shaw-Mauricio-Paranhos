import React from "react";
import TelaCadastro from "./components/TelaCadastro.js";
import TelaPlaylists from "./components/TelaPlaylists";
import DetalhesPlaylist from "./components/DetalhesPlaylist.js";

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
        <button onClick={() => this.mudaTela("cadastro")}>Cadastro</button>
        <button onClick={() => this.mudaTela("playlist")}>Playlist</button>
        {this.escolheTela()}
      </div>
    )
  }
}
