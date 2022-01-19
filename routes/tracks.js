const express = require('express');

const { router } = express.router();
const { Track } = require('../models/tracks');

router.get('/tracks/TrackId:', (req, res) => {
  Track.find | ({ TrackId: req.params.TrackId }, function (error, tracks) {
    if (error) {
      res.status(400).json({
        message: ({ message: 'Unable to find Album'})
      });
    } else {
      res.json(tracks);
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
