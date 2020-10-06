const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.PG_URL
})

//pool.on('connect', () => {console.log('Connected to database')})

module.exports = {
    query: (text, params) => pool.query(text, params)
}