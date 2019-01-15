const Sequelize = require('sequelize');
const db = require('../config/database');

const Hats = db.define('hats', {
    name: Sequelize.STRING,
    material: Sequelize.STRING,
    height: Sequelize.INTEGER,
    brim: Sequelize.BOOLEAN,
},{
    timestamps: false,
});

module.exports = Hats;