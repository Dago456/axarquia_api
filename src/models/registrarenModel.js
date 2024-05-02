const {DataTypes} = require ("sequelize");
import sequelize from "../database";

const RegistrarEnt = sequelize.define(
 "registrarent",
 {
  id_Entrada: {
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

export default RegistrarEnt
