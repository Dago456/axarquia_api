const { DataTypes } = require("sequelize");
import sequelize from "../database";

const Operario = sequelize.define(
  "operario",
  {
    id_Operario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    nom_ope: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

export default Operario
