const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResearchLineSchema = new Schema({
    name: { type: 'String' },
    description: { type: 'String' },
}, { timestamps: true });

module.exports = ResearchLine = mongoose.model('research_line', ResearchLineSchema);