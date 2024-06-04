export class ClienteEntity{
    constructor(
       public id: string,
       public nombre: string,
       public apellido:string,
       public direccion:string,
       public telefono?:number,
       public correo?:string
    ){};
}