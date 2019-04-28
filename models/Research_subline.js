const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResearchSublineSchema = new Schema({
    name: { type: 'String' },
    description: { type: 'String' },
    research_line: { type: Schema.Types.ObjectId, ref: 'Research_line' },
    projects: { type: [{ type: Schema.Types.ObjectId, ref: 'Project' }] },
}, { timestamps: true });

module.exports = ResearchSubline = mongoose.model('research_subline', ResearchSublineSchema);