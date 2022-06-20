import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToPostPage, goToRegisterPage, goToFeedPage } from '../../routes/coordinator'
import {Button, TextField} from "@material-ui/core"
import {LoginPageComtainer, LogoImage, InputsContainer, ButtonContaioner, SignInButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import useForm from "../../hooks/useForm"
import { login } from "../../services/users"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const LoginPage = ({setRightButtonText}) => {
  const navigate = useNavigate()
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setRightButtonText)
  }

  return (
    <LoginPageComtainer>
      <LogoImage src={logo}/>
      <h1>LoginPage</h1>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField 
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField 
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            Fazer Login
          </Button>

        </form>
      </InputsContainer>
      <SignInButtonContainer>
      <Button
            onClick={() => goToRegisterPage(navigate)}
            type={"submit"}
            fullWidth
            variant={"text"}
            color={"primary"}
            margin={"normal"}
          >
            Cadastre-se
          </Button>
      </SignInButtonContainer>
    </LoginPageComtainer>
  )
}

export default LoginPage