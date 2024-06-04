import { ServicioModel } from "../data/mongodb/models/servicio.model";
import { CreateServicioDto } from "../domain/dtos/servicio/create-servicio.dto";
import { UpdateServicioDto } from "../domain/dtos/servicio/update-servicio.dto";
import { ServicioEntity } from "../domain/entities/servicio.entity";
import { CustomError } from "../domain/errors/custom.error";
import { ServicioMaper } from "../domain/mapers/servicioMaper";

export class ServicioService{
    async create (createServicioDto:CreateServicioDto):Promise<ServicioEntity>{
        try {

            const Servicio = await ServicioModel.create(createServicioDto);
            if(!Servicio) throw CustomError.badRequest("add Servicio failed")
            await Servicio.save();
            return ServicioMaper.fromEntity(Servicio);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateServicioDto:UpdateServicioDto, id:string):Promise<ServicioEntity>{
        try {
            const Servicio = await ServicioModel.findByIdAndUpdate(id, {...updateServicioDto});
            if(!Servicio) throw CustomError.badRequest("update Servicio failed")
            await Servicio.save();
            return ServicioMaper.fromEntity(Servicio);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(id:string):Promise<ServicioEntity>{
        try {
            const Servicio = await ServicioModel.findByIdAndDelete({_id:id});
            if(!Servicio) throw CustomError.badRequest("Servicio don't exist")
            return ServicioMaper.fromEntity(Servicio);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(id:string):Promise<ServicioEntity>{
        try {
            const Servicio = await ServicioModel.findById({_id:id});
            if(!Servicio) throw CustomError.badRequest("Servicio don't exist")
            return ServicioMaper.fromEntity(Servicio);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}