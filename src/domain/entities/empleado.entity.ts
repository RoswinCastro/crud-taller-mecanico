export class EmpleadoEntity{
    constructor(
       public id: string,
       public nombre: string,
       public apellido:string,
       public cargo:string,
       public especialidad:number,
    ){};
}