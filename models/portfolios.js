const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
mongoose.plugin(slug);


let portfolioSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    
    slug: {
        type: String,
        slug: 'title'
    },
    
    portfolioName: {
        type: String,
    },

    tokens: [token]
});

let token = new mongoose.Schema({
    name: string,
    amount: number
})


let portfolioModel = mongoose.model('Portfolio', portfolioSchema);

module.exports = portfolioModel;