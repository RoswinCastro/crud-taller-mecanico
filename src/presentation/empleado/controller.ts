import { Response, Request } from "express";
import { Validators } from "../../config/validator";
import { HandleError } from "../../domain/errors/handle.error";
import { EmpleadoService } from "../../services/empleado.service";
import { UpdateEmpleadoDto } from "../../domain/dtos/empleado/update-empleado.dto";
import { CreateEmpleadoDto } from "../../domain/dtos/empleado/create-empleado.dto";




export class EmpleadoController{
    constructor(private readonly empleadoServices:EmpleadoService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createEmpleadoDto] = CreateEmpleadoDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.empleadoServices.create(createEmpleadoDto!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateEmpleadoDto] = UpdateEmpleadoDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.empleadoServices.update(updateEmpleadoDto!, id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.empleadoServices.delete(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.empleadoServices.findOne(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))  
    }

}