import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToLoginPage, goToRegisterPage, goToFeedPage } from '../../routes/coordinator'
import {Button} from "@material-ui/core"
import styled from 'styled-components'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostPageComtainer = styled.div`
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

const PostPage = () => {
  const navigate = useNavigate()
  useProtectedPage()

  return (
    <PostPageComtainer>
        <h1>PostPage</h1>
        <ButtonConteioner>
          <Button variant="contained" color="primary" onClick={() => goToFeedPage(navigate)} >Feed</Button>
          <Button variant="contained" color="primary" onClick={() => goToLoginPage(navigate)} >Login</Button>
          <Button variant="contained" color="primary" onClick={() => goToRegisterPage(navigate)} >Register</Button>
          <Button variant="contained" color="primary" onClick={() => goBack(navigate)} >Voltar</Button>
        </ButtonConteioner>
    </PostPageComtainer>
  )
}

export default PostPage