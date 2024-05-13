import Router from 'express'
import InstagramController from '../controllers/instagram.controller.js'

const router = Router()

router.get('/', InstagramController.getPosts)

export default router
