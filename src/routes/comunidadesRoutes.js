import { Router } from "express";
import * as productsController from '../controllers/comunidadesController'

const router = Router();

router.get('/', productsController.obtenerComunidades )

router.get('/buscar', comunidadesController.buscarComunidadesPorNombre);

router.get('/:id', productsController.obtenerComunidadPorId )

router.post('/', productsController.crearComunidad )

router.put('/:id', productsController.actualizarComunidadPorId)

router.delete('/:id', productsController.eliminarComunidadPorId )

export default router;

