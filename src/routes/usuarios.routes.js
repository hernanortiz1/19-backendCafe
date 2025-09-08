import { Router } from "express";
import {
  leerUsuarios,
  crearUsuario,
  login,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../middleware/validarUsuario.js";

const router = Router();
router.route("/").get(leerUsuarios).post(validacionUsuario ,crearUsuario);
router.route("/login").post(login)
export default router;
