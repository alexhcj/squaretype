const {Router} = require('express')
const router = Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()

        res.send(posts)
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, try again please'})
    }
})

module.exports = router