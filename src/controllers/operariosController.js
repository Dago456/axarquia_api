import Operario from "../models/operariosModel";

export const obtenerOperarios = async (req, res) => {
  const operarios = await Operario.findAll();
  res.json(operarios);
};

export const obtenerOperarioPorId = async (req, res) => {
  const operario = await Operario.findByPk(req.params.id);
  res.json(operario);
};

export const crearOperario = async (req, res) => {
  await Operario.create(req.body);
  res.json({ message: "Operario creada" });
};

export const actualizarOperarioPorId = async (req, res) => {
  const operario = await Operario.findByPk(req.params.id);
  await operario.update(req.body);
  res.json({ message: "Operario actualizada" });
};

export const eliminarOperarioPorId = async (req, res) => {
  const operario = await Operario.findByPk(req.params.id);
  await operario.destroy();
  res.json({ message: "Operario eliminada" });
};
