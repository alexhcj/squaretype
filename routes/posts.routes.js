import { Router } from 'express'
import PostsController, { validators } from '../controllers/posts.controller.js'

const router = Router()

// GET /posts - Get all posts with optional filters
router.get(
	'/',
	validators.validateGetPosts,
	PostsController.getPosts
)

// GET /posts/categories - Get posts grouped by category
router.get(
	'/categories',
	validators.validateGetPostsCategories,
	PostsController.getPostsCategories
)

// GET /posts/category - Get posts filtered by category
router.get(
	'/category',
	validators.validateGetPostsByCategory,
	PostsController.getPostsByCategory
)

// GET /posts/:slug - Get single post by slug
router.get(
	'/:slug',
	validators.validateGetPostBySlug,
	PostsController.getPostBySlug
)

// GET /posts/:slug/switch - Get previous and next posts for navigation
router.get(
	'/:slug/switch',
	validators.validateGetPostsToSwitch,
	PostsController.getPostsToSwitch
)

export default router