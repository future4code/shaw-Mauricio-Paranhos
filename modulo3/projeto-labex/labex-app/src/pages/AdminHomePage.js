import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goBack, goToCreateTripPage, goToTripDetailsPage, goToLoginPage } from '../routes/coordinator'
import styled from 'styled-components'

export const AdminHomePage = () => {
  const navigate = useNavigate()

  const AdminHomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `

  const BotoesMenu = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-around;
    align-items: center;
  `

  const TripCard = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 1%;
    width: 600px;
  `
  const Botoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
  `

  return (
    <AdminHomePageContainer>
      <h1>Painel Administrativo</h1>
      <BotoesMenu>
        <button onClick={() => goToHomePage(navigate)}>Home</button>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button onClick={() => goToLoginPage(navigate)}>Logout</button>
      </BotoesMenu>
      
      <div>
        <TripCard>
          <p>Fuja para Plutão</p>
          <Botoes>
            <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes</button>
            <button >Deletar</button>
          </Botoes>
        </TripCard>
        <TripCard>
          <p>Doidera</p>
          <Botoes>
            <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes</button>
            <button >Deletar</button>
          </Botoes>
        </TripCard>
        <TripCard>
          <p>Planeta Vermelho</p>
          <Botoes>
            <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes</button>
            <button >Deletar</button>
          </Botoes>
        </TripCard>
      </div>
    </AdminHomePageContainer>
  )
}
