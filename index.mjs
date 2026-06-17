import 'dotenv/config'
import express from "express"
import { Pool } from "pg"

//////////////////////////
// SUPABASE -> click console / librería
const pool = new Pool({
    user:process.env.BD_HOST,
    password: process.env.BD_PASS,
    user: process.env.BD_USER,
    database: process.env.BD_NAME,
    port: process.env.BD_PORT
})
//////////////////////////


const PUERTO = process.env.PORT || 3000
const app = express()


app.get('/test', (req, res)=>{
 res.send('Test funcionando')
})

app.get('/test-bd', async (req, res)=>{
 const resultado = await pool.query(`SELECT * FROM MENSAJES`)
 res.json(resultado.rows)
})

app.listen(PUERTO,()=>{
    `Servidor escuchando en el puerto: http://localhost:${PUERTO}`
})