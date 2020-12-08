const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const postsRoute = require('./routes/posts.routes')
const cors = require('cors')

const app = express()

app.use(cors({  credentials: true }))
app.use(express.json({ extended: true }))
app.use('/static', express.static('public'))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/posts', postsRoute)

const PORT = config.get('port') || 3000

async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`)
		})
	} catch (e) {
		console.log('Server error', e.message)
		process.exit(1)
	}
}

start()
