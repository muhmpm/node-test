var express = require('express');
var router = express.Router();

/* GET form. */
router.get('/', function(req, res) {
  res.render('form', {title:'My funky form'});
});

module.exports = router;