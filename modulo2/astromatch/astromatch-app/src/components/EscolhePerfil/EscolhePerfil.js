import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardPerfil from '../EscolhePerfil/CardPerfil'
import BotoesDeEscolha from '../EscolhePerfil/BotoesDeEscolha'
import styled from 'styled-components'

const ContainerEscolhePerfil = styled.div`
  background-color: #86043e;
`

function EscolhePerfil() {

  const [perfilParaEscolher, setPerfilParaEscolher] = useState({})

  const getPerfilParaEscolher = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauricio/person')
    .then(response => {
    setPerfilParaEscolher(response.data.profile)
    })
  }

  useEffect(() => {
    getPerfilParaEscolher()
  }, [])

  const onClickNao = () => {
    const body = {
      choice: false,
      id: perfilParaEscolher.id
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauricio/choose-person', body)
    .then(response => {
      getPerfilParaEscolher()
    })
  }

  const onClickSim = () => {
    const body = {
      choice: true,
      id: perfilParaEscolher.id
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauricio/choose-person', body)
    .then(response => {
      getPerfilParaEscolher()
    })
  }

  return (
    <ContainerEscolhePerfil>
      <CardPerfil perfil={perfilParaEscolher}/>
      <BotoesDeEscolha 
      onClickNao={onClickNao}
      onClickSim={onClickSim}
      />
    </ContainerEscolhePerfil>
  )
}

export default EscolhePerfil