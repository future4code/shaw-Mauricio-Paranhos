import React from 'react'
import ItemListaDeMatchs from './ItemListaDeMatchs'
import styled from 'styled-components'

const ContainerListaDeMatchs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  padding: 8px;
`

function ListaDeMatchs() {
  return (
    <ContainerListaDeMatchs>
      <ItemListaDeMatchs/>
      <ItemListaDeMatchs/>
      <ItemListaDeMatchs/>
      <ItemListaDeMatchs/>
    </ContainerListaDeMatchs>
  )
}

export default ListaDeMatchs