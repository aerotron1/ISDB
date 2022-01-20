const express = require('express');
const router  = express.Router();
const { Genre } = require('../models/genres');

router.get('/', (req, res) => {
  Genre.find({}, function (error, genres) {
    //console.log(genres)
      if (error) {
      res.status(400).json({
        message: ({ message: 'Unable to find Genres'})
      });
    } else {
      res.json(genres);
    }
     });
});

module.exports = router;
