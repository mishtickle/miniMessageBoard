var express = require('express');
var router = express.Router();
const pool = require("../db/pool")
const controller = require("../controllers/controller.js")

/* GET home page. */
router.get('/', controller.getMessages);

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Send Message' });
});

router.post('/new', function(req,res,next){
  console.log(req.body);
  pool.query("INSERT INTO messages (message, name, date) VALUES ($1, $2, $3)", [req.body.message, req.body.author, new Date()]);
  res.redirect('/')
});
module.exports = router;