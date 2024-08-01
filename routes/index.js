var express = require('express');
var router = express.Router();
const pool = require("../db/pool")

const messages = await pool.query("SELECT * FROM messages");
console.log(messages)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
})

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Send Message' });
});

router.post('/new', function(req,res,next){
  pool.query("INSERT INTO messages (message) VALUES ($1) ($2) ($3)", [req.body.message][req.body.author][new Date()]);
  res.redirect('/')
});
module.exports = router;
