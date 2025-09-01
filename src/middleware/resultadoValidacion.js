// si hay errores o si no hay errores tiene funciones para saber que hacer
import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) =>{
    const errores = validationResult(req)
    // errores.isEmpty() si es true no hay errores de validacion
    if(!errores.isEmpty()){
        return res.status(400).json(errores.array())
    }
    next()
}
export default resultadoValidacion

