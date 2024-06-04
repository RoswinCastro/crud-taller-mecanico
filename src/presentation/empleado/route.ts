import { Router } from "express";
import { EmpleadoService } from "../../services/empleado.service";
import { EmpleadoController } from "./controller";



export class EmpleadoRoute{
    static get route(): Router{
         const routes = Router();
         const empleadoServices = new EmpleadoService();
         const controller = new EmpleadoController(empleadoServices);
         routes.get('/:id', controller.findOne);
         routes.put('/:id', controller.update);
         routes.delete('/id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}