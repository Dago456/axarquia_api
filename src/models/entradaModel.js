const { DataTypes } = require("sequelize");
import sequelize from "../database";
import Operario from "./operariosModel";

const Entrada = sequelize.define(
 "entrada",
 {
  id_Entrada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   
    hora_ent: {
      type:DataTypes.STRING ,
      allowNull: false
    },
    fecha_ent: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    mes_ent: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    año_ent: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
 },
 {
   timestamps:false
 }
);

export default Entrada
