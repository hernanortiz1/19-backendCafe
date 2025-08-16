import { Router } from "express";
import { crearProductos, leerProductos, test } from "../controllers/productos.controllers.js";

/*TODOS LOS ARCHIVOS DE RUTAS SOLO DEBEN TENER informacion

*/
//enrutador
const router = Router()

//direccion de la ruta y funcion(request(solicitud), res(respuesta), next(cuando se hace logica y necesita que siga con la funcion) )
router.route("/test").get(test)

//get post put delete
router.route("/").get(leerProductos).post(crearProductos)
export default router;