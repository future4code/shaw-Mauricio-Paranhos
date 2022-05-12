import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import {StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button'
import { goBack, goToLoginPage, goToRegisterPage, goToFeedPage } from '../../routes/coordinator'


const Header = ({rightButtonText, setRightButtonText}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token){
      logout()
      setRightButtonText("Login")
      goToLoginPage(navigate)
  } else {
      goToLoginPage(navigate)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit" onClick={() => goToFeedPage(navigate)}>Labeddit</Button>
          <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header