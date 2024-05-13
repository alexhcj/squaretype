import Router from 'express'
import PostsController from '../controllers/posts.controller.js'

const router = Router()

router.get('/', PostsController.getPosts)
router.get('/categories', PostsController.getPostsCategories)
router.get('/:slug', PostsController.getPostBySlug)

export default router
