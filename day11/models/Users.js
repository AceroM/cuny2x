const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = Users;