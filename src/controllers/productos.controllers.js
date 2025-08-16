import Producto from "../models/producto.js"

export const test = (req, res,)=>{
    res.status(200)
    res.send("primera prueba desde el backend")
    
}
/*
puedo tener uno o mas archivos que tienen la logica 
del backend */
export const leerProductos = (req, res)=>{

}

export const crearProductos = async (req, res) =>{
    try {
        //recibir obj que tengo que agregagr a BD
        console.log(req.body)
    //validar datos del obj

    //guardar obj en BD
        const nuevoProducto = new Producto(req.body)
        await nuevoProducto.save(); //guarda el obj en la BD
    //enviar respuesta
    res.status(201).json({mensaje: "el producto fue creado exitosamente"}) //representa que el prod fue creado
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Error al crear el producto"})
    }
    
}