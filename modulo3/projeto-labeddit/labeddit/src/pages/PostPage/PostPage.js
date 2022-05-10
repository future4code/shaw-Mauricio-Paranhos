import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToLoginPage, goToRegisterPage, goToFeedPage } from '../../routes/coordinator'

const PostPage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>PostPage</h1>
        <button onClick={() => goToFeedPage(navigate)} >Feed</button>
        <button onClick={() => goToLoginPage(navigate)} >Login</button>
        <button onClick={() => goToRegisterPage(navigate)} >Register</button>
        <button onClick={() => goBack(navigate)} >Voltar</button>
    </div>
  )
}

export default PostPage