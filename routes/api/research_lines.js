const express = require('express');
const router = express.Router();

// ResearchLine model
const ResearchLine = require('../../models/Research_line');

// @route GET api/research_lines
// @desc Get all research_lines
// @access Private
router.get('/', (req, res) => {
    ResearchLine.find()
        .sort({ name: -1 })
        .then(research_lines => res.json(research_lines))
});

// @route GET api/research_lines
// @desc Create research_line
// @access Private
router.post('/', (req, res) => {
    const newResearchLine = new ResearchLine({
        name: req.body.name,
        description: req.body.description,
    });
    newResearchLine.save().then(research_line => res.json(research_line)).catch(err => console.log(err));
});

// @route DELETE api/resesearch_lines/:id
// @desc Delete research_line
// @access Private
router.post('/:id', (req, res) => {
    ResearchLine.findById(req.params.id)
        .then(research_line => research_line.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: true }))
});

module.exports = router;