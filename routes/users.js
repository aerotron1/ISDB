const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const passportJwt = require('passport-jwt')

const { User } = require('../models/users')

const defaultUsers = [
    { username: 'alice', password: 'bob' },
    { username: 'bob', password: 'alice' }
]


const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'a@s!k#'
}

app.post("/login", (req, res) => {
    // confirm that the request body contains a username and password
    if (req.body.username && req.body.password) {
        // search the defaultUsers array to verify the provided
        // username and password matches what we have
        const user = defaultUsers.find(aUser =>  aUser.username === req.body.username && aUser.password === req.body.password)
        if (user) {
            // if the username and password matches, return a welcome message
            res.status(200).json({ message: `welcome, ${user.username}` })
        } else {
            // if either the username or password doesnt match return an error message
            res.status(401).json({ message: 'invalid username or password'})
        }
    } else {
        // send an error message indicating that either the username or password was missing
        res.status(401).json({ message: 'missing username or password'})
    }
});

// app.post("/login", (req, res) => {
//   if (req.body.username && req.body.password) {
//     User.findOne({ username: req.body.username }, (error, user) => {
//       if (user) {
//         user.authenticate(req.body.password, (error, user) => {
//           if (error) {
//             res.status(401).json({ message: 'Invalid username or password'})
//           } else {
//             const token = jwt.sign({ username: user.username }, jwtOptions.secretOrKey);
//             res.status(200).json({message: `Hello, ${user.username}`, token: token})
//           }
//         })
//       } else {
//         res.status(401).json({message: 'Invalid username or password'})
//       }
//     })
//   } else {
//     res.status(401).json({message: 'Enter username and password'})
//   }
// })

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
