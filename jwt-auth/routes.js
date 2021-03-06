const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('login was not successful');
        return next(error);
      }
      // set {session: false} because don't want to store user details in session. expect user to send token on each request to secure routes. usefule for API's, can be used to track users, block, etc. But if you plan to use sessions with JWTs, not recommended performance wise.
      req.login(user, { session: false }, error => {
        if (error) return next(error);

        const token = jwt.sign(
          { username: user.username },
          'SUPER SECRET PHRASE',
        );
        res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.get('/authenticate', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      const error = new Error('you are not authenticated');
      return next(error);
    }
    res.json({
      message: 'you are authenticated!',
      username: user,
    });
  })(req, res, next);
});

router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

module.exports = router;
