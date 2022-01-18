const mongoose = require('mongoose');


    const trackSchema = new mongoose.Schema({
        trackId: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        composer: {
            type: String,
            required: true,
            trim: true
        },
        milliseconds: {
            type: Number
        },
        bytes: {
            type: Number
        },
        unitPrice: {
            type: Number,
            required: true,
        },
    });
    
    const Track = mongoose.model('Track', trackSchema);
    


module.exports = { Track };