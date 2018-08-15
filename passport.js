const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

//Create passport middleware to handle user registration
passport.use(
  'login',
  new localStrategy((username, password, done) => {
    if (
      username === null ||
      username !== 'user' ||
      password === null ||
      password !== 'password'
    ) {
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

const JWTStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      secretOrKey: 'SUPER SECRET PHRASE',
      jwtFromRequest: extractJWT.fromUrlQueryParameter('secretToken'),
    },
    async (token, done) => {
      try {
        done(null, token.username);
      } catch (error) {
        done(error);
      }
    },
  ),
);
