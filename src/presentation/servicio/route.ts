import { Router } from "express";
import { ServicioService } from "../../services/servicio.service";
import { ServicioController } from "./controller";



export class ServicioRoute{
    static get route(): Router{
         const routes = Router();
         const servicioServices = new ServicioService();
         const controller = new ServicioController(servicioServices);
         routes.get('/:id', controller.findOne);
         routes.put('/:id', controller.update);
         routes.delete('/id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}