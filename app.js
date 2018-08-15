const express = require('express');
const passport = require('passport');
const morgan = require('morgan');

const app = express();

require('./passport');

app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

const routes = require('./routes');

app.use('/', routes);

//handles errors
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(9000, () => {
  console.log('Server started. Listening on port 9000...');
});
