import React from 'react'
import styled from 'styled-components'

const ContainerBotoesDeEscolha = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8%;
`

function BotoesDeEscolha() {
  return (
    <ContainerBotoesDeEscolha>
      <button>Não</button>
      <button>Sim</button>
    </ContainerBotoesDeEscolha>
  )
}

export default BotoesDeEscolha