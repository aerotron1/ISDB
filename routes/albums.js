const express = require('express')
const { router } = express.router()
const { Album } = require('../models/albums')

router.get('/album/AlbumId:', (req, res) => {
    Album.find | ({ TrackId: req.params.TrackId }, function (error, album) {
        if (error) {
            res.status(400).json({
                message: error
            });
        } else {
            res.json(album);
        }
    });
});

module.exports = router;