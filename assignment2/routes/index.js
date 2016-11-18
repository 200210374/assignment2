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

/*
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
}); */




module.exports = router;
