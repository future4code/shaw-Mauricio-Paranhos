import React from "react";
import styledComponents from "styled-components";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 1 - Dados Gerais</h1>
        <h2>1. Qual é o seu nome?</h2>
        <input type="text"></input>
        <h2>2. Qual é a sua idade?</h2>
        <input type="text"></input>
        <h2>1. Qual é o seu email?</h2>
        <input type="text"></input>
        <h2>1. Qual a sua escolaridade?</h2>
        <select>
          <option value="Ensino Médio incompleto">Ensino médio incompleto</option>
          <option value="Ensino Médio completo">Ensino médio completo</option>
          <option value="Ensino Superior incompleto">Ensino Superior incompleto</option>
          <option value="Ensino Superior completo">Ensino Superior completo</option>
        </select>
      </div>
    );
  }
}

export default Etapa1;
  