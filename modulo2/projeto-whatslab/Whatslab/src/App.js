import React from 'react';
import styled from 'styled-components';
import img from './img/Wallpaper.jpg';

const AppContainer = styled.div`
  border: 1px solid black;
  background-color: lightgreen;
  height: 99vh;
  width: 40vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const MensagensContainer = styled.div`
  background-image: url(${img});
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
`

const InputsContainer = styled.div`
  display: flex;
`

const NomeImput = styled.input`
  width: 100px;
`

const MensagemImput = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    mensagens: [],
    usuarioValue: '',
    mensagemValue: ''
  }

  onChangeUsuarioValue = (event) => {
    this.setState({usuarioValue: event.target.value})
  }

  onChangeMensagemValue = (event) => {
    this.setState({mensagemValue: event.target.value})
  }

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuarioValue,
      texto: this.state.mensagemValue
    }

    const novasmensagensArray = [novaMensagem, ...this.state.mensagens]

    this.setState({mensagens: novasmensagensArray})
  }

  render() {
    return (
      <AppContainer>
        <MensagensContainer>
          {this.state.mensagens.map((mensagem) => {
            return <p>
              <strong>{mensagem.usuario}</strong>: {mensagem.texto}
            </p>
          })}
        </MensagensContainer>
        <InputsContainer>
          <NomeImput
            onChange={this.onChangeUsuarioValue} 
            value={this.state.usuarioValue} 
            placeholder={'Nome'}
          />
          <MensagemImput
            onChange={this.onChangeMensagemValue} 
            value={this.state.mensagemValue} 
            placeholder={'Mensagem'}
          />
          <button onClick={this.enviarMensagem}>Enviar</button>
        </InputsContainer>
      </AppContainer>
    );
  }
}

export default App;