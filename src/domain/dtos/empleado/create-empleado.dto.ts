export class CreateEmpleadoDto{
    constructor(
        public nombre:string,
        public apellido:string,
        public cargo:string,
        public especialidad:string,
    ){}

    static create(object:{[key:string]:any}):[string?, CreateEmpleadoDto?]{
        const {nombre, apellido, cargo, especialidad} = object
        if(!nombre) return['nombre is required', undefined]
        if(!apellido) return['apellido is required', undefined]
        return [undefined, new CreateEmpleadoDto(nombre, apellido, cargo, especialidad)]
    }
}