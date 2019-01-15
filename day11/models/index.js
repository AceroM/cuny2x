const Users = require('./Users');
const Hats = require('./Hats');
const Students = require('./Students');
const Campuses = require('./Campuses');

Users.hasMany(Hats, {foreignKey: 'userId'});
Hats.belongsTo(Users, {foreignKey: 'userId'});

Students.belongsTo(Campuses);
Campuses.hasMany(Students);

Hats.sync()
    .then(() => console.log("Hats synced!"))
    .catch((err) => console.error(err));

Users.sync()
    .then(() => console.log("Users synced!"))
    .catch((err) => console.error(err));

Students.sync({ force: true })
    .then(() => console.log("Students synced"))
    .catch(err => console.error(err))

Campuses.sync({ force: true })
    .then(() => console.log("Campuses synced"))
    .catch(err => console.error(err))

module.exports = {Hats, Users, Students, Campuses};