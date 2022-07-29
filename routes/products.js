const express = require('express');
const router = express.Router();
const {products} = require('../data.js');

router.get('/:productId', (req, res) => {
    let {productId} = req.params;
    let product = products.find((prod) => prod.id === Number(productId));

    return product ? res.json(product) : res.status(404).send("Product does not Exists.");
    
});

router.get('/', (req, res) => {
    let mappedProds = products.map((prod) => {
        let {id, name, image} = prod;
        return {id, name, image};
    });
    res.json(mappedProds);
});

module.exports = router;