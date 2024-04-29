import { Router} from "express";
import * as registrarSalController from '../controllers/registrarSalController'

const router = Router();

router.get('/', registrarSalController.obtenerRegistroSal )

router.get('/:id', registrarSalController.obtenerRegistroSalPorId)

router.post('/', registrarSalController.crearRegistroSal)

router.put('/:id', registrarSalController.actualizarRegistroSalPorId)

router.delete('/:id', registrarSalController.eliminarRegistroSalPorId)

export default router;