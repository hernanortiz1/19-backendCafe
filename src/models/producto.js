/*como va a ser el dato del producto */
import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  //tiene que coincidir con los nombres del obj
  nombreProducto: {
    type: String,
    required: true,
    minLenght: 2,
    maxLenght: 100,
    unique: true, //para que sea un producto unico y que no haya 2 con el mismo nombre
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 1000000,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Infusiones", "Batidos", "Dulce", "Salado"], //lo que esta en el value
  },
  imagen: {
    type: String,
    required: true,
    validate: (valor) => {
      return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
        valor
      );
    },
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLenght: 5,
    maxLenght: 250,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLenght: 10,
    maxLenght: 500,
  },
});

const Producto = mongoose.model("producto", productoSchema);
//nombre de la coleccion es producto y mongo adiciona una S, segundo param el formato que tiene

export default Producto;
// representa el modelo de producto, un objeto que me deja usar metodos para hacer transaciones con la BD, querys
