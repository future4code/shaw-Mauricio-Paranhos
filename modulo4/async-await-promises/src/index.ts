import express from "express"
import { AddressInfo } from "net"
import axios from "axios"
import { baseURL } from "./baseURL"

// const app = express()
// app.use(express.json())

axios.get(`${baseURL}/subscribers`)
  .then(res => res.data)
  .catch

