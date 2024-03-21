const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: 'string',
        required: true,
        unique: true,
    },
    redirectingUrl: {
        type: 'string',
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
}, {timestamps: true})


const URL = mongoose.model('urlShortner', urlSchema)

module.exports = {
    URL,
}