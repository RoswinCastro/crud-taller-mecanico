import { ServicioEntity } from "../entities/servicio.entity"

export class ServicioMaper{
    static fromEntity(Object:{[key:string]:any}):ServicioEntity{
        const {id, descripcion, precio, duracion} = Object
        if(!descripcion) throw Error('descripcion is required')
        if(!precio) throw Error('precio is required')
        return new ServicioEntity(id, descripcion, precio, duracion)
    }
}