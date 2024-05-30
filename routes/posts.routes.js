import Router from 'express'
import PostsController from '../controllers/posts.controller.js'

const router = Router()

router.get('/', PostsController.getPosts)
router.get('/categories', PostsController.getPostsCategories)
router.get('/by-category', PostsController.getPostsByCategory)
router.get('/:slug', PostsController.getPostBySlug)
router.get('/switch/:slug', PostsController.getPostsToSwitch)

export default router
