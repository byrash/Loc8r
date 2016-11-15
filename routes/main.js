// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
var ctrl = require('../app_server/controllers/main.js')

module.exports = function(app){
  app.get('/',ctrl)
};