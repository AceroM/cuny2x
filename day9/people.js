const fs = require('fs');

const readppl = (filename) => JSON.parse(fs.readFileSync(filename)).people;

var people = readppl('people.json');
var people2 = readppl('people2.json');
var sorted = people.concat(people2).sort()
fs.writeFile("peopleComplete.txt", sorted, (err) => err ? console.log(err) : console.log("done"))

//bonus
var files = fs.readdirSync('./people/');
var fullPpl = files.reduce((acc, val) => acc.concat(readppl(`./people/${val}`)),[])
let peopleComplete = JSON.stringify({
    people: fullPpl
})

fs.writeFile("peopleComplete.json", peopleComplete, (err) => err ? console.log(err) : console.log("finished bonus"))
