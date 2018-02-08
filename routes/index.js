var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

router.get('/auth/facebook', passport.authenticate(
  'facebook',
  { scope: ['email']}
));

router.get('/auth/facebook/callback', passport.authenticate(
  'facebook',
  {
    successRedirect : '/credits',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;