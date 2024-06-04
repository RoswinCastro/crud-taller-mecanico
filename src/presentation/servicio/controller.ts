import { Response, Request } from "express";
import { Validators } from "../../config/validator";
import { HandleError } from "../../domain/errors/handle.error";
import { ServicioService } from "../../services/servicio.service";
import { CreateServicioDto } from "../../domain/dtos/servicio/create-servicio.dto";
import { UpdateServicioDto } from "../../domain/dtos/servicio/update-servicio.dto";



export class ServicioController{
    constructor(private readonly servicioServices:ServicioService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createServicioDto] = CreateServicioDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.servicioServices.create(createServicioDto!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateServicioDto] = UpdateServicioDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.servicioServices.update(updateServicioDto!, id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.servicioServices.delete(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.servicioServices.findOne(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))  
    }

}