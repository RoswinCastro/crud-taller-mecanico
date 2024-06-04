import { Router } from "express";
import { ClienteService } from "../../services/cliente.service";
import { ClienteController } from "./controller";

export class ClienteRoute{
    static get route(): Router{
         const routes = Router();
         const clienteServices = new ClienteService();
         const controller = new ClienteController(clienteServices);
         routes.get('/:id', controller.findOne);
         routes.put('/:id', controller.update);
         routes.delete('/id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}