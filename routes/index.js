var express = require('express');
var router = express.Router();
var postsController = require('../controllers/token');

/* GET home page. */
router.get('/routes', function(req, res, next) {
  res.render('index', { title: 'CRIPTOFOLIO' });
});
//to add a new portfolio
router.post('/', postController.create);

//to accept portfolio's name and user's name and dierct them to users view page
router.get('/', postController.index);


module.exports = router;
