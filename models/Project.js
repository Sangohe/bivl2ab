const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: { type: 'String', required: true },
    type: { type: Number, required: true },
    photo: { type: 'String', required: true },
    summary: { type: 'String', required: true },
    research_sublines: { type: [{ type: Schema.Types.ObjectId, ref: 'Research_subline' }] },
    productions: { type: [{ type: Schema.Types.ObjectId, ref: 'Product' }] },
    users: { type: [{ type: Schema.Types.ObjectId, ref: 'User' }] },
}, { timestamps: true });

module.exports = Project = mongoose.model('project', ProjectSchema);