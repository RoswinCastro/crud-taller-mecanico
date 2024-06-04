import { Router } from "express";
import { VehiculoService } from "../../services/vehiculo.service";
import { VehiculoController } from "./controller";



export class VehiculoRoute{
    static get route(): Router{
         const routes = Router();
         const vehiculoServices = new VehiculoService();
         const controller = new VehiculoController(vehiculoServices);
         routes.get('/:id', controller.findOne);
         routes.put('/:id', controller.update);
         routes.delete('/id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}