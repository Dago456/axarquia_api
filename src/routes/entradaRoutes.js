import { Router} from "express";
import * as entradaController from '../controllers/entradaController'

const router = Router();

router.get('/', entradaController.obtenerEntradas )

router.get('/:id', entradaController.obtenerEntradaPorId)

router.post('/', entradaController.crearEntrada)

router.put('/:id', entradaController.actualizarEntradaPorId)

router.delete('/:id', entradaController.eliminarEntradaPorId)

export default router;