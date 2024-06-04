import mongoose from "mongoose";


const servicioSchema = new mongoose.Schema({
    descripcion: {
        type:String,
        required: [true, 'nombre Is Required']
    },

    precio: {
        type:String,
        required:[true, 'apellido is required']
    },

    duracion:{
        type:String,
    }
})

export const ServicioModel = mongoose.model('servicio',servicioSchema)