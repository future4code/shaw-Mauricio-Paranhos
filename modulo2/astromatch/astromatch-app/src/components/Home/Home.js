import React, { useState } from 'react'
import styled from 'styled-components'
import BarraApp from '../BarraApp/BarraApp'
import EscolhePerfil from '../EscolhePerfil/EscolhePerfil'
import ListaDeMatches from '../ListaDeMatches/ListaDeMatches'

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #86043e;
  border: 1px solid black;
  border-radius: 10px;
  width: 400px;
  height: 600px;
  margin: 5%;
`

function Home() {
  const [selecionaPagina, setSelecionaPagina] = useState('escolhe-perfil ')

  const paginaSelecionada = () =>{
    switch(selecionaPagina) {
      case 'escolhe-perfil':
        return <EscolhePerfil/>
      case 'lista-de-matches':
        return <ListaDeMatches/>
      default:
        return <EscolhePerfil/>
    }
  }

  const vaiParaEscolherPerfil = () => {
    setSelecionaPagina('escolhe-perfil')
  }

  const vaiParaListaDeMatches = () => {
    setSelecionaPagina('lista-de-matches')
  }

  return (
    <ContainerHome>
    <BarraApp 
      vaiParaEscolherPerfil={vaiParaEscolherPerfil}
      vaiParaListaDeMatches={vaiParaListaDeMatches}
    />
    {paginaSelecionada()}
    </ContainerHome>
  )
}

export default Home