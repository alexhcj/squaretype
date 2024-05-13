import Router from 'express'
import CategoriesController from '../controllers/categories.controller.js'

const router = Router()

router.get('/', CategoriesController.getCategories)
router.get('/:category', CategoriesController.getCategory)
router.put('/:category', CategoriesController.updateCategory)

export default router
