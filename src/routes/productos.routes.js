import { Router } from "express";
import { test } from "../controllers/productos.controllers.js";

//enrutador
const router = Router()

//direccion de la ruta y funcion(request(solicitud), res(respuesta), next(cuando se hace logica y necesita que siga con la funcion) )
router.route("/test").get(test)

export default router;