const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/form', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../methods-public/index.html'));
});

router.post('/', (req, res) => {
    let {name} = req.body;
    return name ? res.send(`Welcome ${name}`) : res.status(401).send("Please provide name!");
});

module.exports = router;