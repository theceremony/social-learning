var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/experiments', function(req, res) {
  res.render('index', { title: 'experiments' });
});

module.exports = router;