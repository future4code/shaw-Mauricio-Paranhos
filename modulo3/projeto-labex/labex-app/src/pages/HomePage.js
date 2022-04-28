import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage } from '../routes/coordinator'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
    </div>
  )
}
