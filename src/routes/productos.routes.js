import { Router } from "express";
import { borrarProductoPorId, crearProductos, editarProductoPorId, leerProductos, leerProductosPorId, test } from "../controllers/productos.controllers.js";
import validacionProducto from "../middleware/validarProducto.js";
import verificarJWT from "../middleware/verificarJWT.js";

/*TODOS LOS ARCHIVOS DE RUTAS SOLO DEBEN TENER informacion

*/
//enrutador
const router = Router()

//direccion de la ruta y funcion(request(solicitud), res(respuesta), next(cuando se hace logica y necesita que siga con la funcion) )
router.route("/test").get(test)

//get post put delete
router.route("/").get(leerProductos).post([verificarJWT, validacionProducto],crearProductos)
//si le agrego : es un parametro
router.route("/:id").get(leerProductosPorId).delete(verificarJWT ,borrarProductoPorId).put([verificarJWT, validacionProducto],editarProductoPorId)

export default router;