const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.userId) {
    // The user is not logged in, so redirect them to the login page
    res.redirect('/auth/login');
  }

  res.render('index', { title: 'Home Page' });
});

module.exports = router;
