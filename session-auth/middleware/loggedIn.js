function loggedIn(req, res, next) {
  console.log(req.user);
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = loggedIn;
