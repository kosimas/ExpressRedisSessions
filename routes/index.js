var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.hello || 'not set');
  let hello = req.session.hello || 'not set';
  res.render('index', { title: process.env.npm_package_name, hello });
});

//set the session variable hello
router.get('/create', (req, res, next) => {
  req.session.hello = 'Hello World!';
  res.redirect('/');
});

//destroys the session and will unset the req.session property.
router.get('/destroy', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
