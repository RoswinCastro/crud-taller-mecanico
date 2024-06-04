import { VehiculoEntity } from "../entities/vehiculo.entity"



export class VehiculoMaper{
    static fromEntity(Object:{[key:string]:any}):VehiculoEntity{
        const {id, matricula, marca, modelo, año, kilometraje} = Object
        if(!matricula) throw Error('matricula is required')
        return new VehiculoEntity(id, matricula, marca, modelo, año, kilometraje)
    }
}