import { Request, Response } from "express";
import { HandleError } from "../../domain/errors/handle.error";
import { Validators } from "../../config/validator";
import { ClienteService } from "../../services/cliente.service";
import { CreateClienteDto } from "../../domain/dtos/cliente/create-cliente.dto";
import { UpdateClienteDto } from "../../domain/dtos/cliente/update-cliente.dto";

export class ClienteController{
    constructor(private readonly clienteServices:ClienteService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createClienteDto] = CreateClienteDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.clienteServices.create(createClienteDto!)
        .then(Cliente => res.json(Cliente))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateClienteDto] = UpdateClienteDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.clienteServices.update(updateClienteDto!, id!)
        .then(Cliente => res.json(Cliente))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.clienteServices.delete(id!)
        .then(Cliente => res.json(Cliente))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.clienteServices.findOne(id!)
        .then(Cliente => res.json(Cliente))
        .catch(error => HandleError.error(error, res))  
    }

}