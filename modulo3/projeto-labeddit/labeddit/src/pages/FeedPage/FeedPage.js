import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToLoginPage, goToPostPage, goToRegisterPage } from '../../routes/coordinator'

const FeedPage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>FeedPage</h1>
        <button onClick={() => goToLoginPage(navigate)} >Login</button>
        <button onClick={() => goToPostPage(navigate)} >Post</button>
        <button onClick={() => goToRegisterPage(navigate)} >Register</button>
        <button onClick={() => goBack(navigate)} >Voltar</button>
    </div>
  )
}

export default FeedPage