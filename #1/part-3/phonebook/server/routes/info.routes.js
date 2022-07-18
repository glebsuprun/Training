import Router from 'express'
import InfoController from '../controllers/InfoController.js'

const router = new Router()

router.get('/info', InfoController.getInfo)

export default router
