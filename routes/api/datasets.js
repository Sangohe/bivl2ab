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

// @route DELETE api/datasets/:id
// @desc Delete dataset
// @access Private
router.post('/:id', (req, res) => {
    Dataset.findById(req.params.id)
        .then(dataset => dataset.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: true }))
});

module.exports = router;