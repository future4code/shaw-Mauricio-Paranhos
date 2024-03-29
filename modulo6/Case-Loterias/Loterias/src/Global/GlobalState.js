import ContextLoterias from "./GlobalContext"
import axios from "axios"

import { useState, useEffect } from "react"
import { BASE_URL } from "../Constants/BaseUrl"

const GlobalState = (props) => {
  const [loterias, setLoterias] = useState([])
  const [concurso, setConcurso] = useState({ data: "", numeros: [] })

  useEffect(() => {
    jogosLotericos()
    getConcursos()
  }, [])

  const jogosLotericos = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setLoterias(res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        console.log(res)
        const concurso = res.data.find((x) => x.loteriaId === 0)

        if (!concurso) {
          throw new Error("Concurso não encontrado!")
        }

        getConcursoData(concurso.concursoId)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getConcursoData = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setConcurso(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const request = {
    loterias,
    concurso,
    setConcurso,
    setLoterias,
    getConcursoData
  }
  return (
    <div>
      <ContextLoterias.Provider value={request}>
        {props.children}
      </ContextLoterias.Provider>
    </div>
  )
}
export default GlobalState