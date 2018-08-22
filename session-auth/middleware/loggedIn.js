function loggedIn(req, res, next) {
  if (req.user) {
    if (req.path === '/login') {
      res.redirect('/');
    } else {
      next();
    }
  } else {
    if (req.path === '/') {
      res.redirect('/login');
    } else {
      next();
    }
  }
}

module.exports = loggedIn;
