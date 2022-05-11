import React from 'react'
import styled from 'styled-components'

const ContainerCardPerfil = styled.div`
  margin: 16px;
  border: 1px solid black;
  background-color: #bb3c6a;
`

const ImgDiv = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgPerfil = styled.img`
  width: 100%;
  display: block;
  max-height: 320px;
  width: 250px;
`
const InformacoesPerfil = styled.div`
  padding: 0 16px;
`

function CardPerfil(props) {
  return (
    <ContainerCardPerfil>
      <ImgDiv>
        <ImgPerfil src={props.perfil.photo}/>
      </ImgDiv>
      <InformacoesPerfil>
        <p><strong>{props.perfil.name}, {props.perfil.age}</strong></p>
        <p>{props.perfil.bio}</p>
      </InformacoesPerfil>
    </ContainerCardPerfil>
  )
}

export default CardPerfil