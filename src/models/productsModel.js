const { DataTypes } = require("sequelize");
import sequelize from "../database";

const Comunidad = sequelize.define(
  "comunidades",
  {
    id_comunidades: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    nom_comu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubi_comu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Comunidad

