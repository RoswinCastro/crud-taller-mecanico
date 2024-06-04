export class UpdateServicioDto{
    constructor(
        public id:string,
        public descripcion:string,
        public precio:string,
        public duracion:string,
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateServicioDto?]{
        const {id, descripcion, precio, duracion} = object
        if(!descripcion) return['descripcion is required', undefined]
        if(!precio) return['precio is required', undefined]
        return [undefined, new UpdateServicioDto(id, descripcion, precio, duracion)]
    }
}