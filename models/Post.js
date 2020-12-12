const { Schema, model } = require('mongoose')

const post = new Schema({
    category: {
        type: String,
        required: true,
    },
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
    },
	views: {
        type: Number,
	},
	shares: {
        type: Number,
	},
})

module.exports = model('Post', post)
