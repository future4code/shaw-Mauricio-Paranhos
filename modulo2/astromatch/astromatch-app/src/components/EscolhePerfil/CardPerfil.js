import React from 'react'
import styled from 'styled-components'

const ContainerCardPerfil = styled.div`
  margin: 16px;
  border: 1px solid black;
  background-color: beige;
`
const ImgPerfil = styled.img`
  width: 100%;
`
const InformacoesPerfil = styled.div`
  padding: 0 16px;
`

function CardPerfil() {
  return (
    <ContainerCardPerfil>
      <ImgPerfil src={'https://picsum.photos/300/300'}/>
      <InformacoesPerfil>
      <p>Nome da pessoa, 41</p>
      <p>Descrição da pessoa</p>
      </InformacoesPerfil>
    </ContainerCardPerfil>
  )
}

export default CardPerfil