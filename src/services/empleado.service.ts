import { EmpleadoModel } from "../data/mongodb/models/empleado.model";
import { CreateEmpleadoDto } from "../domain/dtos/empleado/create-empleado.dto";
import { UpdateEmpleadoDto } from "../domain/dtos/empleado/update-empleado.dto";
import { EmpleadoEntity } from "../domain/entities/empleado.entity";
import { CustomError } from "../domain/errors/custom.error";
import { EmpleadoMaper } from "../domain/mapers/empleadoMapers";

export class EmpleadoService{
    async create (createEmpleadoDto:CreateEmpleadoDto):Promise<EmpleadoEntity>{
        try {

            const Empleado = await EmpleadoModel.create(createEmpleadoDto);
            if(!Empleado) throw CustomError.badRequest("add Empleado failed")
            await Empleado.save();
            return EmpleadoMaper.fromEntity(Empleado);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateEmpleadoDto:UpdateEmpleadoDto, id:string):Promise<EmpleadoEntity>{
        try {
            const Empleado = await EmpleadoModel.findByIdAndUpdate(id, {...updateEmpleadoDto});
            if(!Empleado) throw CustomError.badRequest("update Empleado failed")
            await Empleado.save();
            return EmpleadoMaper.fromEntity(Empleado);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(_id:string):Promise<EmpleadoEntity>{
        try {
            const Empleado = await EmpleadoModel.findByIdAndDelete({_id});
            if(!Empleado) throw CustomError.badRequest("Empleado don't exist")
            return EmpleadoMaper.fromEntity(Empleado);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(_id:string):Promise<EmpleadoEntity>{
        try {
            const Empleado = await EmpleadoModel.findById({_id});
            if(!Empleado) throw CustomError.badRequest("Empleado don't exist")
            return EmpleadoMaper.fromEntity(Empleado);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}