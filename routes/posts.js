const express = require('express');
const router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.send('/posts');
});

router.get('/new', function(req, res, next) {
  res.send('/posts/new');
});


module.exports = router;