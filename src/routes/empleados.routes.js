import {Router} from 'express';
import {listarEmpleados,mostrarEmpleado, crearEmpleado, modificarEmpleado, eliminarEmpleado}  from '../controllers/empleados.controllers.js';
const router = Router();

router.get('/empleados', listarEmpleados)
router.get('/empleados/:id', mostrarEmpleado)
router.post('/empleados', crearEmpleado)
// PUT ES PARA MODIFICAR EL REGISTRO COMPLETO
//router.put('/empleados/:id', modificarEmpleado)
//PATCH ES PARA MODIFICAR ALGUNOS DE LOS DATOS DEL REGISTRO.
router.patch('/empleados/:id', modificarEmpleado)
router.delete('/empleados/:id', eliminarEmpleado)

export default router;