const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  AlbumId: Number,
  Title: String,
  ArtistId: Number,
});

const Album = mongoose.model('Album', albumSchema);

// const firstAlbum = new Album({
//     albumId: 1,
//     title: 'test',
//     artistId: 2
// });

//     firstAlbum.save(function (error, obj) {
//         if (error) { console.log('Error!!!'); console.log(error); }
//         else {
//             console.log("No Error!");
//             console.log(obj);
//         }
//     });

module.exports = { Album };
