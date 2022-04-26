import React from 'react'
import styled from 'styled-components'
import BarraApp from '../BarraApp/BarraApp'
import EscolhePerfil from '../EscolhePerfil/EscolhePerfil'
import ListaDeMatchs from '../ListaDeMatchs/ListaDeMatchs'

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 2px;
  width: 400px;
  height: 600px;
  margin: 5%;
`

function Home() {
  return (
    <ContainerHome>
    <BarraApp/>
    {/* <EscolhePerfil/> */}
    <ListaDeMatchs/>
    </ContainerHome>
  )
}

export default Home