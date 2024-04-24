import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class tipo_producto extends Model {
  public nombre!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public clientes_id!: number;

}

export interface tipo_productoI {
    nombre: string;
    createdAt: Date;
    updatedAt: Date;
}

tipo_producto.init(
  {
    nombre: {
        type: DataTypes.STRING,
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
    tableName: "tipo_producto",
    sequelize: database,
    timestamps: true
  }
);
