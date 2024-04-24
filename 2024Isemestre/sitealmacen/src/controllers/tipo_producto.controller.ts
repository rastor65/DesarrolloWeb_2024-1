import {  Request, Response } from 'express';
import { where } from 'sequelize';

import { tipo_producto, tipo_productoI } from '../models/Tipo_producto';

export class tipo_productoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para tipo_producto')
        } catch (error) {

        }
    }

    public async getAlltipo_producto(req: Request, res:Response){
        try {
            const Tipo_producto: tipo_productoI[] = await tipo_producto.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({Tipo_producto})
        } catch (error) {

        }
    }
}
