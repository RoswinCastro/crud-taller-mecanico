import mongoose from "mongoose";


const repuestoSchema = new mongoose.Schema({
    codigo: {
        type:String,
        required: [true, 'codigo Is Required']
    },

    descripcion: {
        type:String,
    },

    precio:{
        type:String,
    }
})

export const RepuestoModel = mongoose.model('repuesto',repuestoSchema)