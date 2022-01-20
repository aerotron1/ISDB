const express = require('express');
const router  = express.Router();
const {Album} = require('../models/albums');

router.get('/:AlbumId', (req, res) => {
  Album.findOne ({ AlbumId: parseInt(req.params.AlbumId) }, function (error, album) {
    if (error) {
      res.status(400).json({
        message: error
      });
    } else {
      res.status(200).json(album);
    }
  });
});

module.exports = router;