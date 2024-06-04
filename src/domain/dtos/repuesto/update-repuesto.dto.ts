export class UpdateRepuestoDto{
    constructor(
        public id: string,
        public codigo:string,
        public descripcion:string,
        public precio:string,
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateRepuestoDto?]{
        const {id, codigo, descripcion, precio} = object
        if(!codigo) return['codigo is required', undefined]
        if(!precio) return['precio is required', undefined]
        return [undefined, new UpdateRepuestoDto(id, codigo, descripcion, precio)]
    }
}