const Sequelize = require('sequelize');
const db = require('../config/database');

const Campuses = db.define('users', {
    name: Sequelize.STRING,
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/West_Building_Hunter_College_CUNY.jpg/250px-West_Building_Hunter_College_CUNY.jpg",
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(6969)
    }
});

module.exports = Campuses;