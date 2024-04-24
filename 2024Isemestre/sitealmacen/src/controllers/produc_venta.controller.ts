import {  Request, Response } from 'express';
import { where } from 'sequelize';

import { Produc_Ventas, Produc_VentasI } from '../models/Produc_Ventas';

export class Produc_VentasController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Produc_Ventas')
        } catch (error) {

        }
    }

    public async getAllProduc_Ventas(req: Request, res:Response){
        try {
            const produc_Ventas: Produc_VentasI[] = await Produc_Ventas.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({produc_Ventas})
        } catch (error) {

        }
    }
}
