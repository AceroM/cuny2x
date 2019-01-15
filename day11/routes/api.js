const express = require('express');
const router = express.Router();
const { Hats, Users } = require('../models');

module.exports = router;

router.get('/hats', (req, res) => {
    Hats.findAll({ include: [Users]}).then((rows) => {
        console.log(rows)
        res.send(rows);
    })
})

router.get('/users', (req, res) => {
    Users.findAll().then(rows => {
        res.send(rows)
    })
})

router.get('/hats/search', (req,res) => {
    var query = req.query.name
    Hats.findAll({
        where: {
            name: query
        }
    }).then(rows => {
        res.send(rows)
    })
})

router.get('/hats/:hatID', (req, res) => {
    const hatID = req.params.hatID;
    Hats.findByPk(hatID).then(rows => {
        console.log(rows)
        res.send(rows)
    })
})

router.get('/hats/:hatID', (req, res) => {
    const hatID = req.params.hatID;
    Hats.findByPk(hatID).then(rows => {
        console.log(rows)
        res.send(rows)
    })
})


router.post('/hats', (req, res) => {
    let { name, material, height, brim } = req.body;
    Hats.create({
        name: name,
        material: material,
        height: height,
        brim: brim
    }).then(rows => {
        console.log(rows)
        res.send(rows)
    })
})

router.post('/users', (req, res) => {
    let { name, email } = req.body;
    Users.create({
        name: name,
        email: email
    }).then(rows => {
        res.send(rows)
    })
})

router.delete('/hats/:hatID', (req, res) => {
    const hatID = req.params.hatID;
    Hats.destroy({
        where: {
            id: hatID
        }
    }).then(rows => {
        res.sendStatus(201)
    })
})
