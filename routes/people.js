const express = require('express');
const router = express.Router();
const {addPerson, getPeople, updatePerson, readPerson, deletePerson} = require('../controllers/poeple');

router.get('/', async (req, res) => {
    try {
        let peopleData =  await getPeople();
        res.status(200).json({data: peopleData, success: true});
    } catch (error) {
        console.log(error);
        res.status(500).json({data: [], success: false});
    }
});

router.post('/', async (req, res) => {
    let {name} = req.body;
    if (!name) return res.status(400).json({success:false, msg:'Name cannot be emoty!'});

    try {
        await addPerson(name);
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, msg:'Something went wrong!'})
    }

    res.status(201).json({success:true, msg: "person added."})
});

router.put('/:id', async (req, res) => {
    const {name} = req.body;
    if (!name) return res.status(400).json({success:false, msg:'Name cannot be emoty!'});

    const {id} = req.params;
    try {
        let updatedPerson = await updatePerson(Number(id), name);
        res.status(200).json({success: true, data: updatedPerson});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, msg:'Something went wrong!'})
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        let updatedPerson = await readPerson(Number(id));
        res.status(200).json({success: true, data: updatedPerson});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, msg:'Something went wrong!'})
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        let updatedPerson = await deletePerson(Number(id));
        res.status(200).json({success: true, data: updatedPerson});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, msg:'Something went wrong!'})
    }
});

module.exports = router;