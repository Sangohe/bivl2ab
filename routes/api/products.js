const express = require('express');
const router = express.Router();

// Product model
const Product = require('../../models/Product');

// @route GET api/products
// @desc Get all products
// @access Private
router.get('/', (req, res) => {
    Product.find()
        .sort({ title: -1 })
        .then(products => res.json(products))
});

// @route GET api/products
// @desc Create products
// @access Private
router.post('/', (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        type: req.body.type,
        resources: req.body.resources,
        research_line: req.body.research_line,
        photo: req.body.photo,
        pdf: req.body.pdf,
        abstract: req.body.abstract,
    });
    newProduct.save().then(product => res.json(product)).catch(err => console.log(err));
});

module.exports = router;