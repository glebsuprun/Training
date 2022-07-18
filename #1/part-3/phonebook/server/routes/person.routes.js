import Router from 'express';
import PersonController from '../controllers/PersonController.js';

const router = new Router()

router.get('/persons', PersonController.getAll)
router.get('/persons/:id', PersonController.getOne)
router.post('/persons', PersonController.create)
router.put('/persons/:id', PersonController.update)
router.delete('/persons/:id', PersonController.delete)

export default router
