const { Pool } = require('pg')

const pool = new Pool({
host: 'localhost',
port: 5433,
user: 'postgres',
password: 'batatinha', 
database: 'dindin', 
})

module.exports = pool