import { RepuestoEntity } from "../entities/repuesto.entity"


export class RepuestoMaper{
    static fromEntity(Object:{[key:string]:any}):RepuestoEntity{
        const {id, codigo, descripcion, precio} = Object
        if(!codigo) throw Error('codigo is required')
        if(!precio) throw Error('precio is required')
        return new RepuestoEntity(id, codigo, descripcion, precio)
    }
}