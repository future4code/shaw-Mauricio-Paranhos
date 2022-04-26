import React from 'react'
import styled from 'styled-components'

const ContainerBarra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-bottom: 1px solid gray;
`

function BarraApp() {
  return (
    <ContainerBarra>
      <button>Escolher</button>
      <h2>Astromatch</h2>
      <button>Lista</button>
    </ContainerBarra>
  )
}

export default BarraApp