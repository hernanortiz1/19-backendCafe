import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Producto from "../models/producto.js";
//cada paso que quiero validar del body, luego se ejecuta validacion para contestar los mensj de error
const validacionProducto = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres")
    .custom(async (valor, { req }) => {
      // find() devuelve coleccion de productos, find({agrego por ej una categoria})
      const productoExistente = await Producto.findOne({
        nombreProducto: valor
      });
      if (!productoExistente) return true
      //verificar si es PUT
      if(req.params?.id && productoExistente._id.toString() === req.params.id) return true

      throw new Error("ya existe un producto con ese nombre");
    }),
  body("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((valor) => {
      if (valor >= 50 && valor <= 1000000) {
        return true;
      } else {
        // throw crea un nuevo error
        throw new Error("El precio debe estar entre 50 y 1.000.000");
      }
    }),
  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un campo obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/)
    .withMessage(
      "La imagen debe ser una URL valida y terminar en jpg, jpeg, png, webp"
    ),
  body("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligarorio")
    .isIn(["Infusiones", "Batidos", "Dulce", "Salado"])
    .withMessage("La categoria debe ser: Infusiones, Batidos, Dulce, Salado"),
  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es obligatoria")
    .isLength({ min: 5, max: 250 })
    .withMessage("La descripcion breve debe tener entre 5 y 250 caracteres"),
  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia es obligatoria")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripcion amplia debe tener entre 10 y 500 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
