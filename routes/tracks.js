const express = require('express')
const { router } = express.router()
const { Track } = require('../models/tracks')

router.get('/tracks/TrackId:', (req, res) => {
    Track.find | ({ TrackId: req.params.TrackId }, function (error, track) {
        if (error) {
            res.status(400).json({
                message: error
            });
        } else {
            res.json(track);
        }
    });
});

router.post('/tracks', (req, res) => {
    
})
module.exports = router;