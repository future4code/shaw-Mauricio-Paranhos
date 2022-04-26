import React from 'react'
import styled from 'styled-components'

const ContainerBotoesDeEscolha = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
`
const BotaoDeEscolha = styled.button`
  width: 40px;
  height: 30px;
  border-radius: 5px;
  font-size: larger;
`

function BotoesDeEscolha(props) {

  return (
    <ContainerBotoesDeEscolha>
      <BotaoDeEscolha onClick={props.onClickNao}>X</BotaoDeEscolha>
      <BotaoDeEscolha onClick={props.onClickSim}>♥</BotaoDeEscolha>
    </ContainerBotoesDeEscolha>
  )
}

export default BotoesDeEscolha