const express = require('express');
const router = express.Router();

// User model
const ResearchLine = require('../../models/Research_line');

// @route GET api/users
// @desc Get all users
// @access Private
router.get('/', (req, res) => {
    ResearchLine.find()
        .sort({ name: -1 })
        .then(research_lines => res.json(research_lines))
});

// @route GET api/users
// @desc Create user
// @access Private
router.post('/', (req, res) => {
    const newResearchLine = new ResearchLine({
        name: req.body.name,
        description: req.body.description,
    });
    newResearchLine.save().then(research_line => res.json(research_line)).catch(err => console.log(err));
});

module.exports = router;