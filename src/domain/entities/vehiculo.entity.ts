export class VehiculoEntity{
    constructor(
        public id:string,
        public matricula:string,
        public marca:string,
        public modelo:string,
        public año:string,
        public kilometraje:string,
    ){};
}