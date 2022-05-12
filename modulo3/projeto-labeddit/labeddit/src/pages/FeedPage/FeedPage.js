import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToLoginPage, goToPostPage, goToRegisterPage } from '../../routes/coordinator'
import {Button} from "@material-ui/core"
import { FeedPageComtainer, ButtonConteioner } from "./styled"
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedPage = () => {
  const navigate = useNavigate()

  useProtectedPage()

  return (
    <FeedPageComtainer>
        <h1>FeedPage</h1>
        <ButtonConteioner>
          <Button variant="contained" color="primary" onClick={() => goToLoginPage(navigate)} >Login</Button>
          <Button variant="contained" color="primary" onClick={() => goToPostPage(navigate)} >Post</Button>
          <Button variant="contained" color="primary" onClick={() => goToRegisterPage(navigate)} >Register</Button>
          <Button variant="contained" color="primary" onClick={() => goBack(navigate)} >Voltar</Button>
        </ButtonConteioner>
    </FeedPageComtainer>
  )
}

export default FeedPage