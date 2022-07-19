import Router from 'express'
import BlogController from '../controllers/BlogController.js'

const router = new Router()

router.post('/',  BlogController.create)
router.get('/',  BlogController.getAll)

export default router
