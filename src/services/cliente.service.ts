import { ClienteModel } from "../data/mongodb/models/cliente.model";
import { CreateClienteDto } from "../domain/dtos/cliente/create-cliente.dto";
import { UpdateClienteDto } from "../domain/dtos/cliente/update-cliente.dto";
import { ClienteEntity } from "../domain/entities/cliente.entity";
import { CustomError } from "../domain/errors/custom.error";
import { ClienteMaper } from "../domain/mapers/ClienteMaper";



export class ClienteService{
    async create (createClienteDto:CreateClienteDto):Promise<ClienteEntity>{
        try {

            const Cliente = await ClienteModel.create(createClienteDto);
            if(!Cliente) throw CustomError.badRequest("add Cliente failed")
            await Cliente.save();
            return ClienteMaper.fromEntity(Cliente);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateClienteDto:UpdateClienteDto, id:string):Promise<ClienteEntity>{
        try {
            const Cliente = await ClienteModel.findByIdAndUpdate(id, {...updateClienteDto});
            if(!Cliente) throw CustomError.badRequest("update Cliente  failed")
            await Cliente.save();
            return ClienteMaper.fromEntity(Cliente);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(id:string):Promise<ClienteEntity>{
        try {
            const Cliente = await ClienteModel.findByIdAndDelete({_id:id});
            if(!Cliente) throw CustomError.badRequest("Cliente don't exist")
            return ClienteMaper.fromEntity(Cliente);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(id:string):Promise<ClienteEntity>{
        try {
            const Cliente = await ClienteModel.findById({_id:id});
            if(!Cliente) throw CustomError.badRequest("Cliente don't exist")
            return ClienteMaper.fromEntity(Cliente);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}