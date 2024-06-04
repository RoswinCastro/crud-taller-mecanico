export class CreateServicioDto{
    constructor(
        public descripcion:string,
        public precio:string,
        public duracion:string,
    ){}

    static create(object:{[key:string]:any}):[string?, CreateServicioDto?]{
        const {descripcion, precio, duracion} = object
        if(!descripcion) return['descripcion is required', undefined]
        if(!precio) return['precio is required', undefined]
        return [undefined, new CreateServicioDto(descripcion, precio, duracion)]
    }
}