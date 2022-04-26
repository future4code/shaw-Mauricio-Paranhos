import React from 'react'
import styled from 'styled-components'

const ContainerItemListaDeMatches = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  background-color: beige;
  width: 90%;
  border: 1px solid gray;
  border-radius: 5px;
`
const PicPerfil = styled.img`
  margin-right: 5%;
  margin-left: 5%;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`

function ItemListaDeMatches(props) {
  return (
    <ContainerItemListaDeMatches>
        <PicPerfil src={props.perfil.photo}/>
        <p>{props.perfil.name}</p>        
    </ContainerItemListaDeMatches>
  )
}

export default ItemListaDeMatches