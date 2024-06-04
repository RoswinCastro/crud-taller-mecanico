import { Router } from "express";
import { ClienteRoute } from "./cliente/route";
import { VehiculoRoute } from "./vehiculo/route";
import { EmpleadoRoute } from "./empleado/route";
import { RepuestoRoute } from "./repuesto/route";
import { ServicioRoute } from "./servicio/route";


export class AppRoute{
   static get route(): Router{
        const routes = Router();
        routes.use('/api/cliente', ClienteRoute.route)
        routes.use('/api/vehiculo', VehiculoRoute.route)
        routes.use('/api/empleado', EmpleadoRoute.route)
        routes.use('/api/repuesto', RepuestoRoute.route)
        routes.use('/api/servicio', ServicioRoute.route)
        return routes;
    }
}