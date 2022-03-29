import React from "react";
import styledComponents from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";


class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        <Etapa1 />;
        break;
      case 2:
        <Etapa2/>;
        break;
      case 3:
        <Etapa3/>;
        break;
      default:
        <Final/>;
        break;
    }
  }

  render() {
    return (
          <div>
            {this.renderizaEtapa()}
            <button>Próxima Etapa</button>
          </div>
        );
  }
}

export default App;
