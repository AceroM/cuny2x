const express = require('express');
const router = express.Router();
const { Campuses } = require('../models');

module.exports = router;

router.get('/', (req, res) => {
    Campuses.findAll().then((rows) => {
        console.log(rows)
        res.send(rows);
    })
})

router.post('/', (req, res) => {
    let { name, imageUrl, address, description } = req.body;
    Campuses.create({
        name,
        imageUrl,
        address,
        description
    }).then(rows => {
        console.log(rows)
        res.send(rows)
    }).catch(err => {
        let message = err.errors[0].message;
        res.send(message)
        console.error(err)
    })
})