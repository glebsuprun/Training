import Router from 'express'
import LoginController from '../controllers/LoginController.js'

const router = new Router()

router.post('/',  LoginController.signIn)

export default router
