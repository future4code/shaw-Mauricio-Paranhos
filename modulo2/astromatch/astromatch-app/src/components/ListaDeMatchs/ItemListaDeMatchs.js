import React from 'react'
import styled from 'styled-components'

const ContainerItemListaDeMatchs = styled.div`
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
`

function ItemListaDeMatchs() {
  return (
    <ContainerItemListaDeMatchs>
        <PicPerfil src={'https://picsum.photos/30/30'}/>
        <p>Nome da pessoa</p>        
    </ContainerItemListaDeMatchs>
  )
}

export default ItemListaDeMatchs