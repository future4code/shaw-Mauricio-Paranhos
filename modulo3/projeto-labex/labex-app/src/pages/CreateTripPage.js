import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goBack } from '../routes/coordinator'
import styled from 'styled-components'

const CreateTripPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const CriarForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
`

export const CreateTripPage = () => {
  const navigate = useNavigate()

  return (
    <CreateTripPageContainer>
      <h1>Criar Viagem</h1>
        <CriarForm>
          <input placeholder='Nome' />
          <input placeholder='Escolha um planeta' />
          <input placeholder='dd/mm/aaaa' />
          <input placeholder='Descrição' />
          <input placeholder='Duração em dias' />
          <Botoes>
            <button onClick={() => goToHomePage(navigate)}>Home</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Criar</button>
          </Botoes>
        </CriarForm>
    </CreateTripPageContainer>
  )
}
