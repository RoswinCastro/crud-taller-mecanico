
export class CreateClienteDto{
    constructor(
        public nombre:string,
        public apellido:string,
        public direccion:string,
        public telefono:number,
        public correo:string,
    ){}

    static create(object:{[key:string]:any}):[string?, CreateClienteDto?]{
        const {nombre, apellido, direccion, telefono, correo} = object
        if(!nombre) return['nombre is required', undefined]
        if(!apellido) return['apellido is required', undefined]
        return [undefined, new CreateClienteDto(nombre, apellido, direccion, +telefono, correo)]
    }
}
