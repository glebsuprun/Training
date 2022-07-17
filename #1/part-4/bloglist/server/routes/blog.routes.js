import Router from "express"
import BlogController from "../controllers/BlogController.js"

const router = new Router()

router.post('/blogs',  BlogController.create)
router.get('/blogs',  BlogController.getAll)

export default router
