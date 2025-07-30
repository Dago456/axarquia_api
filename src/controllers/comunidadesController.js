import Comunidad from "../models/comunidadesModel";
import { Op } from "sequelize"; // Asegúrate de importar Op

export const buscarComunidadesPorNombre = async (req, res) => {
  const { nombre } = req.query;

  if (!nombre) {
    return res.status(400).json({ message: "Parámetro 'nombre' requerido" });
  }

  try {
    const comunidades = await Comunidad.findAll({
      where: {
        nom_comunidad: {
          [Op.like]: `%${nombre}%`, // búsqueda flexible
        },
      },
      limit: 10, // opcional: limitar resultados
    });

    res.json(comunidades);
  } catch (error) {
    console.error("Error buscando comunidades:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const obtenerComunidades = async (req, res) => {
  const comunidades = await Comunidad.findAll();
  res.json(comunidades);
};

export const obtenerComunidadPorId = async (req, res) => {
  const comunidad = await Comunidad.findByPk(req.params.id);
  res.json(comunidad);
};

export const crearComunidad = async (req, res) => {
  await Comunidad.create(req.body);
  res.json({ message: "Comunidad creada" });
};

export const actualizarComunidadPorId = async (req, res) => {
  const comunidad = await Comunidad.findByPk(req.params.id);
  await comunidad.update(req.body);
  res.json({ message: "Comunidad actualizada" });
};

export const eliminarComunidadPorId = async (req, res) => {
  const comunidad = await Comunidad.findByPk(req.params.id);
  await comunidad.destroy();
  res.json({ message: "Comunidad eliminada" });
};
