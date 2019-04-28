const express = require('express');
const router = express.Router();

// ResearchSubline model
const ResearchSubline = require('../../models/Research_subline');

// @route GET api/research_sublines
// @desc Get all research_sublines
// @access Private
router.get('/', (req, res) => {
    ResearchSubline.find()
        .sort({ name: -1 })
        .then(research_sublines => res.json(research_sublines))
});

// @route GET api/research_sublines
// @desc Create research_subline
// @access Private
router.post('/', (req, res) => {
    const newResearchSubline = new ResearchSubline({
        name: req.body.name,
        description: req.body.description,
        research_line: req.body.research_line
    });
    newResearchSubline.save().then(research_subline => res.json(research_subline)).catch(err => console.log(err));
});

module.exports = router;