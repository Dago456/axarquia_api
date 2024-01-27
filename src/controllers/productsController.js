import Comunidad from "../models/productsModel";

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
