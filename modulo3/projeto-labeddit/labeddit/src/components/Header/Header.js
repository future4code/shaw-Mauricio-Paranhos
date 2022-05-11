import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import {StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button'
import { goBack, goToLoginPage, goToRegisterPage, goToFeedPage } from '../../routes/coordinator'


const Header = () => {
  const navigate = useNavigate()

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit" onClick={() => goToFeedPage(navigate)}>Labeddit</Button>
          <Button color="inherit" onClick={() => goToLoginPage(navigate)}>Login</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header