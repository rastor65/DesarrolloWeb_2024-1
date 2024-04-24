import { Request, Response, Application, Router } from "express";

import { Produc_VentasController } from "../controllers/produc_venta.controller";

export class Produc_VentasRoutes {
    public Produc_Ventas: Produc_VentasController =  new Produc_VentasController();

    public routes(app: Application): void {
        app.route("/Produc_Ventas/test").get(this.Produc_Ventas.test)
        app.route("/Produc_Ventas").get(this.Produc_Ventas.getAllProduc_Ventas)
    }
}
