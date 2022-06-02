import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'



export const TripsCard = (props) => {

    const [trips, setTrips] = useState({});
      
    useEffect(() => {
      getTrips(props.trips);
    }, [props.trips]);
    
    const aluno = "mauricio-paranhos-shaw"

    const getTrips = () => {
      axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
        .then((response) => {
            setTrips(response.trips);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <div>
        <p><strong>Nome: </strong> Fuja para Plutão</p>
        <p><strong>Descrição: </strong> Fuja de tudo e de todos que te aborrecem para o planeta mais distante do sistema solar</p>
        <p><strong>Planeta: </strong> Plutão</p>
        <p><strong>Duração: </strong> 10000</p>
        <p><strong>Data: </strong> 2200-01-01</p>
    </div>
  )
}
