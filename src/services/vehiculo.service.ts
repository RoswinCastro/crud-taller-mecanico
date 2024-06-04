import { VehiculoModel } from "../data/mongodb/models/vehiculo.model";
import { CreateVehiculoDto } from "../domain/dtos/vehiculos/create-vehiculo.dto";
import { UpdateVehiculoDto } from "../domain/dtos/vehiculos/update-vehiculo.dto";
import { VehiculoEntity } from "../domain/entities/vehiculo.entity";
import { CustomError } from "../domain/errors/custom.error";
import { VehiculoMaper } from "../domain/mapers/vehiculoMaper";

export class VehiculoService{
    async create (createVehiculoDto:CreateVehiculoDto):Promise<VehiculoEntity>{
        try {

            const Vehiculo = await VehiculoModel.create(createVehiculoDto);
            if(!Vehiculo) throw CustomError.badRequest("add Vehiculo failed")
            await Vehiculo.save();
            return VehiculoMaper.fromEntity(Vehiculo);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateVehiculoDto:UpdateVehiculoDto, id:string):Promise<VehiculoEntity>{
        try {
            const Vehiculo = await VehiculoModel.findByIdAndUpdate(id, {...updateVehiculoDto});
            if(!Vehiculo) throw CustomError.badRequest("update Vehiculo failed")
            await Vehiculo.save();
            return VehiculoMaper.fromEntity(Vehiculo);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(id:string):Promise<VehiculoEntity>{
        try {
            const Vehiculo = await VehiculoModel.findByIdAndDelete({_id:id});
            if(!Vehiculo) throw CustomError.badRequest("Vehiculo don't exist")
            return VehiculoMaper.fromEntity(Vehiculo);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(id:string):Promise<VehiculoEntity>{
        try {
            const Vehiculo = await VehiculoModel.findById({_id:id});
            if(!Vehiculo) throw CustomError.badRequest("Vehiculo don't exist")
            return VehiculoMaper.fromEntity(Vehiculo);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}