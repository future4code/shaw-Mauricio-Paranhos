import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
        break;
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
        break;
      default:
        return <div>Erro! Página não encontrada.</div>
        break;
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }
  
  render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
