const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/cryptofolio"

const connect = () => {
	mongoose.connect(connectionString)
		.then(() => { console.log(`Connected to mongodb at : ${connectionString}`)})
		.catch(err => { console.log(err)});
};

module.exports = connect;