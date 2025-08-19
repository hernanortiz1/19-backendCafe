import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("primera prueba desde el backend");
};
/*
puedo tener uno o mas archivos que tienen la logica 
del backend */
export const leerProductos = async (req, res) => {
  try {
    //buscar todos los prod en BD
    const listaProductos = await Producto.find({});
    //enviar respuesta al front
    res.status(200).json(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error  al leer un producto" });
  }
};

export const leerProductosPorId = async (req, res) => {
  try {
    //obtener el parametro del req
    //pedir a mongoose que encuentre el prod
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //constestar el front
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el producto" });
  }
};

export const borrarProductoPorId = async (req, res) => {
  try {
    //buscar el prod por id y luego eliminar
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //responder front
    res.status(200).json({mensaje: "Producto eliminado con exito"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar el producto" });
  }
};

export const crearProductos = async (req, res) => {
  try {
    //recibir obj que tengo que agregagr a BD

    //validar datos del obj

    //guardar obj en BD
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save(); //guarda el obj en la BD
    //enviar respuesta
    res.status(201).json({ mensaje: "el producto fue creado exitosamente" }); //representa que el prod fue creado
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};
