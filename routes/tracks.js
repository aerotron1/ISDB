const express = require('express');
const router = express.Router();
const { Track } = require('../models/tracks');

router.get('/:TrackId', (req, res) => {
  Track.findOne({ TrackId: parseInt(req.params.TrackId) }, function (error, track) {
    if (error) {
      res.status(400).json({
        message: ({ message: 'Unable to find Track'})
      });
    } else {
      res.status(200).json(track);
    }
  });
});

router.post('/', (req, res) => {
      if (
        req.params.Name !== undefined && 
        req.params.AlbumId !== undefined && 
        req.params.GenreId !== undefined &&
        req.params.Composer !== undefined &&
        req.params.Milliseconds !== undefined &&
        req.params.Bytes !== undefined &&
        req.params.UnitPrice !== undefined ) {
        const newTrack =  new Track(req.param);
        newTrack.save((error, track) => {
            if (error) {
                res.status(400).json({
                    message: error
                });
            } else {
                res.status(201).json(track);
            }
        });
    } else {
        res.status(400).json({
            message: "expected Name ,AlbumId, GenreId, Composer, Milliseconds Bytes and UnitPrice"
        });
    }
})


module.exports = router;
