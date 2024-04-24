import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Produc_Ventas extends Model {
  public producto_id!: number;
  public venta_id!: number;
  public cantidad!: number;
  public precio!: number;
  public total!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

}

export interface Produc_VentasI {
    producto_id: number;
    venta_id: number;
    cantidad: number;
    precio: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
}

Produc_Ventas.init(
  {
      producto_id: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      venta_id: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      cantidad: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      } 
  },
  {
    tableName: "produc_venta",
    sequelize: database,
    timestamps: true
  }
);
