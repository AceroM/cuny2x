var setDifference = require('./set-difference');
var setIntersection = require('./set-intersection');

var set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];
var set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];

var difference = setDifference(set1, set2);
var intersection = setIntersection(set1, set2);

//should print an array with cats, red, bananas, movies, blue, rain as elements
console.log(difference);
//should print an array with dogs and code as elements
console.log(intersection);
//---------------------------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get(['apple', 'ale'], (req, res) => res.send("Apple or Ale?"));
app.get(/wh(o+)(a+)/, (req, res) => res.send("I know, right?!"));

app.get(['/','/hello', '/hi', '/hola'], (req, res) => {
    console.log('hit query route', req.query.name)
    res.send(`hello ${req.query.name}`);
})

app.get('/name/:name',(req, res) => {
    let greetings = ["Wassup", "Good morning"];
    let [first, last] = req.params.name.split(' ');
    res.send(`Was good in the hood ${first}..... ${last}`);
})

app.get('/reverse/:word', (req,res) => {
    res.send(req.params.word.split('').reverse().join(''));
})

app.get('/:else', (req,res) => res.send("i guess you can't spell lol"))

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("listening on port " + PORT))
