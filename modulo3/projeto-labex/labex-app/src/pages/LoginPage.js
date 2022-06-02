import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goBack } from '../routes/coordinator'
import styled from 'styled-components'

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Dados = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
`

export const LoginPage = () => {
  const navigate = useNavigate()
  
  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <Dados>
        <input placeholder='E-mail'></input>
        <input placeholder='Senha'></input>
        <Botoes>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
          <button onClick={() => goBack(navigate)}>Voltar</button>
          <button>Entrar</button>
        </Botoes>
      </Dados>
    </LoginPageContainer>
  )
}
