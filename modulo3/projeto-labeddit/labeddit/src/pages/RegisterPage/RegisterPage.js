import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToLoginPage, goToPostPage, goToFeedPage } from '../../routes/coordinator'
import {Button} from "@material-ui/core"
import styled from 'styled-components'

const RegisterPageComtainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonConteioner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30vw;
`

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <RegisterPageComtainer>
        <h1>RegisterPage</h1>
        <ButtonConteioner>
          <Button variant="contained" color="primary" onClick={() => goToFeedPage(navigate)} >Feed</Button>
          <Button variant="contained" color="primary" onClick={() => goToPostPage(navigate)} >Post</Button>
          <Button variant="contained" color="primary" onClick={() => goToLoginPage(navigate)} >Login</Button>
          <Button variant="contained" color="primary" onClick={() => goBack(navigate)} >Voltar</Button>
        </ButtonConteioner>
    </RegisterPageComtainer>
  )
}

export default RegisterPage