const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const client = require('./client');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./routes/api'))

// for parsing JSON Derulo

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('listening on ' + PORT));