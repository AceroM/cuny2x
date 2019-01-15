const Sequelize = require('sequelize');
const db = require('../config/database');

const Students = db.define('Students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/West_Building_Hunter_College_CUNY.jpg/250px-West_Building_Hunter_College_CUNY.jpg",
    },
    gpa: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue: 0,
        validate: {
            min: 0,
            max: 4
        }
    }
});

module.exports = Students;