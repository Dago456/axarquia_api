const { DataTypes } = require("sequelize");
import sequelize from "../database";

const ParteComunidad = sequelize.define(
  "partes",
  {
    id_parte: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_comunidades: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "comunidades",
        key: "id_comunidades",
      },
    },
    nom_comunidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubi_comunidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    motivo_visita: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    conceptos_trabajo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hora_entrada: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materiales: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contacto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hora_automatica: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_actual: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    año_actual: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    concept_cobro: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    valor_cobro: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default ParteComunidad;
