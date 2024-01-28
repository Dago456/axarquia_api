import { Router } from "express";
import * as operariosController from '../controllers/operariosController'

const router = Router();

router.get('/', operariosController.obtenerOperarios )

router.get('/:id', operariosController.obtenerOperarioPorId )

router.post('/', operariosController.crearOperario )

router.put('/:id', operariosController.actualizarOperarioPorId)

router.delete('/:id', operariosController.eliminarOperarioPorId )

export default router;

