import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, clear, navigate, setRightButtonText) => {
  axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeedPage(navigate)
      setRightButtonText("Logout")
    })
    .catch((err) => alert("Erro no Login"))
}

export const register = (body, clear, navigate, setRightButtonText) => {
  axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeedPage(navigate)
      setRightButtonText("Logout")
    })
    .catch((err) => alert("Erro no Cadastro"))
}
