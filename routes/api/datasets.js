const express = require('express');
const router = express.Router();

// Dataset model
const Dataset = require('../../models/Dataset');

// @route GET api/datasets
// @desc Get all datasets
// @access Private
router.get('/', (req, res) => {
    Dataset.find()
        .sort({ title: -1 })
        .then(datasets => res.json(datasets))
});

// @route GET api/datasets
// @desc Create dataset
// @access Private
router.post('/', (req, res) => {
    const newDataset = new Dataset({
        name: req.body.name,
        photo: req.body.photo,
        description: req.body.description,
        url: req.body.url,
    });
    newDataset.save().then(dataset => res.json(dataset)).catch(err => console.log(err));
});

module.exports = router;