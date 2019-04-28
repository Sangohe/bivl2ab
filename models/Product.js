const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: { type: 'String', required: true },
    type: { type: Number, required: true },
    resources: {
        datasets: {
            type: [{ type: Schema.Types.ObjectId, ref: 'Dataset' }]
        },
        code: { type: 'String' },
        introduction: { type: 'String' }
    },
    photo: { type: 'String', required: true },
    abstract: { type: 'String', required: true },
    research_lines: { type: [{ type: Schema.Types.ObjectId, ref: 'Research_line' }] },
    pdf: { type: 'String' },
}, { timestamps: true });

module.exports = Product = mongoose.model('product', ProductSchema);