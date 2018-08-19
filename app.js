const express = require('express');
const passport = require('passport');
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
