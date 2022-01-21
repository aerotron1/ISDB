const express = require('express');
const router  = express.Router();
const { Genre } = require('../models/genres');
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
  Genre.find({}, function (error, genres) {
      if (error) {
      res.status(400).json({
        message: ({ message: 'Unable to find Genre'})
      });
    } else {
      res.status(200).json(genres);
    }
     });
});

module.exports = router;
