const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  TrackId: {
    type: Number,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Composer: {
    type: String,
    required: true,
    trim: true,
  },
  Milliseconds: {
    type: Number,
  },
  Bytes: {
    type: Number,
  },
  UnitPrice: {
    type: Number,
    required: true,
  },
});

const Track = mongoose.model('Track', trackSchema);

module.exports = { Track };
