const { Schema, model } = require('mongoose')

const post = new Schema({
	title: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	article: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	views: {
		type: Number,
	},
})

module.exports = model('Post', post)
