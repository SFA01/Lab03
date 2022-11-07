var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sara', function(req, res, next) {
  res.render('sara', { title: 'Sara' });
});

router.get('/nivaldo', function(req, res, next) {
  res.render('nivaldo', { title: 'Nivaldo' });
});

router.get('/simone', function(req, res, next) {
  res.render('simone', { title: 'Simone' });
});




module.exports = router;

