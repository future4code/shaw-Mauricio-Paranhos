import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goBack } from '../routes/coordinator'
import styled from 'styled-components'

const ApplicationFormPageCopntainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const InfoTrip = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-bottom: 3%;
  margin-top: 5%;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
  width: 300px;
`

export const ApplicationFormPage = () => {
  const navigate = useNavigate()

  return (
    <ApplicationFormPageCopntainer>
      <h1>Inscreva-se para uma viagem</h1>
      <InfoTrip>
        <input placeholder='Escolha uma Viagem'></input>
        <input placeholder='Nome'></input>
        <input placeholder='Idade'></input>
        <input placeholder='Texto da Candidatura'></input>
        <input placeholder='Profissão'></input>
        <input placeholder='Escolha um País'></input>
      </InfoTrip>
      <Botoes>
        <button onClick={() => goToHomePage(navigate)}>Home</button>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button>Enviar</button>
      </Botoes>
    </ApplicationFormPageCopntainer>
  )
}
