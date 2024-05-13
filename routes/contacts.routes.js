import Router from 'express'
import ContactsController from '../controllers/contacts.controller.js'

const router = Router()

router.get('/', ContactsController.getContacts)

export default router
