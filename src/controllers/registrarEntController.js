import RegistrarEnt from "../models/registrarenModel";

export const obtenerRegistroEnt = async (req,res) => {
    const RegistroEnts = await RegistrarEnt.findAll();
    res.json(RegistroEnts);
};

export const obtenerRegistroEntPorId = async(req,res) => {
    const RegistroEnt = await RegistrarEnt.findByPk(req.params.id);
    res.json(RegistroEnt);
};

export const crearRegistroEnt = async (req,res) => {
    await RegistrarEnt.create(req.body);
    res.json({message: "Registro de entrada Creado"});
};

export const actualizarRegistroEntPorId = async (req,res) => {
    const RegistroEnt = await RegistrarEnt.findByPk(req.params.id);
    await RegistroEnt.update(req.body);
    res.json({message: "Registro de entrada actualizado"});
};

export const eliminarRegistroEntPorId = async (req,res) => {
    const RegistroEnt = await RegistrarEnt.findByPk(req.params.id);
    await RegistroEnt.destroy();
    res.json({message: "Registro de entrada eliminado"})
}