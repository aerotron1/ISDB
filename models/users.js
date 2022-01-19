const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
});

//extends the schema automating the password hashing part.
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);

module.exports = { User };
