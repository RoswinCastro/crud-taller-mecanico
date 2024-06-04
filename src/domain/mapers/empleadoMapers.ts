import { EmpleadoEntity } from "../entities/empleado.entity"


export class EmpleadoMaper{
    static fromEntity(Object:{[key:string]:any}):EmpleadoEntity{
        const {id, nombre, apellido, cargo, especialidad} = Object
        if(!nombre) throw Error('name is required')
        if(!apellido) throw Error('apellido is required')
        return new EmpleadoEntity(id, nombre, apellido, cargo, especialidad)
    }
}