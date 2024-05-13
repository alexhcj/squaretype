import { Router } from 'express'
import TwitterController from '../controllers/twitter.controller.js'

const router = Router()

router.get('/', TwitterController.getTwitter)

export default router
