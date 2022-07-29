const express = require('express');
const router = express.Router();
const {people} = require('../data.js');

router.get('/', (req, res) => {
    res.status(200).json({data: people, success: true});
});

router.post('/', (req, res) => {
    let {name} = req.body;
    if (!name) {
        return res.status(400).json({success:false, msg:'Name cannot be emoty!'});
    }
    res.status(201).json({success:true, person: name});
});

module.exports = router;