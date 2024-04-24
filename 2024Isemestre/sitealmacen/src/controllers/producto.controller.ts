import {  Request, Response } from 'express';
import { where } from 'sequelize';

import { Producto, ProductoI } from '../models/Productos';

export class ProductoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Producto')
        } catch (error) {

        }
    }

    public async getAllProducto(req: Request, res:Response){
        try {
            const producto: ProductoI[] = await Producto.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({producto})
        } catch (error) {

        }
    }
}
