import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goBack, goApplicationFormPage } from '../routes/coordinator'
import { TripsCard } from '../components/TripsCard'
import styled from 'styled-components'

const ListTripsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Botoes = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
`

const Card = styled.div`
  border: 1px solid black;
  margin-bottom: 3%;
  width: 600px;
  padding: 1%;
`

export const ListTripsPage = () => {
  const navigate = useNavigate()


  return (
    <ListTripsPageContainer>
      <Botoes>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToHomePage(navigate)}>Home</button>
        <button onClick={() => goApplicationFormPage(navigate)}>Inscrever-se</button>
      </Botoes>
      <h1>Lista de Viagens</h1>
      <div>
        <TripsCard />
        {/* <Card>
          <p><strong>Nome: </strong> Fuja para Plutão</p>
          <p><strong>Descrição: </strong> Fuja de tudo e de todos que te aborrecem para o planeta mais distante do sistema solar</p>
          <p><strong>Planeta: </strong> Plutão</p>
          <p><strong>Duração: </strong> 10000</p>
          <p><strong>Data: </strong> 2200-01-01</p>
        </Card>
        <Card>
          <p><strong>Nome: </strong> Fuja para Plutão</p>
          <p><strong>Descrição: </strong> Fuja de tudo e de todos que te aborrecem para o planeta mais distante do sistema solar</p>
          <p><strong>Planeta: </strong> Plutão</p>
          <p><strong>Duração: </strong> 10000</p>
          <p><strong>Data: </strong> 2200-01-01</p>
        </Card>
        <Card>
          <p><strong>Nome: </strong> Fuja para Plutão</p>
          <p><strong>Descrição: </strong> Fuja de tudo e de todos que te aborrecem para o planeta mais distante do sistema solar</p>
          <p><strong>Planeta: </strong> Plutão</p>
          <p><strong>Duração: </strong> 10000</p>
          <p><strong>Data: </strong> 2200-01-01</p>
        </Card> */}
      </div>
    </ListTripsPageContainer>
  )
}
