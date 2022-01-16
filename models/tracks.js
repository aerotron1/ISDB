const mongoose = require('mongoose');


const trackSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    Composer: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number
    },
    size: {
        typer: Number
    },
    UnitPrice: {
        type: Number,
        required: true,
    },
});

const Track = mongoose.model('Track', trackSchema);

module.exports = { Track };