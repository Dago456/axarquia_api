const {DataTypes} = require ("sequelize");
import sequelize from "../database";

const RegistrarSal = sequelize.define(
 "registrarsal",
 {
    id_salida : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_operariosa: {
      type:DataTypes.INTEGER,
      allowNull: false,
      FOREIGNKEYS: true 
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

export default RegistrarSal
