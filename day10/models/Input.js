const Sequelize = require('sequelize');
const db = require('../config/database');

const Input = db.define('input', {
    input: {
        type: Sequelize.TEXT
    },
    length: {
        type: Seqquelize.INTEGER
    }
})

Input.sync({ force: true })
    .then(() => console.log('hats model synced'));

module.exports = Input;