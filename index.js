const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const postsRoute = require('./routes/posts.routes')
const cors = require('cors')
const jsonRoute = require('./routes/json.routes')

const PORT = config.get('port') || 3000
const app = express()

app.use(cors({  credentials: true }))
app.use(express.json({ extended: true }))
app.use('/static', express.static('public'))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/posts', postsRoute)
app.use('/api/json', jsonRoute)

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

// TODO: different images sizes in different components
// TODO: posts grid styling

// TODO: resize illustrations to 380x220 & 80x80
// TODO: add illustrations to public/images
// TODO: add more posts to mongoodb

// Boxed Hero - List Layout + Time Line ? another routes request
// Share Buttons - Bottom
// Related Posts - Grid

// DONE: 1. Fake json generator
// DONE: 2. static images different sizes
//          80x80
//          380x220
//          3840x2544
//          № 6 extra 1920x1080
// DONE: 3. illustrations creator!
// DONE: 4. search more illustrations to 50

// IDEA: generator multiple image sizes. cut online, create field paths (80-80, 380, 320) and so on...