const { Client  } = require('pg');

const client = new Client({
    user: process.env.PGUSER,
    host: 'localhost',
    database: 'miguel',
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

client.connect()

client.query('table users;', (err, res) => {
    //console.log(res);
    let users = res.rows;
    console.log(users)
    client.end();
})
