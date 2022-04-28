import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/coordinator'
import { goBack } from '../routes/coordinator'

export const ListTripsPage = () => {
  const navigate = useNavigate()


  return (
    <div>
      <h1>ListTripsPage</h1>
      <button onClick={() => goToHomePage(navigate)}>Home</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}
