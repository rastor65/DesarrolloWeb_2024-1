import {  Request, Response } from 'express';
import { where } from 'sequelize';

import { VentaI, Venta } from  '../models/venta';

export class VentaController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para venta')
        } catch (error) {

        }
    }

    public async getAllventas(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({venta})
        } catch (error) {

        }
    }
}
