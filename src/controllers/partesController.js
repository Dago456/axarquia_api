import ParteComunidad from "../models/parteModel";

export const obtenerPartes = async (req, res) => {
  const partes = await ParteComunidad.findAll();
  res.json(partes);
};

export const obtenerPartesPorId = async (req, res) => {
  const partes = await ParteComunidad.findByPk(req.params.id);
  res.json(partes);
};

export const crearPartes = async (req, res) => {
  await ParteComunidad.create(req.body);
  res.json({ message: "Parte Comunidad creada" });
};

export const actualizarPartesPorId = async (req, res) => {
  const partes = await ParteComunidad.findByPk(req.params.id);
  await partes.update(req.body);
  res.json({ message: "Parte Comunidad actualizada" });
};

export const eliminarPartesPorId = async (req, res) => {
  const partes = await ParteComunidad.findByPk(req.params.id);
  await partes.destroy();
  res.json({ message: "Parte Comunidad eliminada" });
};
