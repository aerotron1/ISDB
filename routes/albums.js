const express = require('express');
const router  = express.Router();
const {Album} = require('../models/albums');

router.get('/:AlbumId', (req, res) => {
  Album.findOne ({ AlbumId: parseInt(req.params.AlbumId) }, function (error, album) {
    if (error) {
      res.status(400).json({
        message: ({ message: 'Unable to find Album'})
      });
    } else {
      res.status(200).json(album);
    }
  });
});

// router.delete('/:albumId', (req, res) => {
//     Album.findOneAndDelete({ AlbumID: req.params.AlbumId }, (error, student) => {
//         if (error) {
//             res.status(400).json({
//                 message: error
//             })
//         } else {
//             res.status(200).json ({message: "deleted successfully"})
//         }
//     })

// })

module.exports = router;