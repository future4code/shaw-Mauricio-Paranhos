import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "mauricio-paranhos-shaw"
  }
};

export default class App extends React.Component {
  
  state = {
    usuarios: [],
    inputName:  ""
  };
  
  componentDidMount() {
    //Pegar todas os usuário
    this.getAllUsers();
  }
  getAllUsers() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    //Aqui é onde a função de get é chamada
    //No get passamos a url, e o headers
    axios
      .get(url, headers)
      .then((res) => {
        //Caso de tudo certo guarde os usuários no estado
        console.log(res.data);
        this.setState({
          usuarios: res.data.name
        });
      })
      .catch((err) => {
        //Caso de erro exiba-o no console
        // console.log(err.response.data);
      });
  }
  
  render() {
    const componentsUsuarios = this.state.usuarios.map((usuario) => {
      return <li key={usuario.id}>{usuario.name}</li>;
    });
    return (
      <div>
        <ul>{componentsUsuarios}</ul>
      </div>
    );
  }
}
