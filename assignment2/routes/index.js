var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.get('/directory', function(req, res, next) {
  res.render('directory', { title: 'directory' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});


router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});

router.get('/directory', function(req, res, next) {
  res.render('directory', { title: 'directory' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'registration' });
});


router.get('/add-directory', function(req, res, next) {
  res.render('add-directory', { title: 'add-directory' });
});





module.exports = router;
