import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToPostPage, goToRegisterPage, goToFeedPage } from '../../routes/coordinator'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>LoginPage</h1>
        <button onClick={() => goToFeedPage(navigate)} >Feed</button>
        <button onClick={() => goToPostPage(navigate)} >Post</button>
        <button onClick={() => goToRegisterPage(navigate)} >Register</button>
        <button onClick={() => goBack(navigate)} >Voltar</button>
    </div>
  )
}

export default LoginPage