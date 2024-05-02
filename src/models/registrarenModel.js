const {DataTypes} = require ("sequelize");
import sequelize from "../database";

const RegistrarEnt = sequelize.define(
 "registraren",
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
      references: {
        model: 'operarios',
        key: '1'
      }
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
