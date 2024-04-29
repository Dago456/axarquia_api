const {DataTypes} = require ("sequelize");
import sequelize from "../database";

const RegistrarEnt = sequelize.define(
 "registraren",
 {
    id_Entrada : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_operario: {
      type:DataTypes.INTEGER,
      allowNull: false,
      FOREIGNKEYS: true 
    },
    hora_ent: {
      type:DataTypes.DATE,
      allowNull: false
    },
    fecha_ent: {
      type:DataTypes.DATE,
      allowNull: false
    },
    mes_ent: {
      type:DataTypes.DATE,
      allowNull:false
    }
 },
 {
   timestamps:false
 }
);

export default RegistrarEnt
