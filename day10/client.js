const { Client } = require('pg');

const client = new Client({
    user: process.env.PGUSER,
    host: 'localhost',
    database: 'input_app',
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

client.connect()

module.exports = client;
