import jwt from "jsonwebtoken";

const generarJWT = async (nombreUsuario, email) => {
  try {
    //generar payload
    const payload = { nombreUsuario, email };
    //firmar token
    //se envia payload, clave secreta .env, y tiempo de expiracion
    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.error(error);
    throw new error("No es pudo generar el token");
  }
};

export default generarJWT;
