const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// @route GET /auth/register
// @desc Shows the register form
// @access Public
router.get('/register', (req, res) => {
  res.render('auth/register')
});

// @route POST /auth/regsiter
// @desc signup the user
// @access Public
router.post("/register", function (req, res) {
  let newUser = new User({
    username: req.body.username
  });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.render("auth/register");
    }
    passport.authenticate("local")(req, res, function () {
      res.send("you are being registered");
    });
  });
});

// @route GET /auth/Login
// @desc show the login form
// @access Public
router.get('/login', (req, res) => {
  res.render('auth/login');
})

// @route POST /auth/Login
// @desc login the user
// @access Public
router.post('/login', passport.authenticate('local', {
  successRedirect: '/landing',
  failureRedirect: '/auth/login'
}), (req, res) => {})

// @route POST /auth/logout
// @desc logout the user
// @access private
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/auth/login')
});




module.exports = router;