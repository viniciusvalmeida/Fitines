import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Vendas = sequelize.define(
  "Vendas",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    CarrinhoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Carrinhos',
        key: 'id',
      },
      
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    Total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }

  }
)

export default Vendas