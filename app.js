const express = require('express');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

const example = process.env.EXAMPLE;
let routes = null;

switch (example) {
  case 'jwt-auth':
    require('./jwt-auth/passport');
    routes = require('./jwt-auth/routes');
    break;
  case 'session-auth':
    require('./session-auth/passport');
    routes = require('./session-auth/routes');
    app.use(
      session({
        secret: 'SUPER SECRET PHRASE',
        resave: false,
        saveUninitialized: true,
      }),
    );
    app.use(passport.initialize());
    app.use(passport.session());
    break;
  default:
    process.exit(1);
}

app.use('/', routes);

//handles errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(9000, () => {
  console.log('Server listening to port 9000...');
});
