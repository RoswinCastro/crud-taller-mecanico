
export class CreateVehiculoDto{
    constructor(
        public matricula:string,
        public marca:string,
        public modelo:string,
        public año:string,
        public kilometraje:string,
    ){}

    static create(object:{[key:string]:any}):[string?, CreateVehiculoDto?]{
        const {matricula, marca, modelo, año, kilometraje} = object
        if(!matricula) return['matricula is required', undefined]
        return [undefined, new CreateVehiculoDto(matricula, marca, modelo, año, kilometraje)]
    }
}
