const client = require('../client');
const router = require('express').Router();
module.exports = router;

// console.log in the terminal the rows returned from getting all of the entries in the input table, and send the rows back via the http response body.
router.get('/input', (req, res) => {
    client.query('select * from input', (err, data) => {
        if (err) return console.error(err);
        res.send(data.rows);
    })
})

router.get('/input/:inputID', (req, res) => {
    const inputID = req.params.inputID;
    client.query(`select * from input where id=${inputID}`, (err, data) => {
        if (err) return console.error(err);
        res.send(data.rows)
    })
})

router.post('/input', (req, res) => {
    let { input, length } = req.body;
    client.query(`insert into input (input, length) values ('${input}', ${length})`, (err, data) => {
        if (err) return console.error(err);
        res.status(201).send(data);
    })
})

router.delete('/input/:inputID', (req, res) => {
    const inputID = req.params.inputID;
    client.query(`DELETE FROM input WHERE id=${inputID}`, (err, data) => {
        if (err) return console.error(err);
        res.status(201).send(data);
    })
})
