import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Producto extends Model {
  public nombre!: string;
  public marca!: string;
  public stockmin!: number;
  public cantidad!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public tipo_producto_id!: number;

}

export interface ProductoI {
    nombre: string;
    marca: string;
    stockmin: number;
    cantidad: number;
    createdAt: Date;
    updatedAt: Date;
    tipo_producto_id: number;
}

Producto.init(
  {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stockmin: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      cantidad: {
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
      },
      tipo_producto_id: {
        type: DataTypes.DECIMAL,
        allowNull: false
      } 
  },
  {
    tableName: "Productos",
    sequelize: database,
    timestamps: true
  }
);
