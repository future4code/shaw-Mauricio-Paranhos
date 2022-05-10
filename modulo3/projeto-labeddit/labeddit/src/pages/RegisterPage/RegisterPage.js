import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToLoginPage, goToPostPage, goToFeedPage } from '../../routes/coordinator'

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>RegisterPage</h1>
        <button onClick={() => goToFeedPage(navigate)} >Feed</button>
        <button onClick={() => goToPostPage(navigate)} >Post</button>
        <button onClick={() => goToLoginPage(navigate)} >Login</button>
        <button onClick={() => goBack(navigate)} >Voltar</button>
    </div>
  )
}

export default RegisterPage