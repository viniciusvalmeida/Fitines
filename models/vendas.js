import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Vendas = sequelize.define(
  "Vendas",
  {
    ClienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Clientes',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    ProdutoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Produtos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    Quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PrecoUnd: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }
)

export default Vendas