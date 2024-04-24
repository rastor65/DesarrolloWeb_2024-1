import { Request, Response, Application, Router } from "express";

import { tipo_productoController } from "../controllers/tipo_producto.controller";

export class Tipo_productoRoutes {
    public tipo_producto: tipo_productoController =  new tipo_productoController();

    public routes(app: Application): void {
        app.route("/tipo_producto/test").get(this.tipo_producto.test)
        app.route("/tipo_producto").get(this.tipo_producto.getAlltipo_producto)
    }
}
