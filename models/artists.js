const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    artistId: Number,
    Name: String
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = { Artist };
