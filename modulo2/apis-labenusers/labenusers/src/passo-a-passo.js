import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "Janaylla-Firmino-SS"
  }
};

export default class App extends React.Component {
  //Estado com playlists e texto do input de name
  state = {
    playlists: [],
    inputName: ""
  };
  componentDidMount() {
    //Pegar todas as playlists
    this.getAllPlaylist();
  }
  getAllPlaylist() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    //Aqui é onde a função de get é chamada
    //No get passamos a url, e o headers
    axios
      .get(url, headers)
      .then((res) => {
        //Caso de tudo certo guarde as playlists no estado
        // console.log(res.data);
        this.setState({
          playlists: res.data.result.list
        });
      })
      .catch((err) => {
        //Caso de erro exiba-o no console
        console.log(err.response.data);
      });
  }
  postPlaylist = () => {
    //body é criado com o valor que tem no inputName
    const body = {
      name: this.state.inputName
    };
    const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    //Aqui é onde a função de post é chamada
    //No pot passamos a url, body, e o headers
    axios
      .post(url, body, headers)
      .then((res) => {
        //Pegartodas as playlists
        this.getAllPlaylist();
        //Deixar o texto do input com um valor vazio
        this.setState({
          inputName: ""
        });
      })
      .catch((err) => {
        //Alertar caso um erro aconteça
        alert(err.response.data.message);
      });
  };
  onChangeName = (e) => {
    this.setState({
      inputName: e.target.value
    });
  };
  render() {
    const componentsPlaylist = this.state.playlists.map((playlist) => {
      return <li key={playlist.id}>{playlist.name}</li>;
    });
    return (
      <div>
        <label>
          Nova playlist:
          <input value={this.state.inputName} onChange={this.onChangeName} />
        </label>
        <button onClick={this.postPlaylist}>Enviar</button>
        <ul>{componentsPlaylist}</ul>
      </div>
    );
  }
}

//Passo-a-passo de como criar função de pegar dados:
// crie a função acima do render
// dentro dela crie o axios.get, passe os paramentro, coloque o then e
// catch e verifique exibindo no console o resultado, consete os erros
// caso existam e quando você ver aos dados que você que passe para a
// proxima etapa
//Crir um estado para guardar o valor que você mostrar para o usuario.
//Coloque no estado os dados que você quer guardar
//Chame essa função no componentDidMount
// Faça um map, caso esses dados seja uma lista
//Chame no JSX

//Passo-a-passo de como criar função de enviar dados:
//Crie os inputs controlados do que você deseja enviar pelo body,
// crie a função acima do render
// crie o body, seguindo o mesmo modelo da documentação
// dentro dela crie o axios.post, passe os paramentro, coloque o then e
// catch e verifique exibindo no console o resultado, consete os erros
// caso existam e quando você ver aos dados que você que passe para a
// proxima etapa
//Chame a sua função em um botão de enviar
//E verifique se deu tudo certo
//Se sim, troque o console do erro por um alert e limpe o formulario
