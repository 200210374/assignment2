



// server.js

var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'contact' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'about' });
});
router.get('/directory', function(req, res, next) {
    res.render('directory', { title: 'directroy' });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'services' });
});


router.get('/home', function(req, res, next) {
    res.render('home', { title: 'home' });
});
