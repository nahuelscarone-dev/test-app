import express from "express"
import { Pool } from "pg"

const PUERTO = process.env.PORT || 3000
const app = express()


app.get('/test', (req, res)=>{
 res.send('Test funcionando')
})

app.listen(PUERTO,()=>{
    `Servidor escuchando en el puerto: http://localhost:${PUERTO}`
})