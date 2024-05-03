import Salida from "../models/salidaModel";

export const obtenerSalidas = async (req,res) => {
    const salidas = await Salida.findAll();
    res.json(salidas);
};

export const obtenerSalidaPorId = async(req,res) => {
    const salida = await Salida.findByPk(req.params.id);
    res.json(salida);
};

export const crearSalida = async (req,res) => {
    await Salida.create(req.body);
    res.json({message: "Registro de salida Creado"});
};

export const actualizarSalidaPorId = async (req,res) => {
    const salida = await Salida.findByPk(req.params.id);
    await salida.update(req.body);
    res.json({message: "Registro de salida actualizado"});
};

export const eliminarSalidaPorId = async (req,res) => {
    const  salida= await Salida.findByPk(req.params.id);
    await salida.destroy();
    res.json({message: "Registro de salida eliminado"})
}