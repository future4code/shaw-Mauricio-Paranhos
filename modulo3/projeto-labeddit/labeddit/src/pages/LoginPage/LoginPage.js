import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToPostPage, goToRegisterPage, goToFeedPage } from '../../routes/coordinator'
import {Button, TextField} from "@material-ui/core"
import {LoginPageComtainer, LogoImage, InputsContainer, ButtonConteioner, SignInButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import useForm from "../../hooks/useForm"


const LoginPage = () => {
  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({email: "", password: ""})
  const onSubmitForm = (event) => {
    event.preventDefault()
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
            name={"passwor"}
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
      {/* <ButtonConteioner>
          <Button variant="contained" color="primary" onClick={() => goToFeedPage(navigate)} >Feed</Button>
          <Button variant="contained" color="primary" onClick={() => goToPostPage(navigate)} >Post</Button>
          <Button variant="contained" color="primary" onClick={() => goToRegisterPage(navigate)} >Register</Button>
          <Button variant="contained" color="primary" onClick={() => goBack(navigate)} >Voltar</Button>
      </ButtonConteioner> */}
    </LoginPageComtainer>
  )
}

export default LoginPage