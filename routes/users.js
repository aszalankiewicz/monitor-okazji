var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourcdddddddddde');
});

router.get('/test', function(req, res, next) {
  res.send('respond with a test');
});

module.exports = router;
