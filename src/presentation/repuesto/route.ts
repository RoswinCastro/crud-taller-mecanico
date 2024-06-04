import { Router } from "express";
import { RepuestoService } from "../../services/repuesto.service";
import { RepuestoController } from "./controller";




export class RepuestoRoute{
    static get route(): Router{
         const routes = Router();
         const repuestoServices = new RepuestoService();
         const controller = new RepuestoController(repuestoServices);
         routes.get('/:id', controller.findOne);
         routes.put('/:id', controller.update);
         routes.delete('/id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}