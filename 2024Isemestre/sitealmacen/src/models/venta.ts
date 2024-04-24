import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
  public fechaVenta!: Date;
  public subtotal!: number;
  public impuestos!: number;
  public descuentos!: number;
  public total!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public clientes_id!: number;
}

export interface VentaI {
    fechaVenta: Date;
    subtotal: number;
    impuestos: number;
    descuentos: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    clientes_id: number;
}

Venta.init(
  {
      fechaVenta: {
        type: DataTypes.DATE,
        allowNull: false
      },
      subtotal: {
        type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale according to your needs
        allowNull: false
      },
      impuestos: {
        type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale according to your needs
        allowNull: false
      },
      descuentos: {
        type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale according to your needs
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale according to your needs
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
    tableName: "ventas",
    sequelize: database,
    timestamps: true
  }
);
