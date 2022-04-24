import React, { useState, useEffect } from "react"
import "./styles.css"
import axios from "axios"
import PokeCard from "./components/PokeCard/PokeCard"
import styled from "styled-components"

const PokeApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  padding: ;
  border: 1px black;
  border-radius: 2px;
  background-color: gray;
`

const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <PokeApp>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </PokeApp>
  )
}

export default App;
