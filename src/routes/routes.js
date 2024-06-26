import comunidadesRoutes from "./comunidadesRoutes";
import operariosRoutes from "./operariosRoutes";
import entradaRoutes from "./entradaRoutes";
import salidaRoutes from "./salidaRoutes";


export default function (app) {

  app.use("/comunidad", comunidadesRoutes);
  app.use("/operario", operariosRoutes);
  app.use("/entrada", entradaRoutes)
  app.use("/salida", salidaRoutes)
  app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
  });
}