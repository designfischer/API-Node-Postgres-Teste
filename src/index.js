const express = require('express')
const { Pool } = require('pg')
require('dotenv').config()

const db = require('./database')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

/*const pool = new Pool({
    connectionString: process.env.PG_URL
})*/

app.get('/users', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM users')
        console.log(rows)
        res.status(200).send(rows)
    } catch(err) {
        console.log(err)
    }   
})

/*app.get('/moreusers', async (req, res) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query('SELECT * FROM users')
        res.status(200).send(rows)
    } catch(err) {
        console.log(err)
    } finally {
        client.release()
    }
})*/


app.listen(3333, () => console.log('Server running'))