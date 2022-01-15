var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const userSchema = new mongoose.Schema({ // redo schema model diagram
  username: { 
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String, // need to ensure salted and hashed 
    required: true,
    trim: true
  }
})

const User = mongoose.model('User', userSchema)

const currentUser = new User({
  username: "test",
  password: 'test1'
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = {
  router,
  currentUser,
  User
}
