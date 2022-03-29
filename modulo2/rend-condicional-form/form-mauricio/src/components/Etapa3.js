import React from "react";
import styledComponents from "styled-components";

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 3 - Informações Gerais de Ensino</h1>
        <h2>5. Por que você não terminou o curso de graduação?</h2>
        <input type="text"></input>
        <h2>6. Você fez algum curso complementar?</h2>
        <select>
          <option value="Nenhum">Nenhum</option>
          <option value="Curso Técnico">Curso Técnico</option>
          <option value="Curso de Inglês">Curso de Inglês</option>
        </select>
      </div>
    );
  }
}  

  export default Etapa3;
  