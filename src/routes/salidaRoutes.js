import { Router} from "express";
import * as salidaController from '../controllers/salidaController'

const router = Router();

router.get('/', salidaController.obtenerSalidas )

router.get('/:id', salidaController.obtenerSalidaPorId)

router.post('/', salidaController.crearSalida)

router.put('/:id', salidaController.actualizarSalidaPorId)

router.delete('/:id', salidaController.eliminarSalidaPorId)

export default router;