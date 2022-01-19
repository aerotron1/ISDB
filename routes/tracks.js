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
      res.json(track);
    }
  });
});

router.post('/tracks', (req, res) => {
  if (
        req.params.name !== undefined
        && req.params.composer !== undefined
        && req.params.duration !== undefined
  ) {
    const newtrack = new Track({
      name: req.params.name,
      composer: req.params.composer,
      duration: req.params.duration,
    });
  } else {
    res.send('name, composer, duration');
  }
});
module.exports = router;
