import { Router } from "express";
import * as partesController from '../controllers/partesController'

const router = Router();

router.get('/', partesController.obtenerPartes )

router.get('/:id', partesController.obtenerPartesPorId )

router.post('/', partesController.crearPartes )

router.put('/:id', partesController.actualizarPartesPorId)

router.delete('/:id', partesController.eliminarPartesPorId )

export default router;

