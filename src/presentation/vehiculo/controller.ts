import { Response, Request } from "express";
import { Validators } from "../../config/validator";
import { VehiculoService } from "../../services/vehiculo.service";
import { CreateVehiculoDto } from "../../domain/dtos/vehiculos/create-vehiculo.dto";
import { HandleError } from "../../domain/errors/handle.error";
import { UpdateVehiculoDto } from "../../domain/dtos/vehiculos/update-vehiculo.dto";



export class VehiculoController{
    constructor(private readonly vehiculoServices:VehiculoService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createVehiculoDto] = CreateVehiculoDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.vehiculoServices.create(createVehiculoDto!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateVehiculoDto] = UpdateVehiculoDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.vehiculoServices.update(updateVehiculoDto!, id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.vehiculoServices.delete(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.vehiculoServices.findOne(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))  
    }

}
