const express = require('express');
const passport = require('passport');
const loggedIn = require('./middleware/loggedIn');

const router = express.Router();

router.get('/', loggedIn, (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

router.get('/login', loggedIn, (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

module.exports = router;
