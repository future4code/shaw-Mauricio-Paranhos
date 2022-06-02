import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goBack } from '../routes/coordinator'
import styled from 'styled-components'

const TripDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Detalhes = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-bottom: 3%;
`

const CandidatoCard = styled.div`
  border: 1px solid black;
  margin-bottom: 3%;
  width: 600px;
  padding: 1%;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const BotoesCandidato = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3%;
`

const ListaCandidatos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
`

export const TripDetailsPage = () => {
  const navigate = useNavigate()

  return (
    <TripDetailsPageContainer>
      <h1>Detalhes</h1>
      <Detalhes>
        <h3>Fuja para Plutão</h3>
        <p><strong>Nome: </strong>Fuja para Plutão</p>
        <p><strong>Descrição: </strong>Fuja de tudo e de todos que te aborrecem para o planeta mais distante do sistema solar</p>
        <p><strong>Planeta: </strong>Plutão</p>
        <p><strong>Duração: </strong>10000</p>
        <p><strong>Data: </strong>2200-01-01</p><br/>
        <Botoes>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
          <button onClick={() => goBack(navigate)}>Voltar</button>
        </Botoes>
      </Detalhes>
      <h3>Candidatos Pendentes</h3>
      <CandidatoCard>
        <p><strong>Nome: </strong>Garoto Trevoso</p>
        <p><strong>Profissão: </strong>Programador</p>
        <p><strong>Idade: </strong>18</p>
        <p><strong>País: </strong>Brazil</p>
        <p><strong>Texto de Candidatura: </strong>Euuuuuuu nãoooooooooooo aquennnnnnnnnnnntooooo maissssssssssss, preciso ir embora daqui...</p><br/>
        <BotoesCandidato>
          <button >Aprovar</button>
          <button >Reprovar</button>
        </BotoesCandidato>
      </CandidatoCard>
      <ListaCandidatos>
        <h3>Candidatos Aprovados</h3>
          <li>Maria da Silva</li>
      </ListaCandidatos>
    </TripDetailsPageContainer>
  )
}
