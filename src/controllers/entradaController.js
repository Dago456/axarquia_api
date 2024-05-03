import Entrada from "../models/entradaModel";

export const obtenerEntradas = async (req,res) => {
    const entradas = await Entrada.findAll();
    res.json(entradas);
};

export const obtenerEntradaPorId = async(req,res) => {
    const entrada = await Entrada.findByPk(req.params.id);
    res.json(entrada);
};

export const crearEntrada = async (req,res) => {
    await Entrada.create(req.body);
    res.json({message: "Registro de entrada Creado"});
};

export const actualizarEntradaPorId = async (req,res) => {
    const entrada = await Entrada.findByPk(req.params.id);
    await entrada.update(req.body);
    res.json({message: "Registro de entrada actualizado"});
};

export const eliminarEntradaPorId = async (req,res) => {
    const entrada = await Entrada.findByPk(req.params.id);
    await entrada.destroy();
    res.json({message: "Registro de entrada eliminado"})
}