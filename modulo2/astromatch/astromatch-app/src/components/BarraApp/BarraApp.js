import React from 'react'
import styled from 'styled-components'
import logo from './astromatch_logo.png'

const ContainerBarra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-bottom: 1px solid gray;
`
const LogoContainer = styled.img`
  height: 60px;
  width: 190px;
`

function BarraApp(props) {
  return (
    <ContainerBarra>
      <button onClick={props.vaiParaEscolherPerfil}>Escolher</button>
      <LogoContainer src={logo} />
      <button onClick={props.vaiParaListaDeMatches}>Lista</button>
    </ContainerBarra>
  )
}

export default BarraApp