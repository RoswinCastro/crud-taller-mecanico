export class UpdateEmpleadoDto{
    constructor(
        public id: string,
        public nombre:string,
        public apellido:string,
        public cargo:string,
        public especialidad:string,
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateEmpleadoDto?]{
        const {id, nombre, apellido, cargo, especialidad} = object
        if(!nombre) return['nombre is required', undefined]
        if(!apellido) return['apellido is required', undefined]
        return [undefined, new UpdateEmpleadoDto(id, nombre, apellido, cargo, especialidad)]
    }
}