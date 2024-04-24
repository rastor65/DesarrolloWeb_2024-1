import { Request, Response, Application, Router } from "express";

import { VentaController } from "../controllers/venta.controller";

export class VentaRoutes {
    public Venta: VentaController =  new VentaController();

    public routes(app: Application): void {
        app.route("/ventas/test").get(this.Venta.test)
        app.route("/ventas").get(this.Venta.getAllventas)
    }
}
