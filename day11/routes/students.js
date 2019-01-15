const express = require('express');
const router = express.Router();
const { Students } = require('../models');

module.exports = router;

router.get('/', (req, res) => {
    Students.findAll().then((rows) => {
        console.log(rows)
        res.send(rows);
    })
})

router.post('/', (req, res) => {
    let { firstName, lastName, email, imageUrl, gpa } = req.body;
    Students.create({
        firstName,
        lastName,
        email,
        imageUrl,
        gpa
    }).then(rows => {
        console.log(rows)
        res.send(rows)
    }).catch(err => {
        let message = err.errors[0].message;
        if (message.includes("email"))
            res.send(message)
        else if (message.includes("gpa"))
            res.send(message)
        console.error(err)
    })
})

