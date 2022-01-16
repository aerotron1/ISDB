const mongoose = require('mongoose');


const trackSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    albumInformation: {
        type: String,
        required: true,
        trim: true
    },
});

const Track = mongoose.model('Track', trackSchema);

module.exports = { Track };