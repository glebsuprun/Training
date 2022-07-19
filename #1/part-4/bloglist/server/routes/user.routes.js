import Router from 'express'
import UserController from '../controllers/UserController.js'

const router = new Router()

router.post('/',  UserController.create)
router.get('/',  UserController.get)

export default router
