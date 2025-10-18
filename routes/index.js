var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
//routing for do something follow method
//request parameter / path variable --> router.get('api/user/:id'), (req, res)