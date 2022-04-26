import React from 'react'
import axios from 'axios'

function BotaoLimpar() {

  const onClickLimpar = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauricio/clear')
    .then(response => {
      alert('Lista de matches limpa!')
    })
  }

  return (
    <div>
      <button onClick={onClickLimpar}>Limpar matches e deslikes</button>
    </div>
  )
}

export default BotaoLimpar