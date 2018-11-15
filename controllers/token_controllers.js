const Token = require('../models/token');
//var title = "CRYPTOTOKEN";

exports.show = function (req, res, next) {
	
	Token.find().exec((err, posts) => {
		let token = tokens.filter(x => x['slug'] === req.params['slug'])[0];
		res.render('tokens/show', {
			title: tokens['title'],
			token
		})
	});
};