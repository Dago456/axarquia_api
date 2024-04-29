import { Router} from "express";
import * as registrarEntController from '../controllers/registrarEntController'

const router = Router();

router.get('/', registrarEntController.obtenerRegistroEnt )

router.get('/:id', registrarEntController.obtenerRegistroEntPorId)

router.post('/', registrarEntController.crearRegistroEnt)

router.put('/:id', registrarEntController.actualizarRegistroEntPorId)

router.delete('/:id', registrarEntController.eliminarRegistroEntPorId)

export default router;