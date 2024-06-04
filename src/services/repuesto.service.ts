import { RepuestoModel } from "../data/mongodb/models/repuesto.model";
import { CreateRepuestoDto } from "../domain/dtos/repuesto/create-repuesto.dto";
import { UpdateRepuestoDto } from "../domain/dtos/repuesto/update-repuesto.dto";
import { RepuestoEntity } from "../domain/entities/repuesto.entity";
import { CustomError } from "../domain/errors/custom.error";
import { RepuestoMaper } from "../domain/mapers/repuestoMaper";

export class RepuestoService{
    async create (createRepuestoDto:CreateRepuestoDto):Promise<RepuestoEntity>{
        try {

            const Repuesto = await RepuestoModel.create(createRepuestoDto);
            if(!Repuesto) throw CustomError.badRequest("add Repuesto failed")
            await Repuesto.save();
            return RepuestoMaper.fromEntity(Repuesto);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateRepuestoDto:UpdateRepuestoDto, id:string):Promise<RepuestoEntity>{
        try {
            const Repuesto = await RepuestoModel.findByIdAndUpdate(id, {...updateRepuestoDto});
            if(!Repuesto) throw CustomError.badRequest("update Repuesto failed")
            await Repuesto.save();
            return RepuestoMaper.fromEntity(Repuesto);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(id:string):Promise<RepuestoEntity>{
        try {
            const Repuesto = await RepuestoModel.findByIdAndDelete({_id:id});
            if(!Repuesto) throw CustomError.badRequest("Repuesto don't exist")
            return RepuestoMaper.fromEntity(Repuesto);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(id:string):Promise<RepuestoEntity>{
        try {
            const Repuesto = await RepuestoModel.findById({id});
            if(!Repuesto) throw CustomError.badRequest("Repuesto don't exist")
            return RepuestoMaper.fromEntity(Repuesto);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}