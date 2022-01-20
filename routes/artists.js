const express = require('express')
const router = express.Router()
const { Artist } = require('../models/artists')

router.get('/:ArtistId', (req, res) => {
    Artist.findOne({ ArtistId: parseInt(req.params.ArtistId) }, function (error, artist) {
        if (error) {
            res.status(400).json({
                message: ({ message: 'Unable to find Artist'})
            });
        } else {
            res.status(200).json(artist);
        }
    });
});

module.exports = router;