import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToAdminHomePage } from '../routes/coordinator'
import styled from 'styled-components'

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const Botoes = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
`

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <HomePageContainer>
      <h1>LabeX</h1>
      <Botoes>
        <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
        <button onClick={() => goToAdminHomePage(navigate)}>Área de Admin</button>
      </Botoes>
    </HomePageContainer>
  )
}
