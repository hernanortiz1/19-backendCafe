import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) => {
  try {
    //extraer token de solicitud
    const token = req.headers["x-token"];
    console.log(token);

    //verificar que envien token
    if (!token) {
      return res
        .status(401)
        .json({ mensaje: "no se envio el token en la solicitud" });
    }

    //verificar veracidad de token
    const payload = jwt.verify(token, process.env.SECRET_JWT);
   //extraer datos del payload y almacenar en obj req
    req.nombreUsuario = payload.nombreUsuario;
    req.email = payload.email;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ mensaje: "token invalido", error: error.mensaje });
  }
};
export default verificarJWT;
