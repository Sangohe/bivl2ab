const express = require('express');
const router = express.Router();

// New model
const New = require('../../models/New');

// @route GET api/news
// @desc Get all news
// @access Private
router.get('/', (req, res) => {
    New.find()
        .sort({ title: -1 })
        .then(news => res.json(news))
});

// @route GET api/news
// @desc Create new
// @access Private
router.post('/', (req, res) => {
    const newNew = new New({
        title: req.body.title,
        photo: req.body.photo,
        description: req.body.description,
    });
    newNew.save().then(notice => res.json(notice)).catch(err => console.log(err));
});

// @route DELETE api/news/:id
// @desc Delete notice
// @access Private
router.post('/:id', (req, res) => {
    New.findById(req.params.id)
        .then(notice => notice.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: true }))
});

module.exports = router;