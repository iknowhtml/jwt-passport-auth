function loggedIn(req, res, next) {
  if (req.session && req.session.passport && req.session.passport.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = loggedIn;
