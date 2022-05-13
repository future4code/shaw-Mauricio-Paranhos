import React from "react"
import { useNavigate } from "react-router-dom"
import { goBack, goToLoginPage, goToPostPage, goToFeedPage } from "../../routes/coordinator"
import {Button, TextField} from "@material-ui/core"
import logo from "../../assets/logo.png"
import useForm from "../../hooks/useForm"
import { RegisterPageComtainer, ButtonConteioner, LogoImage, InputsContainer } from "./styled"
import { register } from "../../services/users"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const RegisterPage = ({setRightButtonText}) => {
  const navigate = useNavigate();
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    register(form, clear, navigate, setRightButtonText)
  }

  return (
    <RegisterPageComtainer>
      <LogoImage src={logo} />
      <h1>RegisterPage</h1>

      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            autoFocus
          />
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
          >
            Fazer Cadastro
          </Button>
        </form>
      </InputsContainer>
    </RegisterPageComtainer>
  )
}

export default RegisterPage
