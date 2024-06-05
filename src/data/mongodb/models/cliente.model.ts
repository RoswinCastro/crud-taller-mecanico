import mongoose from "mongoose";


const clienteSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required: [true, 'name Is Required']
    },
    
    apellido: {
        type:String,
        required:[true, 'apellido is required']
    },

    direccion:{
        type:String,
    },

    telefono:{
        type: Number
    },

    correo:{
        type:String
    }
})

export const ClienteModel = mongoose.model('cliente',clienteSchema)