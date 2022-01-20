const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  AlbumId: Number,
  Title: String,
  ArtistId: Number,
});

const Album = mongoose.model('Album', albumSchema);

module.exports = { Album };
