var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users/', function (req, res, next) {
  req.params.cool ? res.send('it worked') : res.send('respond with a resource');
});



module.exports = router;
