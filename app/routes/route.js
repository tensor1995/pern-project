var express = require('express');
var router = express.Router();
const bodyparser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;