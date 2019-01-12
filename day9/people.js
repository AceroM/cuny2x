const fs = require('fs');

var people = JSON.parse(fs.readFileSync('people.json')).people;
var people2 = JSON.parse(fs.readFileSync('people2.json')).people;

var sorted = people.concat(people2).sort()
console.log(sorted)

fs.writeFile("peopleComplete.txt", sorted, (err) => err ? console.log(err) : console.log("done"))
