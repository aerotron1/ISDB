const express = require('express')
const { router } = require('../app')
const { Tracks } = require('../models/tracks')

router.get('/tracks/TrackId:', (req, res) => {
    Tracks.find | ({TrackId: req.params.TrackId}, function (err, tracks) {
        if (err) {
            res.status(400).json({
                message: err
            });
        } else {
            res.json(tracks);
        }
    });
});