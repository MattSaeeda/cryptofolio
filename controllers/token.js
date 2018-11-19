const Portfolio = require('../models/portfolios');

exports.create = function (req, res, next) {

	res.locals.portfolio= {
		ownerName: "",
		portfolioName: "",
	};
	res.render('users');
};

exports.index = function (req, res, next) {
	
	Portfolio.find().exec((err, portfolios) => {
		res.render('users')
	});
};