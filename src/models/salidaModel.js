const {DataTypes} = require ("sequelize");
import sequelize from "../database";
import Operario from "./operariosModel";

const Salida = sequelize.define(
 "salida",
 {
    id_salida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_operariosa: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Operario, 
        key: 'id_Operario'
      }
    },
    hora_sal: {
      type:DataTypes.DATE,
      allowNull: false
    },
    fecha_sal: {
      type:DataTypes.DATE,
      allowNull: false
    },
    mes_sal: {
      type:DataTypes.DATE,
      allowNull:false
    }
 },
 {
   timestamps:false
 }
);

export default Salida
