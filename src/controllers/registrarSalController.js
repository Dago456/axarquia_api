import RegistrarSal from "../models/registroSalModel";

export const obtenerRegistroSal = async (req,res) => {
    const RegistroSals = await RegistrarSal.findyPk(req.params.id);
    res.json(RegistroSals);
};

export const obtenerRegistroSalPorId = async(req,res) => {
    const RegistroSal = await RegistrarSal.findByPk(req.params.id);
    res.json(RegistroSal);
};

export const crearRegistroSal = async (req,res) => {
    await RegistrarSal.create(req.body);
    res.json({message: "Registro de salida Creado"});
};

export const actualizarRegistroSalPorId = async (req,res) => {
    const RegistroSal = await RegistrarSal.findByPk(req.params.id);
    await RegistroSal.update(req.body);
    res.json({message: "Registro de salida actualizado"});
};

export const eliminarRegistroSalPorId = async (req,res) => {
    const RegistroSal = await RegistrarSal.findByPk(req.params.id);
    await RegistroSal.destroy();
    res.json({message: "Registro de salida eliminado"})
}