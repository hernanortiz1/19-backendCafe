export const test = (req, res,)=>{
    res.status(200)
    res.send("primera prueba desde el backend")
    
}

export const leerProductos = (req, res)=>{

}

export const crearProductos = async (req, res) =>{
    try {
        //recibit obj que tengo que agregagr a BD
        console.log(req.body)
    //validar datos del obj

    //guardar obj en BD

    //enviar respuesta
    } catch (error) {
        console.error(error);
    }
    
}