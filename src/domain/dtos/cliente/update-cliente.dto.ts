
export class UpdateClienteDto{
    constructor(
        public id:string,
        public nombre:string,
        public apellido:string,
        public direccion:string,
        public telefono:number,
        public correo:string,
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateClienteDto?]{
        const {id, nombre, apellido, direccion, telefono, correo} = object
        if(!nombre) return['nombre is required', undefined]
        if(!apellido) return['apellido is required', undefined]
        return [undefined, new UpdateClienteDto(id, nombre, apellido, direccion, +telefono, correo)]
    }
}  