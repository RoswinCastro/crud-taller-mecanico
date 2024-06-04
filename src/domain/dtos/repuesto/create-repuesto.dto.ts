export class CreateRepuestoDto{
    constructor(
        public codigo:string,
        public descripcion:string,
        public precio:string,
    ){}

    static create(object:{[key:string]:any}):[string?, CreateRepuestoDto?]{
        const {codigo, descripcion, precio} = object
        if(!codigo) return['codigo is required', undefined]
        if(!precio) return['precio is required', undefined]
        return [undefined, new CreateRepuestoDto(codigo, descripcion, precio)]
    }
}