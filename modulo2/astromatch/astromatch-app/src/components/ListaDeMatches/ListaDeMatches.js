import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemListaDeMatches from './ItemListaDeMatches'
import styled from 'styled-components'

const ContainerListaDeMatches = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  padding: 8px;
`

function ListaDeMatches() {
  
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauricio/matches')
    .then(response => {
      setMatches(response.data.matches)
    })
  }, [])

  return (
    <ContainerListaDeMatches>
      {matches.map((perfil) => {
        return <ItemListaDeMatches key={perfil.id} perfil={perfil}/>
      })}
    </ContainerListaDeMatches>
  )
}

export default ListaDeMatches