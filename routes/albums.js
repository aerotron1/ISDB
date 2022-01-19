const express = require('express');
const router  = express.Router();
const {Album} = require('../models/albums');

router.get('/:AlbumId', (req, res) => {
  Album.findOne ({ AlbumId: parseInt(req.params.AlbumId) }, function (error, album) {
      if (error) {
      res.status(400).json({
        message: 'Unable to find Album'
      });
    } else {
      res.json(album);
    }
  });
});

module.exports = router;