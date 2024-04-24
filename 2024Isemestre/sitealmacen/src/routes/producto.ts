import { Request, Response, Application, Router } from "express";

import { ProductoController } from "../controllers/producto.controller";

export class PrpductosRoutes {
    public Producto: ProductoController =  new ProductoController();

    public routes(app: Application): void {
        app.route("/productos/test").get(this.Producto.test)
        app.route("/productos").get(this.Producto.getAllProducto)
    }
}
