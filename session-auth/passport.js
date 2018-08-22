const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use(
  'local',
  new localStrategy((username, password, done) => {
    if (username !== 'user' || password !== 'password') {
      return done(null, false, {
        message: 'username or password is incorrect',
      });
    }
    return done(
      null,
      { username, password },
      { message: 'authentication successful!' },
    );
  }),
);

passport.serializeUser((user, done) => {
  done(null, { username: user.username });
});

passport.deserializeUser((user, done) => {
  done(null, { username: user.username });
});
