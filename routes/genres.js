const express = require('express');

const { router } = express.router();
const { Genre } = require('../models/genres');

router.get('/genre', (req, res) => {
  Genre.find | ({}, function (error, genre) {
    if (error) {
      res.status(400).json({
        message: error,
      });
    } else {
      res.json(genre);
    }
  });
});

module.exports = router;
