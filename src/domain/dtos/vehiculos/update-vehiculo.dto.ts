export class UpdateVehiculoDto{
    constructor(
        public id: string,
        public matricula:string,
        public marca:string,
        public modelo:string,
        public año:string,
        public kilometraje:string,
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateVehiculoDto?]{
        const {id, matricula, marca, modelo, año, kilometraje} = object
        if(!matricula) return['matricula is required', undefined]
        return [undefined, new UpdateVehiculoDto(id, matricula, marca, modelo, año, kilometraje)]
    }
}
