import mongoose from "mongoose";


const empleadoSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required: [true, 'nombre Is Required']
    },

    apellido: {
        type:String,
        required:[true, 'apellido is required']
    },

    cargo:{
        type:String,
    },

    especialidad:{
        type:String
    }
})

export const EmpleadoModel = mongoose.model('empleado',empleadoSchema)