import mongoose from "mongoose";


const vehiculoSchema = new mongoose.Schema({
    matricula: {
        type:String,
        required: [true, 'matricula Is Required']
    },

    marca: {
        type:String,
        required:[true, 'marca is required']
    },

    modelo:{
        type:String,
    },

    año:{
        type:String
    },

    kilometraje:{
        type:String
    }
})

export const VehiculoModel = mongoose.model('vehiculo',vehiculoSchema)