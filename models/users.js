const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({ // redo schema model diagram
  username: { 
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
    },
        password: {
        type: String, 
        trim: true,
        required: true 
    }
})

// userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema)

const CurrentUser = new User({
  username: "test",
  password: 'test1'
})

module.exports = {
  CurrentUser,
  User
}