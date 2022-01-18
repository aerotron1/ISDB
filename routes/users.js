const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const passportJwt = require('passport-jwt')

const { User } = require('../models/users')

const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'a@s!k#'
}

const strategy = new passportJwt.Strategy(jwtOptions, (jwtPayload, next) => {
    console.log("from within strategy: ")
    console.log(jwtPayload)

    User.find(aUser => aUser.username === jwtPayload.username);

    if (user) { next(null, user); }
    else { next(null, false);}
})


app.post("/login", (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }, (error, user) => {
      if (user) {
        user.authenticate(req.body.password, (error, user) => {
          if (error) {
            res.status(401).json({ message: 'Invalid username or password'})
          } else {
            const token = jwt.sign({ username: user.username }, jwtOptions.secretOrKey);
            res.status(200).json({message: `Hello, ${user.username}`, token: token})
          }
        })
      } else {
        res.status(401).json({message: 'Invalid username or password'})
      }
    })
  } else {
    res.status(401).json({message: 'Enter username and password'})
  }
})

app.post('/register', (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }, (error, user) => {
      if (error) {
        res.status(401).json(error)
      } else if (user) {
        res.status(401).json({ message: 'Username unavailable' })
      } else {
        const newUser = new User({ username: req.body.username })
        
        User.register(
          newUser,
          req.body.password,
          (error) => {
            if (error) { res.status(401).json(error) }
            else {
              res.status(201).json({ message: "Registered" })
            }
          }
        )
      }
    })
  } else {
    res.status(401).json({ message: 'Enter username and password' })
  }
});


module.exports = app;
