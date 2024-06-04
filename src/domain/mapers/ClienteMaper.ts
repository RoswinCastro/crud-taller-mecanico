import { ClienteEntity } from "../entities/cliente.entity"



export class ClienteMaper{
    static fromEntity(Object:{[key:string]:any}):ClienteEntity{
        const {id, nombre, apellido, direccion, telefono, correo} = Object
        if(!nombre) throw Error('nombre is required')
        if(!apellido) throw Error('apellido is required')
        return new ClienteEntity(id, nombre, apellido, direccion, telefono, correo)
    }
}