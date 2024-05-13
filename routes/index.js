import Router from 'express'
import posts from './posts.routes.js'
import mocks from './mocks.routes.js'
import contacts from './contacts.routes.js'
import instagram from './instagram.routes.js'
import categories from './categories.routes.js'
import twitter from './twitter.routes.js'

const routes = Router()

routes.use('/posts', posts)
routes.use('/mocks', mocks)
routes.use('/contacts', contacts)
routes.use('/instagram', instagram)
routes.use('/categories', categories)
routes.use('/twitter', twitter)

export default routes
