import { Request, Response } from "express";
import { CreateRepuestoDto } from "../../domain/dtos/repuesto/create-repuesto.dto";
import { HandleError } from "../../domain/errors/handle.error";
import { RepuestoService } from "../../services/repuesto.service";
import { Validators } from "../../config/validator";
import { UpdateRepuestoDto } from "../../domain/dtos/repuesto/update-repuesto.dto";


export class RepuestoController{
    constructor(private readonly repuestoServices:RepuestoService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createRepuestoDto] = CreateRepuestoDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.repuestoServices.create(createRepuestoDto!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateRepuestoDto] = UpdateRepuestoDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.repuestoServices.update(updateRepuestoDto!, id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.repuestoServices.delete(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.repuestoServices.findOne(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))  
    }

}