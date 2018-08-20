const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

router.get('/login', (req, res) => {
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
