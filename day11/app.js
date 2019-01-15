const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const http=require("http");
const app = express();

//for parsing JSON Derulo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));
app.use('/students', require('./routes/students'));
app.use('/campuses', require('./routes/campuses'));

db.authenticate()
    .then(() => {
        console.log('connection has been established successfully.');
    })
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    var url = "http://localhost:5000/students"
    var req = http.request(url,resTwo=>{
        resTwo.on('data', (chunk) => {
            let data = JSON.parse(chunk);
            res.send(`<h1> Hello ${data[0].firstName} ${data[0].lastName}</h1>
                    <h2> email: ${data[0].email}</h2>
                    <h3> gpa: ${data[0].gpa}</h3>
                    <img src="${data[0].imageUrl}"/>`)
        });
    });
    req.end();
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on ${PORT}!!`))