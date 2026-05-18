import {Router} from 'express'
import InstagramController, { validators } from '../controllers/instagram.controller.js'

const router = Router()

// GET /instagram/recent - Get recent instagram posts with optional filters
router.get('/recent', validators.validateGetRecentPosts, InstagramController.getRecentPosts)

// GET /instagram/colophon - Get predefined posts for colophon grid
router.get('/colophon', validators.validateGetColophonPosts, InstagramController.getColophonPosts)

export default router
